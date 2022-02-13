const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'Tempor amet aliqua voluptate minim Lorem tempor do consequat labore ea.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'Ea culpa officia irure sint nisi quis incididunt.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: 'Sit nulla reprehenderit ullamco veniam consequat veniam pariatur.',
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
