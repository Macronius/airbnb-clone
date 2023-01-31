export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${(width, quality)}&q=${quality} || 75`;
}
