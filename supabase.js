// File: supabase.js
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js'

export const supabase = createClient(
  'https://zsifioecpdwzutzvxckc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzaWZpb2VjcGR3enV0enZ4Y2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMTczMzQsImV4cCI6MjA2OTU5MzMzNH0.PsoCWrAJi_WSRLukE5MceRJ4U_S4RsMXoObkhjERePA'
);
