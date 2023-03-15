/**
 * Membuat funsgi sum 
 * Menjumlahkan semua bilangan
 * Menggunakan rest parameters

function sum (...numbers) {
    let hasil = 0;

    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}
console.log(sum(1,2,3,4,5));
*/

/**
 * Membuat fungsi showFamilies
 * Menampilkan anggota keluarga
 * Parameter ketiga menggunakan rest parameters
 */

function showFamilies(husband, wife, ...children) {
    console.log(`Suami : ${husband}`);
    console.log(`Istri:${wife}`);

    for (const child of children) {
        console.log(`Anak: ${child}`);
    }
}

showFamilies("Mikel", "Hannah","Jonas", "Martha", "Magnuz");