/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
        pathname: '/qd3/**',
      },
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
        pathname: '/4cj/**',
      },
      {
        protocol: 'https',
        hostname: 'https://a0.muscache.com',
        port: '',
        pathname:
          '/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440/**',
      },
      {
        protocol: 'https',
        hostname: 'jsonkeeper.com',
        port: '',
        pathname: '/b/4G1G/**',
      },
      {
        protocol: 'https',
        hostname: 'jsonkeeper.com',
        port: '',
        pathname: '/b/VHHT/**',
      },
      {
        protocol: 'https',
        hostname: 'jsonkeeper.com',
        port: '',
        pathname: '/b/5NPS**',
      },
    ],
    domains: ['links.papareact.com', 'jsonkeeper.com', 'a0.muscache.com'],
    loader: 'default',
    // loaderFile: '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    disableStaticImages: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoibTRjcnVzIiwiYSI6ImNsZGx1OW0xYjAzMnQzd253bjh2M3Yxd3UifQ.nfE4wjBTIYRz0VKDK8c7xg',
    mapbox_style_key: 'mapbox://styles/m4crus/cldlwk5r5000401t1pehxmq5m',
    ACCESS_TOKEN:
      'pk.eyJ1IjoibTRjcnVzIiwiYSI6ImNsZGx1OW0xYjAzMnQzd253bjh2M3Yxd3UifQ.nfE4wjBTIYRz0VKDK8c7xg',
    STYLE_URL: 'mapbox://styles/m4crus/cldlwk5r5000401t1pehxmq5m',
    STYLE_NAVIGATION_DARK_URL:
      'mapbox://styles/m4crus/cldnae29a004v01q9crc3fqk8',
    STYLE_NAVIGATION_DARK_CUSTOM_URL:
      'mapbox://styles/m4crus/cldnae29a004v01q9crc3fqk8',
  },
};
