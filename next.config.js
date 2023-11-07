/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.js&.jsx&.ts&.tsx$/,
            use: {
                loader: '@swc/loader',
                options: {
                    jsc: {
                        parser: {
                            syntax: 'ecmascript',
                            jsx: true
                        },
                        transform: {
                            react: true
                        }
                    }
                }
            }
        });
        return config;
    },
    images: {
        unoptimized: true
    },
    experimental: {
        serverActions: true
    },
}

module.exports = nextConfig;