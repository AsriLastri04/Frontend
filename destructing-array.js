/**
 * Membuat array family terdiri dari: suami: Michel, istri: hannah, anak: jons

const family = ["Michael", "Hannah","Jonas"];
// Menampilkan nilai array
console.log(family[0], family[1],family[2]);
*/

/**const family = ["Michael", "Hannah","Jonas"];

// Menyimpan nilai array ke variable terpisah
const husband = family[0];
const wife = family[1];
const son = family[2];

// Menampilkan nilai array
console.log(husband,wife,son) = family;

// Menampilkan nilai array
console.log(husband,wife,son);
*/
// array posisi nya harus benar
const family = ["Michael", "Hannah","Jonas"];
const [husband,wife,son] = family;
console.log(husband, wife, son);

