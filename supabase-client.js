// supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://juelhjpbgnmyosyxffhw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1ZWxoanBiZ25teW9zeXhmZmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMjI1NDUsImV4cCI6MjA5OTY5ODU0NX0.9hOlDJw1K1CEdiehfwlu3Us2t5xFrFBuKp9wLKbDw7I';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
