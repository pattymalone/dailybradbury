import React from "react";

type Content = {
  error?: boolean;
  poem?: {
    title?: string;
    lines?: string[];
  };
  news?: {
    title?: string;
    content?: string;
  };
  artwork?: {
    title?: string;
    image_id?: string;
  };
  song?: {
    title?: string;
    artist?: string;
    link?: string;
  };
};

interface Props {
  content: Content;
}

export default function IndexPage({ content }: Props) {
  if (content.error) {
    return <p>Something went wrong loading today’s curation.</p>;
  }

  return (
    <main style={{ fontFamily: "serif", padding: "2rem", lineHeight: 1.6 }}>
      <h1>Bradbury</h1>

      <section>
        <h2>📝 Poem</h2>
        <h3>{content.poem?.title ?? "Untitled"}</h3>
        <p>{content.poem?.lines?.join(" ") ?? "No poem today."}</p>
      </section>

      <section>
        <h2>📰 News</h2>
        <p>
          <strong>{content.news?.title ?? "No title"}</strong>
          <br />
          {content.news?.content ?? "No news content available."}
        </p>
      </section>

      <section>
        <h2>🖼 Artwork</h2>
        <p>{content.artwork?.title ?? "Untitled artwork"}</p>
        {content.artwork?.image_id && (
          <img
            src={`https://www.artic.edu/iiif/2/${content.artwork.image_id}/full/843,/0/default.jpg`}
            alt={content.artwork.title ?? "Artwork"}
            style={{ maxWidth: "100%" }}
          />
        )}
      </section>

      <section>
        <h2>🎵 Song</h2>
        {content.song?.link ? (
          <p>
            <a href={content.song.link} target="_blank" rel="noreferrer">
              {content.song.title ?? "Untitled"} – {content.song.artist ?? "Unknown Artist"}
            </a>
          </p>
        ) : (
          <p>No song today.</p>
        )}
      </section>
    </main>
  );
}
