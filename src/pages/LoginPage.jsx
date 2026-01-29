import { Link } from 'react-router';
import authImg from '../assets/authImage.png';
import LoginForm from '../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-screen rounded-full ">
          <div className="flex items-center justify-center bg-[#FFFFFF] flex-1">
            <div className="">
              <div className="mb-5">
                <h1 className="font-extrabold text-5xl">Welcome Back</h1>
                <p>Login with ZapShift</p>
              </div>
              <div className="">
                <fieldset className="fieldset w-xs p-5 lg:p-0">
                  <LoginForm />

                  <div>
                    <span>
                      Don’t have any account?
                      <Link
                        to={'/register'}
                        className="link link-hover text-[#8FA748]"
                      >
                        {' '}
                        Register
                      </Link>
                    </span>
                  </div>
                  <div className=" text-center my-5">
                    <span>Or</span>
                  </div>
                  <button className="btn  bg-white text-black border-[#e5e5e5]">
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#FAFDF0] flex-1 ">
            <img src={authImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
