const { RuleTester } = require("eslint");
const rules = require("../../../lib/rules/no-cats");

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true
  }
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run("no-cats", rules, {
  valid: [{ code: `const hello = 2;` }],
  invalid: [
    {
      code: `const helloCats = 2;`,
      errors: [{ messageId: "no-cats" }]
    }
  ]
});
