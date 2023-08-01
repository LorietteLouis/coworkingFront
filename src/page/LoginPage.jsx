import Cookies from "js-cookie";

const LoginPage = () => {
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const loginResponse = await fetch("http://localhost:3010/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username, password }),
    });

    // si la réponse est valide
    if (loginResponse.status === 200) {
      const loginData = await loginResponse.json();

      // je récupère le jwt dans le data
      const jwt = loginData.data;

      // je stocke le jwt dans un cookie
      Cookies.set("jwt", jwt);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}className="login">
      <div className="login forma">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>

      <div className="login forma">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>

      <input type="submit" />
    </form>
  );
};

export default LoginPage;