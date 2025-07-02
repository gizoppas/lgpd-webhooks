export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customer } = req.body;
    console.log('Customer data request received:', customer);
    return res.status(200).json({
      customer_data: {
        id: customer.id,
        email: customer.email,
        name: 'Nome Exemplo'
      }
    });
  }
  res.status(405).json({ error: 'Method not allowed' });
}