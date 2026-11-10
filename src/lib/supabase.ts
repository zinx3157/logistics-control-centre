import { createClient } from '@supabase/supabase-js';
// Browser publishable key; all data access must remain protected by Supabase RLS.
const url = import.meta.env.VITE_SUPABASE_URL || 'https://yogoejhfoscrqqpggwai.supabase.co';
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_BDolQ_wULTMoOsID6FfbNA_NnqCDr_U';
export const configured = Boolean(url && key);
export const supabase = createClient(url, key, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});
