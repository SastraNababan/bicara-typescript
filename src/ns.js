// (function (something) {
//   something.foo = 123;
// })(something || (something = {}));



(function(something) { 
    something.foo = 123; 
})(something || (something = {}))

console.log(something); // {foo:123}

(function(something) { 
    something.bar = 456; 
})(something || (something = {}))

console.log(something); // {foo:123, bar:456}