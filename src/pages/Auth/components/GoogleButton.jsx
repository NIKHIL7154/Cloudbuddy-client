import React, { useState, useEffect, useContext } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { HOST } from '../../../helpers/Variables';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { ToastAPI } from '../../../contexts/ToastContext';


const GoogleButton = ({title}) => {
    const navigate = useNavigate()
    const Toast= useContext(ToastAPI)[1]

    const StartLogin = useGoogleLogin({
        onSuccess: (res)=>handleLoginSuccess(res),
        onError: (error) => console.log('Login Failed:', error)
    });
    const handleLoginSuccess= async (response)=>{
        console.log(response)
        axios.post(HOST+"/getAccessToken",{
            "accessToken":response.access_token
        }).then((response)=>{
            console.log(response)
            if(response.status==200 || response.status==201){
                Cookies.set('userToken',response.data.userToken);
                navigate("/app")
                return
            }
            throw "Error while processing request"
        }).catch((err)=>{
            Toast({message:"An error occurred at our side. Please try again",state:true,type:"error"})
            console.log(err)
        })
    }

    return (
        <button onClick={StartLogin} className='btnx my-2 w-full rounded-md h-[45px] flx'>
            <img className='w-[22px] mr-2' src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="" />
            {title}</button>
    )
}

export default GoogleButton
