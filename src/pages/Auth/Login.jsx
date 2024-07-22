import LoginImg from '../../assets/login-page-boy.png'
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { ToastAPI } from '../../contexts/ToastContext';
import { isValidEmail } from '../../helpers/TextValidators';
import GoogleButton from './components/GoogleButton';
import LoginForm from './components/LoginForm';
import { HOST } from '../../helpers/Variables';
import { useCookies } from 'react-cookie';
import axios from 'axios';


const Login = () => {

	const Toast=useContext(ToastAPI)[1];
	const [cookies, setCookie, removeCookie] = useCookies(['accesstoken']);
	const [formdata, setformdata] = useState({
        email: "",
        pass: ""
    });
	const navigate= useNavigate()

	async function validateToken(){
		if(cookies.accesstoken){
			const tokenVerification= await axios.post(HOST+"/verifyAccessToken",{},{headers:{
				Authorization:"Bearer "+cookies.accesstoken
			}})
			if(tokenVerification.status===200){
				navigate("/app")
				return
			}
			removeCookie("accesstoken")
			Toast({message:"Your session has been expired. Please login again",state:true,type:"error"})
		}
	}
	useEffect(() => {
		validateToken()
		
	}, []);
	
	async function handleLogin(){
		const userLoginResult =await axios.post(HOST+"/login",{
			email: formdata.email,
			pass: formdata.pass,
		})
		if(userLoginResult.status != 200){
			Toast({message:"Login failed. Please check your credentials.",state:true,type:"error"})
			console.log(userLoginResult.data)
			return
		}
		//login is successfull
		console.log(userLoginResult.data)
		Toast({message:"Login successfull",state:true,type:"success"})
		setCookie("accesstoken",userLoginResult.data.token,{path:"/"})
		navigate("/app")


	}

	const handleInputValidator=()=>{
		if(!isValidEmail(formdata.email)){
			Toast({message:"Enter valid email",state:true,type:"error"})
		}else if(formdata.pass.length>=6){
			//input data validated login process started
			handleLogin()
		}else{
			Toast({message:"Enter valid password",state:true,type:"error"})
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
						<button onClick={handleInputValidator} className='btnx w-full my-5 h-[45px] rounded-md'>Sign in</button>
						<p className='text-center'>New on our platform? <Link  to="/auth/signup" className='text-blue-600'>Create an account</Link></p>
						<p className='text-center my-2 relative'>OR</p>
						<GoogleButton title="Sign in with Google"/>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Login
