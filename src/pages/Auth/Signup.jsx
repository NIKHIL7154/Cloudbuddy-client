
import SignupImg from '../../assets/signup-girl.png'
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { isValidEmail } from '../../helpers/TextValidators';
import { ToastAPI } from '../../contexts/ToastContext';
import GoogleButton from './components/GoogleButton';
import { HOST } from '../../helpers/Variables';
import axios from 'axios';
import Cookies from 'js-cookie';

const Signup = () => {
	const [formdata, setformdata] = useState({ email: "", pass: "", name: "" });
	const Toast = useContext(ToastAPI)[1];
	const navigate = useNavigate()
	const handleInput = (e) => {
		const { name, value } = e.target
		setformdata((prevState) => ({ ...prevState, [name]: value }))
	}


	const handleForm = async () => {
		if (isValidEmail(formdata.email) && formdata.pass.length >= 6 && formdata.name.length >= 4) {
			const payload = formdata
			try {
				const signupResult = await axios.post(HOST + "/signup", payload)
				if (signupResult.status != 200) {
					Toast({ message: signupResult.data.message, state: true, type: "success" })
					return;
				}
				Toast({ message: "User created successfully", state: true, type: "success" })
				
				Cookies.set("userToken", signupResult.data.userToken)
				navigate("/app")
				return
			} catch (error) {
				Toast({ message: error.response.data.message, state: true, type: "error" })
				console.log(error.response.data)
				return
			}

		} else {
			Toast({ message: "Enter valid details", state: true, type: "error" })
		}
	}

	return (
		<div className="sized flx">
			<div className="w-0 lg:w-[60%] flx h-full bg-[#eef1fa]">
				<img src={SignupImg} className='h-[98%]' alt="" />
			</div>
			<div className="w-[100%] lg:w-[40%] h-full flx ">
				<div className="w-[350px] md:w-[450px]">
					<p className='font-bold fonte text-2xl'>CloudBuddy</p>
					<p className='mt-5 text-lg'>Adventure starts here🚀</p>
					<p className='my-2 text-sm'>Please create an account to start using our services.</p>
					<form action="" className='flx flex-col w-full'>
						<TextField margin='normal' autoComplete='name' onChange={handleInput} className='w-full' color='primary' id="outlined-basic" name="name" label="Name" variant="outlined" />
						<span className='m-2'></span>
						<TextField type='email' autoComplete='email' onChange={handleInput} className='w-full' color='primary' id="outlined-basic" name="email" label="Email" variant="outlined" />
						<span className='m-2'></span>
						<TextField onChange={handleInput} className='w-full' color='primary' id="outlined-basic" name="pass" label="Password" variant="outlined" />
					</form>
					<div className='flx flex-col'>
						<button onClick={handleForm} className='btnx w-full my-5 h-[45px] rounded-md'>Sign up</button>
						<p className='text-center'>Already registered? <Link to="/auth/login" className='text-blue-600'>Login here</Link></p>

						<p className='text-center my-2 relative'>OR</p>

						<GoogleButton title="Sign up with Google" />

					</div>

				</div>
			</div>

		</div>
	)
}

export default Signup
