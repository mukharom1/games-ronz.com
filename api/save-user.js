// File: api/save-user.js
import { supabase } from '../supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, chips, lastClaim } = req.body;
  const { data, error } = await supabase
    .from('usersp')  // <-- nama tabel diubah
    .upsert({ username, chips, lastClaim });

  if (error) return res.status(500).json({ error });
  res.json({ success: true });
}
