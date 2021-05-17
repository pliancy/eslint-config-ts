module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    ignorePatterns: ['dist/', 'tmp/', 'coverage/', 'assets/', '.github/'],
    plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports', 'prettier'],
    extends: ['prettier'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-console': 'error',
        'space-before-function-paren': ['error', {
            named: 'never',
        }],
        'unused-imports/no-unused-imports': 'error',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                semi: false,
                printWidth: 100,
                tabWidth: 4
            }
        ]
    },
}
