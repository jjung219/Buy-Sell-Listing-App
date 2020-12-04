const express = require('express');
const router = express.Router();
const initHelpers = require('../helpers.js');

module.exports = (db) => {
  const helpers = initHelpers(db);

  router.get("/", (req, res) => {
    const userId = req.session['user_id'];
    const templateVars = { user: userId };
    res.render("login", templateVars);

  });

  router.post("/", (req, res) => {
    const { email, password } = req.body;
    //  console.log(email,password)
    helpers.checkUserAuth(email, password)
      .then(user => {
        if (!user) {
          res.send("Invalid details")
        } else {
          helpers.getUserwithEmail(email)
            .then(user => {
              req.session['user_id'] = user.id;
              res.redirect("/")
            })
        }
      });
  });
  return router;
}

