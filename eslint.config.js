import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "jsx-a11y": eslintPluginJsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: "module",
      jsx: true,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Основные правила
      "no-console": "warn",
      "no-unused-vars": "error",
      "prefer-const": "error",

      // TypeScript
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "error",

      // React
      "react/prop-types": "off", // Используем TypeScript для проверки типов
      "react/react-in-jsx-scope": "off", // Не нужно с React 17+
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Доступность
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",

      // Производительность
      "react/no-array-index-key": "warn",
      "react/no-unused-prop-types": "error",

      // Безопасность
      "react/no-danger": "error",

      // Новые возможности JavaScript (гипотетически)
      // 'no-restricted-syntax': ['error', 'Decorator'], // Если декораторы станут проблемой
    },
  },
  eslintConfigPrettier, // Отключаем правила ESLint, которые могут конфликтовать с Prettier
];
