const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userId = req.session['user_id'];
    let templateVars = { items: {} };

    const queryString = `
      SELECT items.*
      FROM items
      FULL JOIN users ON items.user_id = users.id
      WHERE items.user_id = $1;
    `;
    const queryParams = [userId];
    console.log(req.session)

    if (!userId) {
      return res.redirect('/login');
    }

    db
      .query(queryString, queryParams)
      .then(result => {
        if (result.rows[0]) {
          const items = result.rows;
          for (item of items) {
            templateVars.items[item.id] = item;
          }
          console.log(templateVars)
          return res.render('my-listings', templateVars);
        } else {
          return res.render('my-listings')
        }
      })
      .catch(err => console.log('Error: ', err.stack));

  });

  return router;
};
