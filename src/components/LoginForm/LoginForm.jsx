import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInEmailPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await signInEmailPassword(data.email, data.password);
      console.log('User signed in:', result.user);
      if (result.user) {
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error('Error signing in user:', error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
        <label className="label">Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          type="email"
          className="input"
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <label className="label">Password</label>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          type="password"
          className="input"
          placeholder="Password"
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn  bg-[#CAEB66] mt-2">Login</button>
      </form>
    </>
  );
}
