# Sociable
Sociable is a simple to use RESTful API for a generic social media platform.
It uses Mongooose and MonogDB fully as the backbone of the database and Express for the server.

## Installation
The installation for the app if simple:
- run `npm i` to install the necessary node packages.
- run `node seeders/index.js` to seed the database with filler data, or modify the seed data in the `seeds` folder with your data.
- run `npm start` to start the server.

## Tests
Below are some images of some endpoint tests for getting and inserting data into each section of the database:

## Users Requests  
  
### GET
path: `/api/users`
![users-get-demo](./assets/images/demo-1.png)  
  
### POST
path: `/api/users`
![users-post-demo](./assets/images/demo-2.png)

## Thoughts Requests  
  
### GET
path: `/api/thoughts`
![thoughts-get-demo](./assets/images/demo-3.png)  
  
### POST
path `/api/thoughts`
![thoughts-post-demo](./assets/images/demo-4.png)

## Friends Requests
  
### POST
path: `api/users/:userId/friends/:friendId`
![friends-post-demo](./assets/images/demo-5.png)
  
### DELETE
path: `api/users/:userId/friends/:friendId`
![friends-delete-demo](./assets/images/demo-6.png)

## Reactions Requests
  
### POST
path: `/api/thoughts/:thoughtId/reactions`
![reactions-post-demo](./assets/images/demo-7.png)
  
### DELETE
path: `/api/thoughts/:thoughtId/reactions/:reactionId`
![reactions-delete-demo](./assets/images/demo-8.png)