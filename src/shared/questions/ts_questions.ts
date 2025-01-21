import {TQuestionItem} from '../types/common';

export const typescriptQuestions: TQuestionItem[] = [
  {
    id: 'types',
    question: 'What are the basic types in TypeScript?',
    answer:
      'TypeScript includes several basic types such as boolean, number, string, array, tuple, enum, any, void, null, undefined, never, and object. These types provide static type checking and help catch errors during development.',
  },
  {
    id: 'interfaces',
    question: 'What are interfaces in TypeScript?',
    answer:
      'Interfaces in TypeScript are used to define the structure of an object. They can specify the properties and methods that an object should have, providing a way to enforce contracts within your code and create reusable, modular structures.',
  },
  {
    id: 'generics',
    question: 'What are generics in TypeScript?',
    answer:
      'Generics in TypeScript allow you to create reusable components that can work with a variety of types rather than a single one. They help you create flexible, reusable functions and classes that can work with any data type while still providing compile-time type safety.',
  },
  {
    id: 'type-inference',
    question: 'What is type inference in TypeScript?',
    answer:
      'Type inference in TypeScript is the ability of the compiler to automatically determine and assign types to variables, function return values, and other entities in your code based on their usage and context, without explicit type annotations.',
  },
  {
    id: 'enums',
    question: 'What are enums in TypeScript?',
    answer:
      'Enums in TypeScript are a way to give more friendly names to sets of numeric values. They allow you to define a set of named constants, making it easier to document intent or create a set of distinct cases.',
  },
];
