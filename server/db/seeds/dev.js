const { v4: uuidv4 } = require('uuid');

const id1 = uuidv4();
const id2 = uuidv4();
const id3 = uuidv4();
const id4 = uuidv4();
const id5 = uuidv4();

exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE "login" CASCADE');

  await knex('login').insert([
    {
      id: id1,
      email: 'test1@gmail.com',
      password: 'password1'
    },
    {
      id: id2,
      email: 'test2@gmail.com',
      password: 'password2'
    },
    {
      id: id3,
      email: 'test3@gmail.com',
      password: 'password3'
    },
    {
      id: id4,
      email: 'test4@gmail.com',
      password: 'password4'
    },
    {
      id: id5,
      email: 'test5@gmail.com',
      password: 'password5'
    },
])

  await knex('sellers').insert([
    {
      id: id1,
      username: 'tester1',
      name: 'lale',
      last_name: 'lalovic',
      description: 'mali prodavac',
      promo: false,
      phone_number: 065123456,
      address: 'Loncanik Ub',
      rating: 3, 
    },
   {
      id: id2,
      username: 'tester2',
      name: 'milan',
      last_name: 'lazarevic',
      description: 'veliki prodavac',
      promo: false,
      phone_number: 065223456,
      address: 'Loncanik Srbija Ub',
      rating: 4, 
    },
   {
      id: id5,
      username: 'tester5',
      name: 'Marko',
      last_name: 'Salovic',
      description: 'srednji prodavac',
      promo: false,
      phone_number: 061423456,
      address: 'Loncanik BB Ub',
      rating: 5, 
    },

  ])

  return await knex('posts').insert([
    {
      postId: uuidv4(),
      seller: id1,
      product: 'phone',
      brand: 'samsung',
      model: 's20 ultra',
      price: 700,
      description: 'Telefon ocuvan u odlicnom stanju',
      imagesPath: '',
      used: true, 
    },
    {
      postId: uuidv4(),
      seller: id2,
      product: 'phone',
      brand: 'iphone',
      model: 'X',
      price: 400,
      description: 'Uz telefon se dobija punjac i slusalice',
      imagesPath: '',
      used: false, 
    },
    {
      postId: uuidv4(),
      seller: id2,
      product: 'phone',
      brand: 'samsung',
      model: 's20 ultra',
      price: 699,
      description: 'Uz telefon se dobija punjac i maskica',
      imagesPath: '',
      used: false, 
    },
    {
      postId: uuidv4(),
      seller: id5,
      product: 'phone',
      brand: 'samsung',
      model: 's10 ultra',
      price: 300,
      description: 'Telefon ocuvan u odlicnom stanju kao nov',
      imagesPath: '',
      used: true, 
    },
    {
      postId: uuidv4(),
      seller: id2,
      product: 'phone',
      brand: 'samsung',
      model: 'note 10 ultra',
      price: 900,
      description: 'Uz telefon ide garancija i dobija se punjac',
      imagesPath: '',
      used: false, 
    },
  ])
};
