export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 bg-gray-900 text-white">
      <div className="absolute top-4 left-4">
        <a
          href="/"
          className="text-sm text-gray-300 hover:underline flex items-center gap-2"
        >
          ← Kembali
        </a>
      </div>
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-start">
            <img
              src="https://placehold.co/100x100"
              alt="Logo"
              className="mx-auto mb-4"
            />
          </div>
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-sm text-gray-400">
            Silahkan daftar untuk membuat akun baru
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="username"
              placeholder="Username"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold"
            >
              Buat akun
            </button>
          </form>

          <p className="text-center text-sm text-gray-400">
            Sudah punya akun?{" "}
            <a href="/login" className="text-purple-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Bagian Gambar, hanya tampil di desktop */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://placehold.co/600x800"
          alt="Illustrasi"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
