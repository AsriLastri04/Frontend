/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [ 
    {
      name: "Sulastri",
      age: 19, 
      major: "informatics"
    },

    {
      name: "Dias",
      age: 90,
      major: "math"
    },

    {
      name: "Dani",
      age: 23,
      major: "MIPA"
    },
    
    {
      name: "Fauzan",
      age: 34, 
      major: "English"
    },
    
    {
      name: "Gilang",
      age: 41,
      major: "Tafsir"}
]; 

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const user of users) {
    console.log(user);
  }
}
/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store  = (newUser) => {
  users.push(newUser)
  console.log(users)
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (editedIndex, editedUser) => {
  users[editedIndex] =editedUser;
  console.log(users);


}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (deletedIndex) => {
  users.splice (deletedIndex,2);
  console.log(users);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
*/

const main = () => {
  /**
   * Test function index
   */
  console.log(users);
  all(users);

  /**
   * Test function store
   */
  console.log("Menambahkan user");
  const newUser = {
    name: "bibil",
    age: 54,
    major: "biology",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("Edit user Gilang");
  const editedIndex = 4;
  const editedUser = {
    name: "Gilang Pradana",
    age: 30,
    major: "Sosiology",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("Menghapus user");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
