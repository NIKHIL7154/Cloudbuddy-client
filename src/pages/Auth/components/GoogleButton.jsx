

const GoogleButton = (props) => {
    const {title}=props
    return (
        <button className='btnx my-2 w-full rounded-md h-[45px] flx'>
            <img className='w-[22px] mr-2' src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="" />
            {title}</button>
    )
}

export default GoogleButton
