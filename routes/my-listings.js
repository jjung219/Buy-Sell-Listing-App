const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userId = req.session['user_id'];
    let templateVars = { user: {name: ''}, items: {} };

    const queryString = `
      SELECT users.name as user, items.*
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
        const items = result.rows;
        // templateVars.user.name = items[0].user;
        console.log(items[0].user);
        for (item of items) {
          templateVars.items[item.id] = item;
        }
        console.log(templateVars)
        templateVars['user'].name = items[0].user
        return res.render('my-listings', templateVars);
      })
      .catch(err => console.log('Error: ', err.stack));

  });

  return router;
};
