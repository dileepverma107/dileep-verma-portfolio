// next.config.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/graphql', // Adjust the source URL as per your requirement
        destination: 'https://leetcode.com/graphql', // Replace with your GraphQL endpoint
      },
    ];
  },
};
