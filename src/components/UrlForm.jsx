import { useState } from "react";
import { createShortUrl } from "../api/urlApi";

export default function UrlForm({ onSuccess }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await createShortUrl(url);
      onSuccess(response.data.shortUrl);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("No se pudo acortar la URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Procesando..." : "Acortar"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}