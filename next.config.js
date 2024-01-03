/** @type {import('next').NextConfig} */
const debug = prrocess.env.NODE.ENV !== "production";
const repository = "http://toran1678.github.io/toran1678.github.io";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true,
};

module.exports = nextConfig;