// // index.mjs
// import defaultFoo, { foo } from './module.mjs';

// setTimeout(() => {
//     console.log(foo);
//     console.log(defaultFoo);
// }, 2000);

//TYPE 

// index.mjs
import defaultFoo, { foo } from './module.mjs';

setTimeout(() => {
    console.log(foo); // baz
    console.log(defaultFoo); //baz
}, 2000);