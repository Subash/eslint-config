module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['electron'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        switch: { after: false }
      }
    }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': [ 'error', { argsIgnorePattern: "(next|reject|resolve)" }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'operator-linebreak': ['error', 'after'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': ['error', { VariableDeclarator: { array: false, object: true } }],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-children-prop': 'off',
    'semi': ['error', 'always']
  }
}
