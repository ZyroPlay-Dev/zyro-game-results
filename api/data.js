export default async function handler(req, res) {
  try {
    // 🔐 Get API key from Vercel environment variable
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: "API key not set" });
    }

    // 🔍 Get search query (optional)
    const search = req.query.search ? String(req.query.search) : "";

    // 📡 Build Apps Script URL
    const url = `https://script.google.com/macros/s/AKfycbxN8T2RDagP72TyDpV2V2uvhUAVPwDPGHNafE1p1VpP3j5dSneGGHFnUPLvB7a0D2FijA/exec?key=${API_KEY}&search=${encodeURIComponent(search)}`;

    // 🌐 Fetch data from Apps Script
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch from Apps Script",
        status: response.status
      });
    }

    const data = await response.json();

    // 🧠 Optional: Validate response
    if (!data || typeof data !== "object") {
      return res.status(500).json({ error: "Invalid data format" });
    }

    // ✅ Send clean data to frontend
    return res.status(200).json(data);

  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
}
