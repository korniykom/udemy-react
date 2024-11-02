import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://brxapdcoeifqykvnfppv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeGFwZGNvZWlmcXlrdm5mcHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzNjI1ODUsImV4cCI6MjA0NDkzODU4NX0.22ACBZMRB2KdD6LWPlZgs2bJqxTfAQbEiTHtGtJuIZA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
