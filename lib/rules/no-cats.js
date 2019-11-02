module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Cats can't be in your code",
      category: "Possible Errors",
      recommended: true
    },
    messages: {
      "no-cats": "Cats are gods and can't be in your puny code"
    },
    fixable: "code"
  },

  create: function(context) {
    return {
      VariableDeclarator: node => {
        if (node.id.name && node.id.name.toUpperCase().includes("CAT")) {
          context.report({
            node,
            messageId: "no-cats"
          });
        }
      }
    };
  }
};
