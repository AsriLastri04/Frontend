function download() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
           resolve("Downloading...");
        }, 3000)
    });
    
}
function verify() {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
        resolve("Verify file....");
    }, 2000);
    });
    
}
function notify() {
    console.log("Download complete");
}

/*function main() {
    // solusi promise
    download()
    .then((hasil) => {
        console.log(hasil);
        return verify();
    })
    .then((hasil) => {
        console.log(hasil);
        notify();

})
.catch((error) => {
    console.loge(error);
});
}

main();
*/


// Solusi promise async await

async function main() {
    console.log(await download());
    console.log(await verify());
    notify();
}
main();

