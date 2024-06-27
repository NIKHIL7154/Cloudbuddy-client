
import LoginImg from '../../assets/login-page-boy.png'
import { useContext, useState } from 'react';

import { Link} from 'react-router-dom';
import AlertToast from '../../components/AlertToast';
import { ToastAPI } from '../../contexts/ToastContext';
import { isValidEmail } from '../../helpers/TextValidators';
import GoogleButton from './components/GoogleButton';
import LoginForm from './components/LoginForm';
import { HOST } from '../../helpers/Variables';


const Login = () => {
	const Toast=useContext(ToastAPI)[1];

	const [formdata, setformdata] = useState({
        email: "",
        pass: "",
        check: false,
    });

	function makeToast(value){
		Toast({message:value,state:true,type:"error"})
	}
	async function handleLogin(){
		const payload={
			email:formdata.email,
			pass:formdata.pass
		}
		const raw= await fetch(HOST+"/login",{
			method:"POST",
			headers:{
				"content-type":"application/json"
			},
			body:JSON.stringify(payload)
		})
		
		const data= await raw.json()
		console.log(data)
		if(raw.status==200){
			console.log("Login success")
		}else{
			makeToast(data.message)
		}
	}

	const handleSignin=()=>{
		if(!isValidEmail(formdata.email)){
			makeToast("Enter valid email")
		}else if(formdata.pass.length>=6){
			handleLogin()
		}else{
			makeToast("Enter valid password")
		}
	}
	return (
		<div className="sized flx">
			
			<div className="w-0 md:w-[50%] lg:w-[60%] flx h-full bg-[#eef1fa]">
				<img src={LoginImg} className='h-[75%] lg:h-[95%]' alt="" />
			</div>
			<div className="w-[100%] md:w-[50%] lg:w-[40%] h-full flx ">
				<div className="w-[350px] md:w-[450px]">
					<p className='font-bold fonte text-2xl'>CloudBuddy</p>
					<p className='mt-5 text-lg'>Welcome to Cloudbuddy👋🏻</p>
					<p className='my-2 text-sm'>Please sign in to your account and start the adventure</p>
					<LoginForm formdata={formdata} setformdata={setformdata}/>
					
					<div className='flx flex-col'>
						<button onClick={handleSignin} className='btnx w-full my-5 h-[45px] rounded-md'>Sign in</button>
						<p className='text-center'>New on our platform? <Link  to="/auth/signup" className='text-blue-600'>Create an account</Link></p>

						<p className='text-center my-2 relative'>OR</p>

						<GoogleButton title="Sign in with Google"/>
						<AlertToast/>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Login
