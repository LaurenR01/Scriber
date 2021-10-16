# Scriber 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://scriber-laurenr01.herokuapp.com//)

![ScriberScreenshots](https://user-images.githubusercontent.com/78819957/137565697-dd332b35-8eed-47a9-bb8f-7c955f798015.png)


## Description
Whether you’re journaling about your day or writing the great American novel, Scriber helps you save, polish, and share your work with a community of writers.

Save your drafts until they’re ready to post, or allow the text to speech module to read it back to you so you can judge word choice, tone, and syntax.  More interested in reading than writing?  Search the archives by subject matter to find something that piques your interest.

## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Future Development](#future-development)
- [Credits](#credits)
- [License](#license)

## Installation
For general use, the application can be used right from the deployed link [https://scriber-laurenr01.herokuapp.com](https://scriber-laurenr01.herokuapp.com)

If you wanted to work on development of the app, you would go to [https://github.com/LaurenR01/Scriber](https://github.com/LaurenR01/Scriber) and clone/fork the repo.  You would need to have a [MongoDB server](https://www.mongodb.com/try/download/community) and [Redis](https://redis.io/) already installed and running on your machine.  From your local computer, you would need to run the following commands:
```
npm run install
cd server
node seeds/seed.js
cd ..
npm run start
```
In a second terminal, you'll want to start your front end using:
```
cd client
npm run start
```


## Technologies Used

Scriber has a React front end styled with the MUI library.  It features a MongoDB/Apollo-Express server and it is built with Node.js.  It utilizes Mongoose and GraphQL for enhanced schema building and the integration of the Redis caching package increases the application speed exponentially.

## Future Development
In the future, we hope to incorporate rich text editing features into the post text box and add a button which allows posts to be saved as drafts before offical posting.  

It also would be worthwhile to add the ability to make comments from other users so writers can collaborate and help each other edit their entries through peer review.

## Credits
Ethan Harsh [GitHub](https://github.com/EthanHarsh) <br>
Mark Lindskog [GitHub](https://github.com/mjlindskog) <br>
Lauren Rowe [GitHub](https://github.com/LaurenR01) <br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


