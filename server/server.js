const express = require('express');
const path = require('path');
const db = require('./config/connection');
//const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { typeDefs, resolvers } = require('./schemas/index');
const http = require('http')
const { authMiddleware } = require('./utils/auth')

const app = express();
const PORT = process.env.PORT || 4015;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


//START SERVER
const port = 4051;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

startApolloServer(typeDefs, resolvers)

async function startApolloServer(typeDefs, resolvers) {
  //console.log(typeDefs)
  //console.log(resolvers)
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({PORT}, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}
