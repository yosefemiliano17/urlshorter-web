import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const { key } = useParams();

  useEffect(() => {
    window.location.href = `https://urlshorter-api.onrender.com/${key}`;
  }, [key]);

  return (
    <p>Redirigiendo...</p>
  );
}
