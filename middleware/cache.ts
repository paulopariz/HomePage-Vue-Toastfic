export default defineEventHandler((event) => {
  setHeader(event, "Cache-Control", "s-maxage=31536000, stale-while-revalidate");
});
