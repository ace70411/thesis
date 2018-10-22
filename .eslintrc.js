module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "classes": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react","import"
    ],
    "rules": {
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "indent": [
            "warn",
            2,
            {"SwitchCase":1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single",
            {"avoidEscape": true,
             "allowTemplateLiterals": true
            }
        ]
    }
};
