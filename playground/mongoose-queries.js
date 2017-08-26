const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59a190b116256c06504817d3';

// var id = '59a1c5d4f8f8cd09fe2bfe699';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((err) => console.log(err));

// User.findById
// User not found
// User found
// Error
if (!ObjectID.isValid(id)) {
  return console.log('Invalid ID');
}

User.findById(id).then(user => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('User', user);;
}).catch(err => {
  console.log('Error', err);
});
