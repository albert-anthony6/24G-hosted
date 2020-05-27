# 24G - Albert Valdes

**Version 1.0.0**

A Full Stack project made using the Vue.js, Node, Express, mongoDB, and mongoose. Users are able to sign up, log in, and create comments for each video displayed on the site. RESTful API has been implemented into this project.

---

## project Schema

Project can be cloned at https://github.com/albert-anthony6/24g. 

Please note that if run locally, some changes may need to be made such as allowing access to any port other than 8082.
To change the allowed port, please go to app.js in the backend folder and change app.use(cors({credentials: true, origin: 'http://localhost:8082'})); on line 20 to be your desired local port number.

Also note that github code may not include the local url path needed to run app locally; in order to fix, please include http://localhost:8000 in the API call functions located in the following client folder files...

- /src/pages/Home.page.vue

- /src/components/SelectedVideo.component.vue

- /src/components/SignIn.component.vue

- /src/components/SignUp.component.vue

- /src/components/Header.component.vue

Google Drive link should include all hidden files from gitignore if needed. Connection with the database is made via mongoose and mongoDB atlas.

### Scripts to run backend and client code with nodemon package
For backend, move current path to \backend and run the following...

- 'npm run dev' for development

- 'npm run start:prod' for production

For client, move current path to \client and run the following...

- npm run serve

### Backend script if not using nodemon package

- npm start or node server.js

## Acknowledgments

Some backend features has been implemented and are working but have not been added to use with the UI mainly due to time restraints. Working code that has been included in the backend but not implemented with the UI include...

- Comment deletion

- Password reset

- forgot password (tested with nodemailer package)

- Getting specific data

- etc...

Many additions could still be made to this project, if work were to be continued for this project there would be chances to include...

- Deleting user

- Ppdating own user if logged in

- Updating comment

- Getting account info

- Account page

- User roles such as admin, user, etc to set restrictions

- Restrictions to only deleting users own comment

- Alerts component animation instead of using javascript alert()

- File importing

- Actual sending forgot password email to user

- Secure http

- etc...the list is really endless here.

### Built With

- Vue.js

- Sass

- Node.js

- Express

- MongoDB

- Mongoose

## License and copyright

© Albert Valdes, https://github.com/albert-anthony6