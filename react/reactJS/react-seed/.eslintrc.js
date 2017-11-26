module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }],
      'react/jsx-closing-bracket-location': ["error", {selfClosing: 'props-aligned', nonEmpty: 'props-aligned'}],
    },
    "globals": {
      document: true,
      beforeAll: true,
      beforeEach: true,
      describe: true,
      it: true,
      window: true,
    }
};
