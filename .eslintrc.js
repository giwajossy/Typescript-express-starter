module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        semi: ['off', 'always'],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        'linebreak-style': 0,
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'operator-linebreak': 'off'
    }
};
