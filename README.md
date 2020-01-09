# mean student backend Node
### Steps to set up

1. `npm init -y`
- create the package.json file. 
- This file will have the meta data of your MEAN Stack app, 
- It is also known as the manifest file of any NodeJS project.

2. `npm install --save body-parser cors express mongoose`
- body-parser: The body-parser npm module is a JSON parsing middleware. 
It helps to parse the JSON data, plain text or a whole object.
- CORS: This is a Node JS package, also known as the express js middleware. 
It allows enabling CORS with multiple options. It is available through the npm registry.
- Express.js: Express js is a free open source Node js web application framework. 
It helps in creating web applications and RESTful APIs.
- Mongoose: Mongoose is a MongoDB ODM for Node. 
It allows you to interact with MongoDB database.

3. `npm install nodemon --save-dev`
Starting a server every time a change is made is a time-consuming task. 
To get rid of this problem we use `nodemon` npm module. 
This package restarts the server automatically every time we make a change. 
We’ll be installing it locally by using given below command.

4. `touch server.js`
- create a file by the name of `server.js`

5. `touch db.js`

# If you are cloning the repo:

`git clone https://github.com/prlama55/school_node_back.git`

`cd school_node_back`

`npm i`

### Run project: 

`npm start`
