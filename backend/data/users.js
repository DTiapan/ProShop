import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ajas',
    email: 'ajas@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bakran',
    email: 'bakran@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
