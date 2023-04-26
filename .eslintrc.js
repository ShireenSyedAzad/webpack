module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"jest/globals": true
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:jest/recommended"
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},

	plugins: ["react"],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"]
			}
		],

		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": [
			"warn",
			{ allow: ["clear", "info", "error", "dir", "trace", "log"] }
		],
		"no-unused-vars": ["error", { vars: "all" }]
	},

	settings: {
		react: {
			version: "detect"
		}
	}
};
