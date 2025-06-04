const USERS_KEY = 'instagrao_users';
const CURRENT_USER_KEY = 'instagrao_current_user';

function getStoredUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function registerUser(username, password) {
  const users = getStoredUsers();
  if (users.find((u) => u.username === username)) {
    return false;
  }
  users.push({ username, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ username }));
  return true;
}

export function loginUser(username, password) {
  const users = getStoredUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ username }));
    return { username };
  }
  return null;
}

export function getCurrentUser() {
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}
