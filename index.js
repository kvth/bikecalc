// use esm to load main es6 module (and export its contents)
const esmImport = require("esm")(module, { mode: "auto" });
module.exports = esmImport("./src/main.js");
