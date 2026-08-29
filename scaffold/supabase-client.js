// Supabase client scaffold — do NOT commit secrets. Add SUPABASE_URL and SUPABASE_ANON_KEY as repo secrets.
// Usage: import { initSupabase, getUserZones, saveUserZones } from './scaffold/supabase-client.js'

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

let supabase = null;

export function initSupabase(url, anonKey){
  if(!url || !anonKey) throw new Error('Missing Supabase url or anon key');
  supabase = createClient(url, anonKey);
  return supabase;
}

export async function getUserZones(userId){
  if(!supabase) throw new Error('Supabase not initialized');
  // Placeholder: you should create a table `user_zones` with (user_id, zones jsonb)
  const { data, error } = await supabase.from('user_zones').select('zones').eq('user_id', userId).single();
  if(error) throw error; return data ? data.zones : null;
}

export async function saveUserZones(userId, zones){
  if(!supabase) throw new Error('Supabase not initialized');
  // Upsert into user_zones table
  const { data, error } = await supabase.from('user_zones').upsert({ user_id: userId, zones }).select();
  if(error) throw error; return data;
}
