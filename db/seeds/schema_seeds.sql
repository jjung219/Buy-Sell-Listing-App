INSERT INTO
  users(name, email, password)
VALUES
  ('John Doe', 'joh@ymail.com', 'password');

INSERT INTO
  users(name, email, password)
VALUES
  ('Amy Jones', 'amy@ymail.com', 'password');

INSERT INTO
  users(name, email, password)
VALUES
  ('Alice Blue', 'alice@gmail.com', 'password');

INSERT INTO
  items(
    user_id,
    name,
    description,
    photo_url,
    price,
    condition
  )
VALUES
(
    1,
    'orange couch',
    'I used this for 1 year and it is as good as new!',
    'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    250,
    'Used'
  ),
(
    1,
    'table',
    'Just the table, laptop not included. Good as new!',
    'https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    80,
    'Used'
  ),
(
    1,
    'luxury couch',
    'Bought it from France. Luxurious couch',
    'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y291Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    700,
    'Used'
  ),
(
    2,
    'patio couch',
    'perfect for your patio!',
    'https://images.unsplash.com/photo-1599653221053-8633633ee005?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvdWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    350,
    'New'
  ),
(
    2,
    'white drawer',
    'Bought it but never used it!',
    'https://images.unsplash.com/photo-1586266561585-a256c3c3a348?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FiaW5ldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    230,
    'New'
  ),
(
    2,
    'bed',
    'Used it for 1 year',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkJTIwZnJhbWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    150,
    'Used'
  ),
(
    3,
    'comfy couch',
    'My family had it for a few months',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y291Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    200,
    'Used'
  ),
(
    3,
    'side chair',
    'orange chair to brighten up your room! Pick up today!',
    'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    30,
    'Used'
  ),
(
    2,
    'old couch',
    'used it for a couple of years',
    'https://images.unsplash.com/photo-1560843300-ce9370f96b56?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    80,
    'Used'
  );

-- INSERT INTO
--   favorites(item_id, user_id)
-- VALUES
-- (1, 2);

-- INSERT INTO
--   favorites(item_id, user_id)
-- VALUES
-- (2, 2);

-- INSERT INTO
--   favorites(item_id, user_id)
-- VALUES
-- (1, 3);

INSERT INTO messages(sender_email,sender_id,receiver_id,content,item_id) VALUES('amy@ymail.com',1,2,'Hello I would like to buy your couch! Where do you live? I can pick it up today!',2);
INSERT INTO messages(sender_email,sender_id,receiver_id,content,item_id) VALUES('alice@gmail.com',2,1,'Hello, is the couch still available?',2);
INSERT INTO messages(sender_email,sender_id,receiver_id,content,item_id) VALUES('alice@gmail.com',2,1,'Hello',2);
