const esModules = ['react-markdown', 'remark-gfm'].join('|');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
};
