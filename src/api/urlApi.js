const API_URL = "https://urlshorter-api.onrender.com"; 

export async function createShortUrl(long_url) {
    const response = await fetch(`${API_URL}/short`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: long_url })
    });
    if(!response.ok) {
        throw new Error("Error al crear la url");
    }
    return response.json();
}