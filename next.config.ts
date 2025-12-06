// 🔥 Next.js 16에서 Turbopack 비활성화 공식 방식
export const buildMode = "webpack";

import path from 'path';
import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const ICON_DIR = path.resolve(__dirname, 'src/shared/icons/source');

const baseConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'mblogthumb-phinf.pstatic.net' },
      { protocol: 'https', hostname: 'blogfiles.pstatic.net' },
      { protocol: 'https', hostname: 'postfiles.pstatic.net' },
      { protocol: 'https', hostname: 'places.googleapis.com' },
    ],
  },

  // 이 webpack 설정이 존재하면 Next 16은 Turbopack 대신 Webpack 빌드 사용
  webpack: (config) => {
    const svgRule = config.module.rules.find(
      // @ts-ignore
      (rule) => rule.test && rule.test.test && rule.test.test('.svg'),
    );

    if (svgRule) {
      // @ts-ignore
      svgRule.exclude = [...(svgRule.exclude || []), ICON_DIR];
    }

    config.module.rules.push({
      test: /\.svg$/,
      include: [ICON_DIR],
      use: [
        {
          loader: require.resolve('svg-sprite-loader'),
          options: {
            symbolId: 'icon-[name]',
            extract: false,
          },
        },
      ],
    });

    return config;
  }
};

const withPWABundle = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  buildExcludes: [/dynamic-css-manifest\.json$/],
});

export default withPWABundle(baseConfig);
