import foo from "./foo.json"

// this resolves to string with resolveJsonModule: true
// it resolves to "bar" with it off
console.log(foo.foo)
//               ^?
