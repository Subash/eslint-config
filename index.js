module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  rules: {
    'no-new': 'off',
    'max-len': 'off',
    'one-var': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'default-case': 'off',
    'padded-blocks': 'off',
    'global-require': 'off',
    'no-multi-assign': 'off',
    'no-return-await': 'off',
    'no-return-assign': 'off',
    'object-shorthand': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expression': 'off',
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'import/newline-after-import': 'off',
    'one-var-declaration-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'operator-linebreak': ['error', 'after'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'arrow-spacing': ['error', { before: false, after: true }],
    'array-bracket-spacing': ['error', 'never', { singleValue: true }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-unused-vars': [ 'error', { argsIgnorePattern: "(next|reject|resolve)" }],
    'prefer-destructuring': ['error', { VariableDeclarator: { array: false, object: true } }],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['electron'] }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        switch: { after: false }
      }
    }]
  }
}
