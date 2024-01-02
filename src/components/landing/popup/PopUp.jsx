import { useState, useRef, useEffect } from "react"

export default function PopupLanding() {

    const [showPop, setPop] = useState(true);
    let popRef = useRef();

    // Close Pop Up outside
    useEffect(() => {
        let handler = (e) => {
          if (!popRef.current.contains(e.target)) {
            setPop(false);
          }
        };
        document.addEventListener("mousedown", handler);
    
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      });

  return (
    <div className={`${ showPop === true ? "" : "hidden" } w-full h-screen backdrop-blur-sm fixed left-0 top-0 z-[9000] transition-all duration-200 ease-in-out`}>
        <div className="relative w-full h-full">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-fit h-fit p-8 bg-white border-2 border-black relative" ref={popRef}>
                    <button className="bg-black p-2 rounded-full absolute right-[-5%] top-[-10%] hover:bg-gooYellow-700 transition-all duration-200 ease-in-out border border-black" onClick={() => setPop(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="min-w-[220px] max-w-[600px] h-fit">
                        <h1 className="text-gooYellow-700 text-center font-gooMed text-[16px] md:text-[20px] lg:text-[23px] mb-2">Hi Folks! Please make sure you have already submitted the first stage assignment only through Google Forms.</h1>
                        <h1 className="text-gooGreen-700 text-center font-gooReg text-[13px] md:text-[16px] lg:text-[18px] mt-6">Check the Hands-On PowerPoint for the submission links corresponding to each role</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
