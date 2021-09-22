module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		'no-extra-parens': ['warn'],
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'no-multi-spaces': [
			'warn',
			{
				ignoreEOLComments: false,
			},
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 2,
			},
		],
		'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
		semi: ['error'],
		'semi-style': ['warn', 'last'],
		'space-before-function-paren': ['warn'],
		'block-scoped-var': ['warn'],
		complexity: ['warn'],
		'no-constructor-return': ['warn'],
		'no-else-return': [
			'error',
			{
				allowElseIf: true,
			},
		],
		'no-empty-function': ['warn'],
		'no-eval': [
			'warn',
			{
				allowIndirect: false,
			},
		],
		'no-extend-native': ['warn'],
		'prefer-const': [
			'warn',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		camelcase: [
			'warn',
			{
				ignoreDestructuring: true,
				ignoreImports: true,
				ignoreGlobals: false,
				properties: 'never',
			},
		],
		'max-depth': ['warn'],
		'max-lines-per-function': ['warn'],
		'no-array-constructor': ['error'],
		'no-new-object': ['error'],
		'no-trailing-spaces': [
			'warn',
			{
				skipBlankLines: true,
				ignoreComments: true,
			},
		],
		'no-shadow': [
			'warn',
			{
				builtinGlobals: false,
				hoist: 'functions',
				allow: ['resolve', 'reject', 'done'],
			},
		],
		'no-undef': [
			'warn',
			{
				typeof: false,
			},
		],
		'no-unused-vars': ['warn'],
		'no-use-before-define': ['error'],
		'no-await-in-loop': ['warn'],
		'no-dupe-keys': ['warn'],
		'no-func-assign': ['error'],
		'no-import-assign': ['warn'],
		'no-invalid-regexp': ['warn'],
		'no-irregular-whitespace': [
			'warn',
			{
				skipComments: true,
				skipTemplates: true,
				skipRegExps: true,
			},
		],
		'no-unreachable': ['error'],
		'no-unreachable-loop': ['error'],
		'require-atomic-updates': ['warn'],
		'no-var': ['error'],
		'class-methods-use-this': ['off'],
		'default-param-last': ['error'],
		'default-case-last': ['warn'],
		eqeqeq: ['warn'],
		'no-compare-neg-zero': ['warn'],
		'no-dupe-else-if': ['warn'],
		'array-bracket-spacing': [
			'warn',
			'always',
			{
				singleValue: false,
				objectsInArrays: true,
				arraysInArrays: false,
			},
		],
		'block-spacing': ['error', 'always'],
		'brace-style': [
			'off',
			null,
			{
				allowSingleLine: false,
			},
		],
		'comma-spacing': [
			'error',
			{
				after: true,
			},
		],
		'computed-property-spacing': [
			'warn',
			'never',
			{
				enforceForClassMembers: true,
			},
		],
		indent: ['warn', 'tab'],
		'key-spacing': ['error'],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'max-lines': ['warn'],
		'max-len': ['warn', { code: 100 }],
		'linebreak-style': 0,
		'no-useless-escape': 0,
	},
};
