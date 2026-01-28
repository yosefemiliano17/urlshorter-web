import { useState } from "react";
import UrlForm from "../components/UrlForm";

export default function Home() {
  const [shortUrl, setShortUrl] = useState(null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Acortador de URLs</h1>

      <UrlForm onSuccess={setShortUrl} />

      {shortUrl && (
        <div style={{ marginTop: "1rem" }}>
          <p>Tu URL acortada:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
