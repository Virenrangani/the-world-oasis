import { createClient } from "@supabase/supabase-js";

// ✅ Use the correct Supabase project URL and key
export const supabaseUrl = "https://flcknzuvczriekcrsrzl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsY2tuenV2Y3pyaWVrY3JzcnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMjg5MjksImV4cCI6MjA2MTkwNDkyOX0.9xKc_tj38tZkQbTTLq2izUuBOMkj00vvtKxvs8et-Mk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
