import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import uploadLogo from '../../assets/image-upload-icon.png';
import useAuth from '../../hooks/useAuth';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUserEmailPassword } = useAuth();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [uploadImg, setUploadImg] = useState(null);

  const handleImageClick = () => {
    fileRef.current.click(); // hidden input trigger
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API_KEY}`,
      formData
    );
    if (res) {
      setUploadImg(res.data.data.url);
    }

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setPreview(reader.result); // preview image
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createUserEmailPassword(data.email, data.password);
      console.log('User created:', result.user);
      await updateProfile(result.user, {
        displayName: data.name,
        photoURL: uploadImg,
      });
      if (result.user) {
        const res = await axios.post('http://localhost:3000/users', {
          email: data.email,
          role: 'user',
          create_at: new Date().toISOString(),
        });
        console.log(res.data);
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
        <img
          src={uploadImg ? uploadImg : uploadLogo}
          alt=""
          onClick={handleImageClick}
          className="cursor-pointer w-10 rounded-full"
        />
        <input
          type="file"
          name=""
          id=""
          className="hidden"
          ref={fileRef}
          onChange={handleFileChange}
          accept="image/*"
          required
        />
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
