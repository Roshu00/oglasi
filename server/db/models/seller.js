const {Model} = require('objection');

class Seller extends Model {
    static get tableName() {
        return 'sellers'
    }

    static get relationMappings() {
        const Posts = require('./post')
        return {
            posts: {
                relation: Model.HasManyRelation,
                modelClass: Posts,
                join: {
                    from: 'sellers.id',
                    to: 'posts.seller'
                }
            }
        }
    }
};

module.exports = Seller;