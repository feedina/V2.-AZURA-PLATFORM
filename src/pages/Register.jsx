import { Link } from 'react-router-dom';
export default function RegisterPage() {
  return (
    <div>
      <h1>Halaman Pendaftaran</h1>
      <Link to="/login">Sudah punya akun? Masuk</Link>
    </div>
  );
}
