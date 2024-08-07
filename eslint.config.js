import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
   {
      languageOptions: { globals: globals.browser },
      settings: {
         'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
         },
         'import/resolver': {
            typescript: {
               alwaysTryTypes: true,
               project: ['./tsconfig.json'],
            },
         },
         react: { version: 'detect' },
      },
      rules: {
         'no-console': ['error', { allow: ['warn', 'error'] }],
         'lines-around-comment': [
            'error',
            {
               beforeLineComment: true,
               beforeBlockComment: true,
               allowBlockStart: true,
               allowClassStart: true,
               allowObjectStart: true,
               allowArrayStart: true,
            },
         ],
         'newline-before-return': 'error',
         '@typescript-eslint/ban-types': [
            'error',
            {
               extendDefaults: true,
               types: {
                  '{}': false,
               },
            },
         ],
      },
   },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReactConfig,
];
