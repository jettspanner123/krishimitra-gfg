"use client";
import React from "react";
import LanguageData from "../languageData.json";
import {motion} from "framer-motion";
import Loader from "@/app/Components/Loader";
import {IoMdArrowDropdown} from "react-icons/io";

export default function Home() {

    React.useEffect(() => {
        (
            async () => {
                // @ts-ignore
                const locomotiveScroll = (await import('locomotive-scroll')).default;
                const LocomotiveScroll = new locomotiveScroll();
            }

        )()
    }, [])

    const [LanguageState, setLanguageState] = React.useState(0);
    const [MousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })

        return () => {
            window.removeEventListener("mousemove", () => {
            });
        }
    }, [])

    const [LanguageDropdownState, setLanguageDropdownState] = React.useState(false);
    return (
        <React.Fragment>
            <Loader/>
            <main className={`bg-[#191b1f] grain min-h-[200vh] min-w-screen `}>
                <motion.div
                    animate={{x: MousePosition.x / 10, y: MousePosition.y / 10}}
                    transition={{type: "tween", ease: "backOut"}}
                    className={`bg-green-600 w-[50rem] h-[50rem] rounded-full absolute top-[50vh]`}/>
                <div className={`w-screen  blur_it1000 text-white p-10 h-[200vh] absolute top-0 left-0`}>
                    <div className={`flex justify-between items-center`}>
                        <h1 className={`text-[5rem] relative font-bold inline-block `}>{LanguageData[LanguageState].FrontPageHeader}</h1>
                        <div className={`flex gap-[2rem]`}>
                            <h1 className={`text-gray-600 text-[1.5rem] font-bold hover:border-white border-2 border-transparent py-2 px-4 hover:text-white transition-all duration-700 cursor-default rounded-full`}>Menu</h1>
                            <h1
                                onClick={() => setLanguageDropdownState(!LanguageDropdownState)}
                                className={`text-gray-600 relative text-[1.5rem] font-bold hover:border-white border-2 border-transparent py-2 px-4 hover:text-white transition-all duration-700 cursor-default rounded-full flex items-center gap-[1rem]`}>Language <IoMdArrowDropdown size={30}/>

                            </h1>
                        </div>

                    </div>

                </div>
            </main>
        </React.Fragment>
    )
}
