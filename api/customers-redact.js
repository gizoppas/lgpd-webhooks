export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customer } = req.body;
    console.log('Customer redact request received:', customer);
    return res.status(200).json({ success: true });
  }
  res.status(405).json({ error: 'Method not allowed' });
}