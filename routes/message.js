const express = require('express');
const router = express.Router();
const initHelpers = require('../helpers.js');

module.exports = (db) => {
  const helpers = initHelpers(db);
  router.get("/:id/", (req, res) => {
    const userId = req.session['user_id'];
    const item_id = req.params.id;
    const templateVars = { user: userId, item_id: item_id };
    if (userId) {
      res.render("new-message", templateVars);
    } else {
      res.send("<h1>Please Login</h1>")
    }
  })

  router.post("/:id/", (req, res) => {
    // console.log(req.body)
    const item_id = req.params.id;
    const content = req.body.content;
    const sender_id = req.session.user_id;
    if (sender_id) {
      helpers.getReceiverId(item_id)
        .then(receiver_id => {
          helpers.getEmailByUserId(sender_id)
            .then(email => {
              console.log(email, receiver_id)
              helpers.newMessage(email.email, sender_id, item_id, content, receiver_id.user_id)
                .then(message => {
                  res.render("temp_message", { message: "Message sent", nextPage: "/" })
                })
            })
        })
    } else {
      res.send("<h1>Please Login</h1>")
    }
  })
  return router;
}
