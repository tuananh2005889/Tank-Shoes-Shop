import React, { useState } from "react";
import {
	BarChart2,
	Menu,
	TrendingUp,
	
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import OverviewLayout from "./Overview/OverviewLayout"
import ProductLayout from "./Product/ProductLayout"
const slide_item = [
	{ name: "Overview", icon: BarChart2},
	{ name: "Product", icon: TrendingUp },
];

const NavbarAdmin = () => {
	const [currentPage, setCurrentPage] = useState("Overview")
    const [isSlidebarOpen, setIsSlidebarOpen] = useState(true)

    const handleNabarClick = (section) => {
        setCurrentPage(section)
    }

    return ( 
    <div className="flex h-full">
      <motion.div
				className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 bg-gradient-to-t from-neutral-500 to-neutral-700  text-white border-gray-950 h-screen  ${
					isSlidebarOpen ? "w-64" : "w-20"
				}`}
				animate={{ width: isSlidebarOpen ? 256 : 50 }}
			>
                <div className="">
                    <motion.button className="p-3 flex justify-start w-full h-full rounded-full hover:bg-neutral-500 transition-colors max-w-fit"
                    onClick={() => setIsSlidebarOpen(!isSlidebarOpen)}                   
                    >
                        <Menu size={25} className="hover:scale-125 duration-300 transition-all ease-in-out "/>
                    </motion.button>
                    <nav className="hover:bg-neutral-500 transition-all duration-200 ease-in-out">
                        {slide_item.map((item) => 
                            <motion.div
                            key={item.name}
                            title={item.name}
                            className={`flex p-4 group font-bold cursor-pointer ${currentPage === item.name ? "bg-neutral-400 text-white" : ""}`}
                            
                            onClick={() => handleNabarClick(item.name)}
                            >
                            <item.icon
                            size="20"
                            style={{
                                color: item.color,
                                minWidth: "20px",
                            }}
                            className="group-hover:scale-105 transition-all ease-in-out duration-100"
                            >
                            </item.icon>

                            <AnimatePresence>
                                {isSlidebarOpen && (
                                    <motion.span
                                        initial={{opacity: 0, width:0}}
                                        animate={{
                                                opacity:1,
                                                width: "auto",
                                        }}
                                        exit={{opacity: 0, width:0}}
                                        transition={{
                                            duration:0.3,
                                            delay:0.4
                                        }}
                                        className="ml-4 group-hover:scale-110 transition-all ease-in-out duration-100 whitespace-nowrap"
                                    >
                                        {item.name}
                                    
                                    </motion.span>
                                )
                                }
                             </AnimatePresence>
                            </motion.div>
                        )}
                    </nav>
                </div>
        </motion.div>
        <div className="w-full h-full relative">
                        {currentPage === "Overview" && <OverviewLayout/>}
                        {currentPage === "Product" && <ProductLayout/>}
        </div>
    </div>

    )
};

export default NavbarAdmin;
