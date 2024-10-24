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
	{ name: "Product", icon: ShoppingBag, color: "white" },
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
				className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 border-gray-950 rounded-b-full  ${
					isSlidebarOpen ? "w-64" : "w-20"
				}`}
				animate={{ width: isSlidebarOpen ? 256 : 80 }}
			>
                <div>
                    <motion.button>
                        <Menu/>

                    </motion.button>
                    <nav>
                        {slide_item.map((item) => 
                            <motion.div
                            key={item.name}
                            title={item.name}
                            className={`flex ${currentPage === item.name ? "bg-gray-700 text-white" : ""}`}

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

                             </AnimatePresence>

                            </motion.div>
                        )}
                    </nav>
                </div>
        </motion.div>
    </div>

    )
};

export default NavbarAdmin;
