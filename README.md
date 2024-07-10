<div align="center">
      <h1> Taskify </h1>
     </div>
It is a simple MERN web app for task management and planning. The app's backend is powered by Express, Node, and MongoDB while the front end uses Tailwind, ReactJS, and Redux for an intuitive and Responsive UI. The app also uses Firebase for supporting file storage. 

# Features
- User Friendly UI.
- Restricted access and protected routes.
- Comments and search section. 
- Organised layouts for grid and list views.
- Easy account management.
- Separate tracking and timeline pages.

## Usage 
- Admin User: ```admin@taskify.com```
- Admin Pass : ```akarsh3053```

#### For every newly added user password is their email address.


# Tech Used

 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

# Steps for local setup

##  Server Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:

- NODE_ENV = development
- MONGODB_URI = 'Mongo URI'
- JWT_SECRET= 'Your Secret code'
- PORT=8800

 ## Steps to run the server

1. Open the project in any editor of your choice.
2. Navigate into the server directory `cd server`.
3. Run `npm i` or `npm install` to install the packages.
4. Run `npm start` to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.

## Client Environment variables
First, create the environment variables file `.env` in the client folder. The `.env` file contains the following environment variables:

- VITE_APP_BASE_URL = `http://localhost:8800` #Note: Change the port 8800 to your port number.
- VITE_APP_FIREBASE_API_KEY = `Firebase api key`

## Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm i` or `npm install` to install the packages.
3. Run `npm start` to run the app on `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Live Demo
<a href="https://owldone-taskify.netlify.app" target="_blank"><img src="https://www.animatedimages.org/data/media/1096/animated-click-here-sign-and-button-image-0042.gif" /></a>

The website might take some time to load at first as the Render server goes to sleep, give it some time once it is on it works magically.
