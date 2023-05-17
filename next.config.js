/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies/:api_key",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=:api_key`
      }
    ]
  }
}

module.exports = nextConfig