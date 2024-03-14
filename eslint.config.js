import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import prettierConfig from 'eslint-config-prettier';
import hooksPlugin from 'eslint-plugin-react-hooks';

const filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(filename);

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  hooksPlugin,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  }
);
