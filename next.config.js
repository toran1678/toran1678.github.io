/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {}

module.exports = nextConfig
=======
const debug = prrocess.env.NODE.ENV !== "production";
const repository = "http://toran1678.github.io/toran1678.github.io";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true,
};

module.exports = nextConfig;
>>>>>>> c69d03ef76df8635ab5286c9254dd490a46788cc
