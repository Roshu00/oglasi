const { Model } = require("objection");

exports.up = function(knex) {
  return knex.schema.createTable('login', table => {
    table.uuid('id').unique().notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true)
  }).createTable('sellers', table => {
      table.uuid('id').references('id').inTable('login').unique();
      table.string('username').notNullable().unique();
      table.string('name').notNullable();
      table.string('last_name').notNullable();
      table.string('description');
      table.boolean('promo');
      table.integer('phone_number').notNullable();
      table.string('address').notNullable();
      table.integer('rating');
      table.timestamps(true, true)
  }).createTable('posts', table => {
      table.uuid('postId').unique().notNullable();
      table.uuid('seller').references('id').inTable('sellers').notNullable();
      table.string('product').notNullable();
      table.string('brand').notNullable();
      table.string('model').notNullable();
      table.integer('price').notNullable();
      table.string('description');
      table.string('imagesPath');
      table.boolean('used').notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts').dropTableIfExists('sellers').dropTableIfExists('login')
};
