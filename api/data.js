export default async function handler(req, res) {

  const API_KEY = process.env.API_KEY;
  const search = req.query.search || "";

  const url = `https://script.google.com/macros/s/AKfycbxSJTWId-fKfR8C80zzzaBvf8MUwCP6wKegl_C5RZIAmP_cntdyx8CcBUjARLaW7u2JcQ/exec?key=${API_KEY}&search=${search}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}

