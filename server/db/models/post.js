const {Model} = require('objection');

class Posts extends Model {
    static get tableName() {
        return 'posts'
    };

    static get relationMappings() {
        const Sellers = require('./seller')
        return {
            sellers: {
                relation: Model.BelongsToOneRelation,
                modelClass: Sellers,
                join: {
                    from: 'posts.seller',
                    to: 'sellers.id'
                }
            }
        }
    }
};

module.exports = Posts;