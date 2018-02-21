module.exports = {
    moduleNameMapper: {
        '^(@|~)/(.*)$': '<rootDir>/src/$2'
    },
    moduleFileExtensions: [
        'js',
        'vue',
        'ts'
    ],
    transform: {
        '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
        '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
        '.*': '<rootDir>/node_modules/babel-jest'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: [
        '<rootDir>/test/e2e'
    ],
    mapCoverage: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
        'src/**/*.{js,ts,vue}',
        '!**/*.d.ts',
        '!src/main.js',
        '!src/router/index.js',
        '!**/node_modules/**'
    ]
};
