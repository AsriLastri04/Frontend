// Import index dan store
import {index,store} from "./controller.mjs";
function main() {
    const user = {
        name : "Lastri",
        age : 20,
    }

    index();
    store(user);
}
main();