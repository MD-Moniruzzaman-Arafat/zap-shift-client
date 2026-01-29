import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUserEmailPassword } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createUserEmailPassword(data.email, data.password);
      console.log('User created:', result.user);
      if (result.user) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
        <label className="label">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          className="input"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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

        <button className="btn  bg-[#CAEB66] mt-2">Register</button>
      </form>
    </>
  );
}
