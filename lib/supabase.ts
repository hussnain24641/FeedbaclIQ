
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xhvzhagyallmyunakpwf.supabase.co'
 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhodnpoYWd5YWxsbXl1bmFrcHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2OTQzNDMsImV4cCI6MjA2ODI3MDM0M30.G_Or4trAkCgNICDMQ4F1_-qFQ3bKQE-AeJxuU1wDNE0'
export const supabase = createClient(supabaseUrl, supabaseKey)