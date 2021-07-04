const withPreact = require("next-plugin-preact");

const configs = {
  image: {
    domains: ['*'],
  },
}

module.exports = withPreact({
  reactStrictMode: true,
  ...configs
})
