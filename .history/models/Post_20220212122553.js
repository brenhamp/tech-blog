const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    static upvote(body, models) {
      return models.Vote.create({
        user_id: body.user_id,
        post_id: body.post_id
      }).then(() => {
        return Post.findOne({
          where: {
            id: body.post_id
          },
          attributes: [
            'id',
<<<<<<< HEAD
            'post_body',
=======
<<<<<<< HEAD
            'post_url',
=======
            'post_body',
>>>>>>> feature/server
>>>>>>> feature/route
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
          ],
          include: [
            {
              model: models.Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: models.User,
                attributes: ['username']
              }
            }
          ]
        });
      });
    }
  }