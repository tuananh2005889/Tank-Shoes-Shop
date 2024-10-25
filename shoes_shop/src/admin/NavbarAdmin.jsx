import React, { useState } from "react";
import {
	BarChart2,
	ShoppingBag,
	Menu,
	Settings,
	TrendingUp,
	ShoppingCart,
	DollarSign,
	User,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence

const slide_item = [
	{ name: "Overview", icon: BarChart2, color: "white" },
	{ name: "Product", icon: TrendingUp, color: "white" },
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
				className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 bg-white border-gray-950 h-screen  ${
					isSlidebarOpen ? "w-64" : "w-20"
				}`}
				animate={{ width: isSlidebarOpen ? 256 : 80 }}
			>
                <div className="">
                    <motion.button className="p-3 flex justify-end w-full h-full "
                    onClick={() => setIsSlidebarOpen(!isSlidebarOpen)}                   
                    >
                        <Menu size={25} className="hover:scale-125 duration-300 transition-all ease-in-out"/>
                    </motion.button>
                    <nav>
                        {slide_item.map((item) => 
                            <motion.div
                            key={item.name}
                            title={item.name}
                            className={`flex p-4 font-bold cursor-pointer ${currentPage === item.name ? "bg-gray-700 text-white" : ""}`}

                            onClick={() => handleNabarClick(item.name)}
                            >
                            <item.icon
                            size="20"
                            style={{
                                color: item.color,
                                minWidth: "20px",
                            }}
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
                                        className="ml-4 whitespace-nowrap"
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
                        {/* {currentPage === "Overview" && } */}
        </div>
    </div>

    )
};

export default NavbarAdmin;
