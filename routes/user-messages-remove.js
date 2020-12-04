const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post ("/:id/delete", (req, res) => {
    const userId = req.session.user_id;
    const messageId = req.params.id;


    const queryParams = [userId, messageId]
    const queryString = `
      DELETE FROM messages
      WHERE receiver_id = $1
      AND id = $2
    `;

    if (!userId) {
      return res.redirect('/login');
    }

    db
      .query(queryString, queryParams)
      .then(()=> {
        return res.redirect('/messages');
      })
      .catch(err => console.log('Error: ', err.stack));
  });

  return router;
};
