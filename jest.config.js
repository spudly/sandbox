module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}', '!**/node_modules/**'],
  projects: [
    'packages/components/animated-monaco/jest.config.js',
    'packages/components/animated-react-live/jest.config.js',
    'packages/components/animated-textarea/jest.config.js',
    'packages/components/icons/jest.config.js',
    'packages/components/pagination/jest.config.js',
    'packages/components/use-player/jest.config.js',
    'packages/hooks/use-animate/jest.config.js',
    'packages/hooks/use-animated-diff/jest.config.js',
    'packages/hooks/use-paginate/jest.config.js',
    'packages/hooks/use-selection-range/jest.config.js',
    'packages/utils/curry/jest.config.js',
    'packages/utils/get-number-precision/jest.config.js',
    'packages/utils/paginate/jest.config.js',
    'packages/utils/range/jest.config.js',
    'packages/utils/sleep/jest.config.js',
    'packages/utils/string-splice/jest.config.js',
    'packages/utils/times/jest.config.js',
  ],
};
