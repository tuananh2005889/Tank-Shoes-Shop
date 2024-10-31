import React from "react";

import { Link } from "react-router-dom";
import { logo } from "../assets";
const Navbar = () => {
	return (    
		<div>
			{/* navbar */}
			<div className="w-screen h-14 bg-gradient-to-r from-neutral-700 to-neutral-600 shadow-md p-1 justify-center items-center shadow-black flex relative">
				<div className="w-16 relative flex h-full bg-cover bg-center z-50">
					<Link to="/">
						<div
							style={{ backgroundImage: `url(${logo})` }}
							className="w-16 relative flex h-full bg-cover bg-center z-50"
						></div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
