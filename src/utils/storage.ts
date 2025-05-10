import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const saveUser = (newUser: any) => {
  const existing = storage.getString('users');
  let users = existing ? JSON.parse(existing) : [];

  // Remove if user with same email already exists
  users = users.filter((u: any) => u.email !== newUser.email);

  users.push(newUser);
  storage.set('users', JSON.stringify(users));
};

export const getUsers = () => {
  const data = storage.getString('users');
  return data ? JSON.parse(data) : [];
};

export const deleteUser = (email: string) => {
  const existing = storage.getString('users');
  let users = existing ? JSON.parse(existing) : [];
  users = users.filter((u: any) => u.email !== email);
  storage.set('users', JSON.stringify(users));
};

