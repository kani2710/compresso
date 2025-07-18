// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

// Environment variables from your `.env` file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single supabase client for your entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
