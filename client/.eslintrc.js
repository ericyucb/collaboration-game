module.exports = {
	'env': {
		'browser': true,
		'amd': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'react',
	],
	'rules': {
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'never',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'react/prop-types': [
			'off',
		],
	},
	'settings': {
		'react': {
			'version': 'detect',
		},
	},
}
