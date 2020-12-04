
module.exports = (db) => {
  const getUserwithEmail = function (email) {
    return db.query(`SELECT * FROM users WHERE email=$1`, [email])
      .then(res => res.rows[0])
      .catch(err => console.log(err));
  }

  const checkUserAuth = function (email, password) {
    return db.query(`SELECT * FROM users WHERE email=$1 AND password= $2`, [email, password])
      .then(user => user.rows[0])
      .catch(err => console.log(err));
  }


  const addNewUser = function (name, email, password) {
    return db.query(`INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *`, [name, email, password])
      .then(user => user.rows[0].id)
      .catch(err => console.log(err));
  }
  const addListing = function (listing) {
    return db.query(`INSERT INTO items(name,description,photo_url,price,condition,user_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`, [listing.name, listing.description, listing.photo_url, listing.price, listing.condition, listing.user_id])
      .then(res => res.rows[0])
      .catch(err => console.log(err));

  }
  const receivedMessages = function (receiver_id) {
    return db.query(`SELECT messages.id, sender_email,content,items.name FROM messages JOIN items ON  messages.item_id = items.id WHERE receiver_id=$1`, [receiver_id])
      .then(res => res.rows)
      .catch(err => console.log(err));
  }

  const newMessage = function (sender_email, sender_id, item_id, message, receiver_id) {
    return db.query(`INSERT INTO messages(sender_email,sender_id,item_id,content,receiver_id) VALUES($1,$2,$3,$4,$5) RETURNING *`, [sender_email, sender_id, item_id, message, receiver_id])
      .then(res => res.rows[0])
      .catch(err => console.log(err));
  }
  const getEmailByUserId = function (user_id) {
    return db.query(`SELECT users.email FROM users WHERE id=$1`, [user_id])
      .then(res => res.rows[0])
      .catch(err => console.log(err));
  }
  const getReceiverId = function (item_id) {
    return db.query(`SELECT user_id FROM items WHERE items.id=$1`, [item_id])
      .then(res => res.rows[0])
      .catch(err => console.log(err));
  }


  return {
    getUserwithEmail,
    checkUserAuth,
    addNewUser,
    addListing,
    receivedMessages,
    newMessage,
    getEmailByUserId,
    getReceiverId,
  };
}

