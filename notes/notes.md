# D E P E N D E N C I E S

**airbnb logo**

- https://spng.pngfind.com/pngs/s/13-133416_airbnb-logo-9-22-de-outubro-de-airbnb.png

## icons

- https://github.com/tailwindlabs/heroicons
- https://unpkg.com/browse/@heroicons/react@2.0.14/24/outline/

  `npm install @heroicons/react`

## scrollbar

- https://www.npmjs.com/package/tailwind-scrollbar-hide

  `npm i tailwind-scrollbar-hide`

## calendar

- https://www.npmjs.com/package/react-date-range
- http://hypeserver.github.io/react-date-range

  `npm i react-date-range`
  `npm install --save react date-fns`

## progress bar

- https://www.npmjs.com/package/@badrap/bar-of-progress
  `npm i @badrap/bar-of-progress`

## mapbox

- https://account.mapbox.com/
- https://docs.mapbox.com/
- https://docs.mapbox.com/mapbox-gl-js/guides/
- https://docs.mapbox.com/mapbox-gl-js/example/
- https://docs.mapbox.com/api/maps/styles/
- https://docs.mapbox.com/mapbox-gl-js/api/markers/
- https://docs.mapbox.com/mapbox-gl-js/api/sources/
- https://docs.mapbox.com/mapbox-gl-js/api/map/#map#queryrenderedfeatures

**style - colors**

> Administrative boundaries #ecfcdf \
> Base #b4c9cb \
> Building #595959 \
> Commercial area #364e72 \
> Education #ffffff

## react-map-gl

- https://github.com/visgl/react-map-gl
- https://www.npmjs.com/package/react-map-gl
- npm install --save react-map-gl mapbox-gl

---

- (react-map-gl difference between v6.1.16 and v7.0.21)
- https://visgl.github.io/react-map-gl/docs/upgrade-guide
- use this instead
- https://visgl.github.io/react-map-gl/docs/get-started/get-started
- https://github.com/visgl/react-map-gl/tree/7.0-release/examples/get-started

## geolib

- https://www.npmjs.com/package/geolib/v/1.3.4
- https://github.com/manuelbieh/geolib
- npm install geolib
- getCenter()

# T O P I C S

- Serverside Rendering vs Static Rendering
- Incremental Static Generation
- something about a "context object"
- <Image src={img} layout="fill" objectFit="cover" /> zoom in rather than distort

# D O M A I N &nbsp; R E M O T E &nbsp; P A T T E R N S

next/images ote Patterns
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

# HOW TO CENTER MAP ON AVERAGE OF ALL RESULTING LOCATIONS

step 1: install geolib with npm
\
`npm i geolib`

step 2: use getCenter() method, and argument object must match, therefore must take data object and transform to match receiving requirement form

```
geolib.getCenter({
  {latitude: 52.516272, longitude: 13.377722},
  {latitude: 51.515, longitude: 7.453619},
  {latitude: 51.503333, longitude: -0.119722},
})
```

\
prop drilling not used here (otherwise, use Redux, Recoil, or the Context API)

# TODO

[✔] the map is not interactive, cannot scroll, zoom, or select

- https://blog.logrocket.com/using-mapbox-gl-js-react/
- replace {...viewport} with initialViewState={viewport}

[ ] get current location during load time and set the result as our default viewport

[ ] activate the heart/like feature 