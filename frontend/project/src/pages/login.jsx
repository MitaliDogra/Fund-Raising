function LoginPage() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-2xl">
          <h1 className="text-2xl font-bold">Login</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
  export default LoginPage;
  