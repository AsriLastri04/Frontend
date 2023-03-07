// membuat objek menggunakan {}
// menyimpan nilai dengan format key : value

const user = {
    name: "Sulastri",
    age: 19,
    major: "informatics",

};
/**
 * Looping object menggunakan for-in
 * Mengakses nilai menggunakan cara bracket
 */
// for (const key in user) {
//     console.log(`${key}:${user[key]}`);
// }

for (label in user) {
    console.log(label);
    console.log(user[label]);
}