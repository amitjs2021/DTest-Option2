import storage from 'node-persist';

storage.init();

const find = (id) => (
  storage.getItem(id)
);

console.log("before save :::: ")
const save = (id, data) => {
  console.log("DATA :::: ", data)
  return (
    storage.setItem(id, data).then(() => ({ id, ...data }))

  )
};

const update = (id, data) => (
  find(id).then(currentData => save(id, { ...currentData, ...data }))
);

export { find, save, update };
