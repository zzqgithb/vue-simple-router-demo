module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "@vue/prettier",
        "@vue/typescript"
    ],
    "rules": {
        "semi": 0,
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default-member": 0,
        "no-var": "error",
        "prefer-spread": 0,
        "no-restricted-syntax": 0,
        "no-prototype-builtins": 0,
        "no-extend-native": 0,
        "no-underscore-dangle": 0,
        "no-bitwise": 0,
        "no-mixed-operators": 0,
        "no-eval": 0,
        "no-plusplus": 0,
        "no-case-declarations": 0,
        "no-useless-escape": 0,
        "no-param-reassign": 0,
        "guard-for-in": 0,
        "max-len": [
            2,
            {
                "code": 200
            }
        ],
        "no-unused-expressions": 0,
        "global-require": 0,
        "no-multi-assign": 0,
        "prefer-rest-params": 0,
        "consistent-return": 0,
        "class-methods-use-this": 0,
        "linebreak-style": [
            0,
            "error",
            "windows"
        ]
    },
    "parserOptions": {
        "parser": "@typescript-eslint/parser"
    },
    "overrides": [
        {
            "files": [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};
