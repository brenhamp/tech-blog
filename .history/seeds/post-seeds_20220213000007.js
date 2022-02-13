const { Post } = require('../models');

const postdata = [
  {
    title: 'GET vs POST vs PUT vs DELETE methods.',
    post_body: 'GET is for obtaining and displaying data, POST is for adding new data, PUT is for modifying existing data, and DELETE is, well delete.',
    user_id: 1
  },
  {
    title: 'What is Handlebars?',
    post_body: 'Handlebars is a templating engine that generates dynamic HTML for you. Useful for building websites!',
    user_id: 1
  },
  {
    title: "Note to self: Don't forget .gitignore!",
    post_body: 'You will save your teammates a lot of headaches later.',
    user_id: 1
  },
  {
    title: 'A good README',
    post_body: 'A good README should have easy-to-follow instructions, preferably with examples, plain language and good descriptions.',
    user_id: 1
  },
  {
    title: 'Object-oriented Programming.',
    post_body: "Object-oriented programming (OOP) uses 'objects,' which contain data (properties and attributes) and code (procedures and methods).",
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
