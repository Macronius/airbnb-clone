airbnb logo

- https://spng.pngfind.com/pngs/s/13-133416_airbnb-logo-9-22-de-outubro-de-airbnb.png

icons

- https://github.com/tailwindlabs/heroicons
- npm install @heroicons/react
- https://unpkg.com/browse/@heroicons/react@2.0.14/24/outline/

scrollbar

- https://www.npmjs.com/package/tailwind-scrollbar-hide
- npm i tailwind-scrollbar-hide

Serverside Rendering vs Static Rendering

# D O M A I N S

# R E M O T E P A T T E R N S

next/images - Remote Patterns
To protect your application from malicious users, configuration is required in order to use external images. This ensures that only external images from your account can be served from the Next.js Image Optimization API. These external images can be configured with the remotePatterns property in your next.config.js file, as shown below:

module.exports = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'example.com',
port: '',
pathname: '/account123/**',
},
],
},
}
Note: The example above will ensure the src property of next/image must start with https://example.com/account123/. Any other protocol, hostname, port, or unmatched path will respond with 400 Bad Request.

Below is another example of the remotePatterns property in the next.config.js file:

module.exports = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: '**.example.com',
},
],
},
}
Note: The example above will ensure the src property of next/image must start with https://img1.example.com or https://me.avatar.example.com or any number of subdomains. Any other protocol or unmatched hostname will respond with 400 Bad Request.

Wildcard patterns can be used for both pathname and hostname and have the following syntax:

- match a single path segment or subdomain
  ** match any number of path segments at the end or subdomains at the beginning
  The ** syntax does not work in the middle of the pattern.
