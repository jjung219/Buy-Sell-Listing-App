/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const initHelpers = require('../helpers.js');


module.exports = (db) => {
  const helpers = initHelpers(db);
  router.get("/", (req, res) => {
    const userId = req.session['user_id'];
    const templateVars = { user: userId };

    res.render("register", templateVars);
  });


  router.post("/", (req, res) => {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    // console.log(userName,userEmail,userpassword);
    helpers.getUserwithEmail(userEmail)
      .then(user => {
        if (!user) {
         helpers.addNewUser(userName, userEmail, userPassword)
            .then(userId => {
              console.log(`test:${userId}`);
              req.session.user_id = userId;
              console.log(req.session);
              res.redirect("/")
            });
        } else {
          res.send("user already exist")
        }
      });
  });
  return router;
};

//.get ---'/'
// .get ---'/register'
// .post ----'/register'
// .get ---'/login'
// .post----'/login'
// .get ----'/listings'------get all the listings
// .post ---'/listings'------create a new listing
// .get ----'/listings/:user_id------listings of a particular userId
// .get ----'/listings/:item_id'------particular listing
// .get ----'/listings/favourites'------ view favourite listings
// .post --- '/listings/item_id/delete'---------delete a particular listing
// .post ---'/listings/item_id/edit'------edit a  listing
// .get---'/listings/new'---------go to a form to create a new listing
// .post ---'/logout'-----------logout
