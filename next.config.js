module.exports = {
  trailingSlash: true,
  target: "serverless",
  webpack (config)
  {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

