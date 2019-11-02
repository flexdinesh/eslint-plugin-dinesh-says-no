/**
 * @fileoverview things dinesh will say no to
 * @author dinesh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.rules = {
    "no-cats": require("./rules/no-cats")
};
