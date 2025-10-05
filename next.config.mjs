/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/icon.png', // generado por Next desde app/icon.png
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
