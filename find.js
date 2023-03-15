//Membuat array object 
const users = [
{ 
    name : "Jonas",
    age : 15,
},
{
    name: "Michael",
    age: 40,
},
{
    name: "Hannah",
    age: 35,
},
];
/**
 * Menjalankan method find
 * Mencari 1 data berdasarkan kondisi tertentu
 * kondisi : umur lebih dari 21
 */
const findUser= users.find(function(user){
    return user.age > 21;
});

console.log(findUser);