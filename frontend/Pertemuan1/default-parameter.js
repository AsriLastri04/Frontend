const getAge = (bod = 1999) => {
    const year = 2023;
    const age = year - bod;
    
    return age;
};

// Memanggil fungsi getAge
console.log(getAge());
console.log(getAge(2000));