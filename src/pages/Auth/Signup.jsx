
import SignupImg from '../../assets/signup-girl.png'
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { isValidEmail } from '../../helpers/TextValidators';
import AlertToast from '../../components/AlertToast';
import { ToastAPI } from '../../contexts/ToastContext';
import GoogleButton from './components/GoogleButton';
import { HOST } from '../../helpers/Variables';

const Signup = () => {
	const [formdata, setformdata] = useState({ email: "", pass: "",name:"" });

	const Toast=useContext(ToastAPI)[1];

	const handleInput = (e) => {
		const { name, value } = e.target
		setformdata((prevState) => ({ ...prevState, [name]: value }))
	}

	const handleForm =async ()=>{
		if(isValidEmail(formdata.email) && formdata.pass.length>=6 && formdata.name.length>=4){
			const payload={
				name:formdata.name,
				email:formdata.email,
				pass:formdata.pass
			}

			const raw= await fetch(HOST+"/signup",{
				method:"POST",
				headers:{
					"content-type":"application/json"
				},
				body:JSON.stringify(payload)
			})
			console.log(raw)
			const data =await raw.json()
			console.log(data)
		}else{
			Toast({message:"Enter valid details",state:true,type:"error"})
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

						<GoogleButton title="Sign up with Google"/>

					</div>

				</div>
			</div>
			<AlertToast/>
		</div>
	)
}

export default Signup
