export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { store_id } = req.body;
    console.log('Store redact request received:', store_id);
    return res.status(200).json({ success: true });
  }
  res.status(405).json({ error: 'Method not allowed' });
}