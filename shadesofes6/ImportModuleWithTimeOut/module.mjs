// // module.mjs

// let foo = 'bar';

// export { foo };
// export default foo;

// setTimeout(() => {
//     foo = 'baz';
// }, 1000);



//TYPE 2
// module.mjs
export { foo };

export default function foo() {
    return "test"
};

setTimeout(() => {
  foo = 'baz';
}, 1000);