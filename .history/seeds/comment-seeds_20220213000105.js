const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Pretty easy, right?',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Indeed!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'I know this from experience, unfortunately.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Agreed. I see bad READMEs all the time and it makes me not want to even ',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
