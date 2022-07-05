/** @type {import('next').NextConfig} */
// const nextConfig = {
  
// }

// module.exports = nextConfig

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   }
// })

// module.exports = withBundleAnalyzer()

const withAntdLess = require('next-plugin-antd-less');



module.exports = withAntdLess({
  modifyVars: { 
    '@primary-color': '#4e73df',
    '@success-color': "#1cc88a",
    '@warning-color': "#f6c23e",
    "@error-color": "#e74a3b",
    '@text-color': "#858796",
    '@info-color': "#36b9cc",
    '@background-color-light': "#f8f9fc",
   }, // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ... 
    mode: "local",
    localIdentName: process.env.NODE_ENV == "development" ? "[local]--[hash:base64:4]"  : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  enabled: process.env.ANALYZE === 'true',
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },

  webpack(config) {
    return config;
  },
  images: {
    domains: ["lh3.googleusercontent.com", "joeschmoe.io"]
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
});