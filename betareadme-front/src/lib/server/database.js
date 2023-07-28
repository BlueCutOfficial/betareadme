import { users } from './users.js';

const db = new Map();
db.set('users', users);

export function getUser(email) {
  return db.get('users').find((user) => user.email === email);
}

export function patchUser(email, { themes }) {
  if (themes) {
    let user = db.get('users').find((user) => user.email === email);
    user.themes = themes;
  }
}