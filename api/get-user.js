// File: api/get-user.js
import { supabase } from '../supabase.js';

export default async function handler(req, res) {
  const { username } = req.query;
  if (!username) return res.status(400).json({ error: 'Username is required' });

  const { data, error } = await supabase
    .from('usersp')  // <-- nama tabel diubah
    .select('*')
    .eq('username', username)
    .single();

  if (error) return res.status(500).json({ error });
  res.json(data);
}
