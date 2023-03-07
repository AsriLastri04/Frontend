const getAge = (bod) => {
    const year = 2023;
    const age = year - bod;
    return age;
};

//memanggil fungsi getAge
console.log(getAge(1997));
console.log(getAge(2009));

//simple
const getumur = (bod) => 2023 - bod;
console.log(getAge(1977));
console.log(getAge(2010));