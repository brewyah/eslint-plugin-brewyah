module.exports = {
    configs: {
        recommended: {
            "env": {
                "browser": true,
                "es6": true
            },
            "parserOptions": {
                "ecmaVersion": 6,
                "sourceType": "module",
                "ecmaFeatures": {
                    "jsx": true
                }
            },
            "plugins": [
                "react-html"
            ],
            "extends": ["eslint:recommended", "plugin:react/recommended"],
            "rules": {
                "indent": ["error", 4],
                "linebreak-style": ["error", "unix"],
                "semi": ["error", "always"],
                "quotes": ["error", "double"]
            }
        }
    }
};