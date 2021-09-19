import storage from 'node-persist';

storage.initSync();

const generateId = () => (+new Date * Math.random()).toString(36).substring(0,6);

const find = (id) => (
  storage.getItem(id)
);

const save = (id = generateId(), data) => (
  storage.setItem(id, data).then(() => ({id, ...data}))
);

const update = (id = generateId(), data) => (
  find(id).then(currentData => save(id, { ...currentData, ...data }))
);

export { find, save, update };
