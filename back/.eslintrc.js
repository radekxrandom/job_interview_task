module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)"
      }
    ],
    quotes: [
      "error"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "no-extra-parens": [
      "warn"
    ],
    "no-mixed-spaces-and-tabs": [
      "warn",
      "smart-tabs"
    ],
    "no-multi-spaces": [
      "warn",
      {
        exceptions: null,
        ignoreEOLComments: false
      }
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 2,
        maxEOF: null,
        maxBOF: null
      }
    ],
    "prefer-arrow-callback": [
      "warn",
      null
    ],
    semi: [
      "error"
    ],
    "semi-style": [
      "warn",
      null
    ],
    "space-before-function-paren": [
      "warn"
    ],
    "block-scoped-var": [
      "warn"
    ],
    complexity: [
      "warn"
    ],
    "no-constructor-return": [
      "warn"
    ],
    "no-else-return": [
      "error",
      {
        allowElseIf: true
      }
    ],
    "no-empty-function": [
      "warn",
      {
        allow: null
      }
    ],
    "no-eval": [
      "warn",
      {
        allowIndirect: false
      }
    ],
    "no-extend-native": [
      "warn",
      {
        exceptions: null
      }
    ],
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    camelcase: [
      "warn",
      {
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: false,
        properties: null,
        allow: null
      }
    ],
    "max-depth": [
      "warn"
    ],
    "max-lines-per-function": [
      "warn"
    ],
    "no-array-constructor": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-trailing-spaces": [
      "warn",
      {
        skipBlankLines: true,
        ignoreComments: true
      }
    ],
    "space-in-parens": [
      "error",
      "always",
      {
        exceptions: [
          "empty"
        ]
      }
    ],
    "no-shadow": [
      "warn",
      {
        builtinGlobals: false,
        hoist: "functions",
        allow: null
      }
    ],
    "no-undef": [
      "warn",
      {
        typeof: false
      }
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-use-before-define": [
      "error"
    ],
    "no-await-in-loop": [
      "warn"
    ],
    "no-dupe-keys": [
      "warn"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-import-assign": [
      "warn"
    ],
    "no-invalid-regexp": [
      "warn",
      {
        allowConstructorFlags: null
      }
    ],
    "no-irregular-whitespace": [
      "warn",
      null
    ],
    "no-unreachable": [
      "error"
    ],
    "no-unreachable-loop": [
      "error",
      {
        ignore: null
      }
    ],
    "require-atomic-updates": [
      "warn"
    ],
    "no-var": [
      "error"
    ],
    "class-methods-use-this": [
      "off",
      {
        exceptMethods: []
      }
    ],
    "default-param-last": [
      "error"
    ],
    "default-case-last": [
      "warn"
    ],
    eqeqeq: [
      "warn"
    ],
    "no-compare-neg-zero": [
      "warn"
    ],
    "no-cond-assign": [
      "warn",
      null
    ],
    "no-dupe-else-if": [
      "warn"
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        objectsInArrays: true
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "off",
      null,
      {
        allowSingleLine: false
      }
    ],
    "comma-spacing": [
      "error",
      {
        after: true
      }
    ],
    "computed-property-spacing": [
      "error",
      "always",
      {
        enforceForClassMembers: true
      }
    ],
    indent: [
      "error"
    ],
    "key-spacing": [
      "error"
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: null
      }
    ],
    "max-lines": [
      "warn"
    ],
    "max-len": [
      "warn"
    ]
  }
};