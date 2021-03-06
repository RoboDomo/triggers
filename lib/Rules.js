const Config = require("../config"),
  console = require("console");

class Rules {
  constructor() {
    for (const rule of Config.rules) {
      console.log(new Date().toLocaleTimeString(), "new rule " + rule.cls);
      const Class = require("../rules/" + rule.cls);
      this[rule.name] = new Class();
    }
  }
}

//
module.exports = new Rules();
