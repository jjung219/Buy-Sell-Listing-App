const express = require('express');
const router = express.Router();
const initHelpers = require('../helpers.js');
module.exports = (db) => {
  const helpers = initHelpers(db);

  router.get("/", (req, res) => {
    const reciever_id = req.session.user_id;
    if (reciever_id) {
      helpers.receivedMessages(reciever_id)
        .then(message => {
          db
            .query(`SELECT * FROM users WHERE id = $1`, [reciever_id])
            .then((result) => {
              const userInfo = result.rows[0];
              res.render("user_messages", { messages: message, user: userInfo })
            })
        })
        .catch(err => console.log(err));
    } else {
      res.send("<h1>Please Login</h1>")
    }
  });
  return router;
}



