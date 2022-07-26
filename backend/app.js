const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'abc121212',
      title: 'First server-side post',
      content: 'This is coming from server!'
    },
    {
      id: 'def131313',
      title: 'Second server-side post',
      content: 'This is coming from server again!'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});



module.exports = app;
