
import HomeNavigationDisplay from "../../components/HomeNavigationDisplay"

const DashHome = () => {
  return (
    <div className="py-[50px] text-center text-2xl">
      <p className="text-2xl text-center"><span className="text-4xl">Welcome</span> to <span className="fonte !text-3xl">CloudBuddy</span></p>
      <p>Thanks for choosing us😊</p>
      {/* <div className="svgdiv absolute z-10 bd top-0">
      <svg className="" height="500" width="700" xmlns="http://www.w3.org/2000/svg">
<path d="M645 50 L645 110 C 4 1,1 1,345 110 L345 250" style={{fill:"none",stroke:"green",strokeWidth:2}} />
</svg>
      </div> */}
      <HomeNavigationDisplay/>
      {/* <CardsHome/> */}
      

    </div>

  )
}

export default DashHome
