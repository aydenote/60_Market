"use strict";
module.exports = {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    testEnvironment: 'jest-environment-node',
    testMatch: ['<rootDir>/dist/__tests__/*.test.(js|jsx|ts|tsx)'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
