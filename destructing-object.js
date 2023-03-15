// Membuat Objek
// const req = {
//     body: {
//         name : "lastri",
//         age : 22,
//         major : "Informatics",
//     },
// };

// // Memanggil nilai name,age, dan major
// console.log(req.body.name, req.body.age,req.body,major);


// Membuat Objek simpel 1
// const req = {
//     body: {
//         name : "lastri",
//         age : 22,
//         major : "Informatics",
//     },
// };
// // Memanggil nilai name,age, dan major
// const name = req.body.name;
// const age = req.body.age;
// const major = req.body.major;
// Pe
// console.log(name,age,major);

// Membuat Objek simpel 2
const req = {
    body: {
        name : "lastri",
        age : 22,
        major : "Informatics",
    },
};
// Memanggil nilai name,age, dan major
// Destructing object berdasarkan key (key nya harus sama)
const {name,age,major} = req.body;
console.log(name,age,major);