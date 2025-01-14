
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import useRouteName from "../../helpers/hooks/useRouteName";
const Navbar = (props) => {
  const { userdata } = props;
  const [navMenu, setnavMenu] = useState(false)

  const [mobileMenu, setmobileMenu] = useState(false);
  const activeItem = useRouteName();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('userToken')
    navigate("/")
  }

  const sidebarVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };
  const divRef= useRef(null);
 // Runs whenever `mobileMenu` changes
 const handleFocus = () => {
  if (divRef.current) {
    // Ensure focus works by slightly delaying it
    requestAnimationFrame(() => {
      divRef.current.focus();
    });
  }
};
const handleBlur = (e) => {
  // Prevent closing if clicking inside the div
  if (e.relatedTarget && divRef.current.contains(e.relatedTarget)) {
    return;
  }
  setmobileMenu(false); // Close the menu if clicked outside
};


  return (
    <div className="flx relative  w-full h-[10%]">

      <div className="flx h-[85%] w-full navbar-shado !justify-between px-4">
        <p className="fonte text-lg md:text-2xl">CloudBuddy</p>
        <div className="hidden md:block">
          <ul className="flex gap-10 text-xl">

            <li className={`${activeItem == "" ? 'highlight-list' : ''} list-item-sidebar`}>
              <Link to="" name="">Home</Link>

            </li>
            <li className={`${activeItem == "websites" ? 'highlight-list' : ''} list-item-sidebar`}>
              <Link to="websites" name="websites">Websites</Link>

            </li>
            <li className={`${activeItem == "create" ? 'highlight-list' : ''} list-item-sidebar`}>
              <Link to="create" name="create">Create</Link>

            </li>
          </ul>
        </div>
        <div className="relative h-full gap-3 flx">
          <div className="text-lg hidden md:block md:text-2xl">Hi {userdata.name}</div>

          <img onClick={() => setnavMenu(!navMenu)} className="h-[80%] p-[4px] nav-profile-image cursor-pointer rounded-[50%]" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png" alt="" />

          {!mobileMenu &&<button onClick={() => { setmobileMenu(!mobileMenu) }} className="text-xl w-[40px]  md:hidden">𓃑</button>}
          {mobileMenu &&<button onClick={() => { setmobileMenu(!mobileMenu) }} className="text-4xl w-[40px] mb-2 md:hidden">▲</button>}

          {mobileMenu ? <motion.div
            ref={divRef}
             tabIndex={-1}// Make the div programmatically focusable
            onBlur={handleBlur}
            onAnimationComplete={handleFocus} // Focus after animation
            className={`absolute top-[100%] right-0 shadow z-10 bg-white p-3 rounded-2xl overflow-hidden`}
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
          >
            <ul className="flex flex-col gap-5 text-xl text-center">
              {[
                { to: "", name: "", label: "Home" },
                { to: "websites", name: "websites", label: "Websites" },
                { to: "create", name: "create", label: "Create" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className={`${activeItem === item.name ? "highlight-list" : ""
                    } list-item-sidebar`}
                  variants={listItemVariants}
                >
                  <Link to={item.to} name={item.name}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div> : <></>}


          <div onMouseLeave={() => setnavMenu(!navMenu)} className={`absolute z-40 ${navMenu ? '' : 'hidden'} right-0 top-[100%] rounded-md shade overflow-hidden w-[150px] md:w-[200px] h-auto bg-[#ffffff]`}>
            <ul className="w-full h-full flex items-center flex-col text-lg">
              {/* <li className="w-full h-[60px] flex justify-evenly items-center cursor-pointer nav-profile-dropdown">
                <svg className="h-[35%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                <p>Profile</p>
              </li> */}
              <li onClick={handleLogout} className="w-full h-[60px] pl-1 flex justify-evenly items-center cursor-pointer nav-profile-dropdown">
                <svg className="h-[35%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
