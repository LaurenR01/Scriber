const { Entry } = require('../models/Entry');
const User = require('../models/User');

const resolvers = {
    Query: {
        entry: async (entryID) => {
            const foundEntry = await Entry.find({ entryID })
            if (!foundEntry) {
                throw new AuthenticationError('No Entry Found 🥲');
            } else {
                return await Entry.find({ entryID });
            }
        },
        user: async (parent, { username }) => {
            const foundUser = await User.findOne(username);

            if (!foundUser) {
                throw new AuthenticationError('Something went wrong 🥲');
            } else {
                return foundUser;
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({
                username,
                email,
                password
            });

            if (!user) {
                throw new AuthenticationError('Something went wrong 🥲');
            }
            const token = signToken(user);
            return { token, user };
        },
        addEntry: async ({ username, title, body, subject }) => {
            return Entry.create({ username, title, body, subject });
        },
        editEntry: async (titleId) => {
            return Entry.findOneAndUpdate(
                { _id: titleId },
                {
                    $addToSet: { title: title, body: content, subject: tag }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

        },
        deleteEntry: async (titleId) => {
            return Entry.findOneAndDelete({ _id: titleId });
        },
        userLogin: async (parent, { email, password }) => {
            // add mutation for user login
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Something went wrong 🥲');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Something went wrong 🥲');
            }
            const token = signToken(user);
            return { token, user };
        }

    }
};

module.exports = resolvers;
