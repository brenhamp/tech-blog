const { Post } = require('../models');

const postdata = [
  {
    title: 'GET vs POST vs PUT vs DELETE methods.',
    post_body: 'GET is for obtaining and displaying data, POST is for adding new data, PUT is for modifying existing data, and DELETE is, well delete. Pretty easy, right?',
    user_id: 1
  },
  {
    title: 'What is Handlebars?',
    post_body: 'Handlebars is a templating engine that generates dynamic HTML for you. Useful for building websites!',
    user_id: 1
  },
  {
    title: "Don't forget .gitignore!",
    post_body: 'You will save your teammates a lot of headaches later.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_body: 'Minim reprehenderit consequat voluptate aliquip laboris in consectetur.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: 'Magna sunt eu cillum laboris deserunt tempor consequat.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
