export async function getDailyContent() {
  const [poem, news, artwork, song] = await Promise.all([
    fetch("https://poetrydb.org/random").then(res => res.json()),
    fetch("https://inshortsapi.vercel.app/news?category=science").then(res => res.json()),
    fetch("https://api.artic.edu/api/v1/artworks/search?q=landscape&limit=1").then(res => res.json()),
    Promise.resolve({
      title: "Space Song",
      artist: "Beach House",
      link: "https://open.spotify.com/track/6vuykQgDLUCiZ7YggIpLM9"
    })
  ]);

  return {
    poem: poem[0],
    news: news.data[0],
    artwork: artwork.data[0],
    song
  };
}
