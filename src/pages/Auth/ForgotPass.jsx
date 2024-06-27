
import ForgotImg from '../../assets/forgot-password.png'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
	const [email, setemail] = useState("");
	
	return (
		<div className="sized flx">
			<div className="w-0 lg:w-[60%] flx h-full bg-[#eef1fa]">
				<img src={ForgotImg} className='h-[98%]' alt="" />
			</div>
			<div className="w-[100%] lg:w-[40%] h-full flx ">
				<div className="w-[350px] md:w-[450px]">
					<p className='font-bold fonte text-2xl'>CloudBuddy</p>
					<p className='mt-5 text-lg'>Forgot pass?🔒</p>
					<p className='my-2 text-sm'>Enter your email and we will send you instructions to reset your password</p>
					<form action="" className='flx flex-col w-full'>
						<TextField autoComplete='email' onChange={(e)=>{setemail(e.target.value)}} margin='dense' className='w-full' color='primary' id="outlined-basic"  label="Email" variant="outlined" />
						<span className='m-2'></span>
						
					</form>
					<div className='flx flex-col'>
						<button className='btnx w-full my-5 h-[45px] rounded-md'>Send Reset Link</button>
						<p className='text-center'><Link to="/auth/login" className='text-blue-600'>← Go back to login</Link></p>

					</div>

				</div>
			</div>
		</div>
	)
}

export default ForgotPass
