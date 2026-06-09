module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },

  plugins: ['@typescript-eslint'],

  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },

    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'object-curly-newline': [
      'error',
      'after',
      {
        multiline: true,
        consistent: true,
      },
    ],

    'import/prefer-default-export': 'off',

    'import/no-extraneous-dependencies': 'off',

    'react/require-default-props': 'off',

    'no-console': 'warn',

    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
};
