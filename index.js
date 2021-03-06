
"use strict";

module.exports = {
  "extends": [
    "react-app",
  ],
  "rules": {
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],

    // Plugin: Import
    "import/named": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": [
      "error",
      {
        "commonjs": true,
        "ignore": [
          "Lib",
          "FlxpUtils",
          "FlxpElements",
          "FlxpComponents",
        ]
      },
    ],
    "import/no-webpack-loader-syntax": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always"
      }
    ],

    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-depth": ["error", 4],
    "max-lines": [
      "error",
      {
        "max": 500,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-statements": [
      "error",
      80,
      {
        "ignoreTopLevelFunctions": true
      }
    ],
    "new-cap": [
      "error",
      {
        "capIsNew": false
      }
    ],
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-console": "warn",
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-else-return": [
      "error",
      {
        "allowElseIf": true
      }
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-function": "warn",
    "no-func-assign": "error",
    "no-irregular-whitespace": "off",
    "no-loop-func": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-unneeded-ternary": "error",
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
      },
    ],
    "no-useless-constructor": "error",
    "no-var": [
      "error"
    ],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": "warn",

    "prefer-rest-params": "error",
    "prefer-template": "warn",
    "quotes": [
      "warn",
      "double"
    ],

    "react/jsx-closing-bracket-location": [
      "error",
      "line-aligned"
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/jsx-tag-spacing": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error"
    ],
    "react/no-multi-comp": "off",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/prop-types": [
      "warn"
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false,
      }
    ],
    "react/sort-comp": "error",
    "react/no-unused-prop-types": [
      "error",
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "spaced-comment": [
      "error",
      "always",
    ],
    "template-curly-spacing": "error",
  }
};
