import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

// Inisialisasi Supabase di sini atau di file terpisah
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      alert(error.message)
    } else {
      // Jika berhasil, arahkan ke dasbor
      navigate('/dashboard')
    }
  }

  return (
    <div>
      <h1>Login ke Azura Platform (SPA Version)</h1>
      <form onSubmit={handleSignIn}>
        {/* ... form input email dan password di sini ... */}
        <button type="submit">Masuk</button>
      </form>
    </div>
  )
}
