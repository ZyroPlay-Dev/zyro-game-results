export default async function handler(req, res) {

  const API_KEY = "zyro1008";

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxdBZPdWRN6Nw28y4l_GTWYD_eziwDdmIjZgaRT-Q-a9QrzFOJlYerpE57AX9qM4Oxe2w/exec?key=" + API_KEY
  );

  const data = await response.json();

  res.status(200).json(data);
}
