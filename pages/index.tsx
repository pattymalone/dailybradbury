import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch("/api/today")
  .then(res => {
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    return res.json();
  })
  .then(setContent)
  .catch(err => {
    console.error(err);
    setContent({ error: true });
  });
  }, []);

  if (!content) return <p>Loading Bradbury’s daily curation...</p>;
if (content.error) return <p>Something went wrong loading today’s curation.</p>;

  return (
    <main style={{ fontFamily: "serif", padding: "2rem", lineHeight: 1.6 }}>
      <h1>Bradbury</h1>

      <section>
        <h2>📝 Poem</h2>
        <h3>{content.poem.title}</h3>
        <p>{content.poem.lines.join(" ")}</p>
      </section>

      <section>
        <h2>📰 News</h2>
        <p><strong>{content.news.title}</strong><br />{content.news.content}</p>
      </section>

      <section>
        <h2>🖼 Artwork</h2>
        <p>{content.artwork.title}</p>
        {content.artwork.image_id && (
          <img
            src={`https://www.artic.edu/iiif/2/${content.artwork.image_id}/full/843,/0/default.jpg`}
            alt={content.artwork.title}
            style={{ maxWidth: "100%" }}
          />
        )}
      </section>

      <section>
        <h2>🎵 Song</h2>
        <p>
          <a href={content.song.link} target="_blank" rel="noreferrer">
            {content.song.title} – {content.song.artist}
          </a>
        </p>
      </section>
    </main>
  );
}
