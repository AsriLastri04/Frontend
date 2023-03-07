// Looping menggunakan for
// for (let i = 1; i < 11; i++) {
//     console.log (`Perulangan ke: ${i}`);
// }

// for (let o = 1; o < 11)

// *
// **
// ***
// ****
// ******

// let s = '';
// for (let j = 1; j <= 5; j++) {
//     for(let a = 1; a < j; a++){
//         console.log('*');
//     }
//     console.log(s);
// }



    var totalNumberofRows = 5;
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= i; j++) {
        console.log('*');
      }
      console.log("\n");
    }