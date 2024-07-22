

const Navbar = () => {
  return (
    <div className="border-2 flx border-black w-full h-[9%]">
        <div className="flx h-full w-full !justify-between px-4">
            <p className="fonte text-2xl">CloudBuddy</p>
            
            <div className="h-full gap-3 flx">
                <div className="text-xl cursor-pointer">🔒Logout</div>
                <img className="h-[70%]" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
