module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  plugins: ['react-hooks'],
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
    'array-bracket-spacing': 'off',
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'react/no-children-prop': 'off',
    'comma-dangle': ['error', 'never'],
    'import/newline-after-import': 'off',
    'one-var-declaration-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'operator-linebreak': ['error', 'after'],
    'import/no-extraneous-dependencies': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'react/destructuring-assignment': ['error', 'always'],
    'arrow-spacing': ['error', { before: false, after: true }],
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
