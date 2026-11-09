import { createClient } from '@supabase/supabase-js';
// Supabase publishable keys are designed for browser use; database access is restricted by RLS.
const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || 'https://yogoejhfoscrqqpggwai.supabase.co';
const key = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) || 'sb_publishable_BDolQ_wULTMoOsID6FfbNA_NnqCDr_U';
export const configured = Boolean(url && key);
export const supabase = configured ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }) : null;
