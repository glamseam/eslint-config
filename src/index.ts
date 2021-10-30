const index = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
        //"plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/ban-types': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_'
            }
        ],
        'semi': [
            'error',
            'never',
            { 'beforeStatementContinuationChars': 'never' }
        ],
        'semi-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'semi-style': [
            'error',
            'first'
        ],
        'no-extra-semi': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'indent': [
            'error',
            4,
            { 'SwitchCase': 1 }
        ],
        'quotes': [
            'error',
            'single'
        ]
    }
}

export = index