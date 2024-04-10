
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kjwfojkcsoxsqooabzwx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqd2Zvamtjc294c3Fvb2Fiend4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MjU5NDIsImV4cCI6MjAyODMwMTk0Mn0.A1EWxZtIMr8ASHJBWg4tq72M8rfuEJnjGZnCX-YAMeE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;