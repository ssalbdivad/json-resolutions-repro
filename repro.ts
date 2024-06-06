// this works fine if it's bundled or in old node versions
// with node 20, you need `assert { type: "json" }`
// with node 22, you need `with { type: "json" }`
import foo from "foo/foo.json"

console.log(foo.foo)
