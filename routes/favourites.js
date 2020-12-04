const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let userId = req.session['user_id'];
    let items;
    const queryString1 = `
    SELECT items.*
    FROM items
    JOIN favorites on favorites.item_id = items.id
    WHERE favorites.user_id = $1;
    `;

    db
    .query(queryString1, [userId])
    .then(result => {
      let userId = req.session['user_id'];
      items = (result.rows);
      templateVar = { itemsArr: items, user: userId}
      res.render('favourites', templateVar)

    })
    .catch(e => console.log(e.stack));

  })

  router.post("/:id", (req, res) => {
    let userId = req.session['user_id'];
    let itemId = req.params.id
    const queryParams = [itemId, userId]
    const queryString = `
    INSERT INTO
    favorites(item_id, user_id)
    VALUES
    ($1, $2);
    `;

    db
    .query(queryString, queryParams)
    .then(result => {
      res.redirect('/')
    })
    .catch(e => console.log(e.stack));
  })

  router.post("/:id/delete", (req, res) => {
    let userId = req.session['user_id'];
    let itemId = req.params.id
    const queryParams = [Number(itemId), Number(userId)]
    const queryString = `
    delete FROM favorites
    where item_id = $1 and user_id = $2
    `;
    console.log(queryParams)
    db
    .query(queryString, queryParams)
    .then(result => {
      console.log(result.rows)

      res.redirect(req.query.redirect ? req.query.redirect : '/')
    })
    .catch(e => console.log(e.stack));
  })


  return router

}
