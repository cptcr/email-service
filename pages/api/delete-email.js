import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      // Replace this URL with the actual endpoint for your email deletion service
      const response = await axios.post('https://your-email-service.com/api/delete-email', {
        email: `${email}@cptcr.cc`,
        password,
      });

      if (response.status === 200) {
        res.status(200).json({ message: 'Email deleted successfully' });
      } else {
        res.status(response.status).json({ message: response.data.message || 'Email deletion failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
