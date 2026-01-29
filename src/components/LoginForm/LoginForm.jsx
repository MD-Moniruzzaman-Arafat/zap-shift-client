export default function LoginForm() {
  return (
    <>
      <form className="fieldset">
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn  bg-[#CAEB66] mt-2">Login</button>
      </form>
    </>
  );
}
