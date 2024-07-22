
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
    const { formdata, setformdata } = props
   
    const handleInput = (e) => {
        const { name, value } = e.target;
        setformdata((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <form action="" className="flx flex-col w-full">
                <TextField
                    onChange={handleInput}
                    name="email"
                    className="w-full"
                    autoComplete="email"
                    color="primary"
                    margin="dense"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={formdata.email}
                    
                />
                <span className="m-2"></span>
                <TextField
                    onChange={handleInput}
                    name="pass"
                    className="w-full"
                    color="primary"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={formdata.pass}
                    
                />
            </form>
            <div className='w-full flex justify-end items-center px-1 mt-4'>
                {/* <p onClick={handleRemember} className='cursor-pointer'>
                    <button ref={checkRef} className='w-[15px] bg-white h-[15px] mr-1 rounded-md border-[1px] border-[#00000062]'></button>
                    Remember me</p> */}
                <p className='text-blue-600 cursor-pointer'><Link to="/auth/password">Forgot password?</Link></p>
            </div>
        </>
    );
};

export default LoginForm;
