import React from "react";
import Navbar from "../common/Navbar"
import NavbarAdmin from "./NavbarAdmin";
const AdminLayout = () => {
	return (
		<div className="bg-gradient-to-r from-gray-700 to-gray-300 w-screen h-screen">
			<div>
				<Navbar />
			</div>
			<div>
				<NavbarAdmin/>
			</div>
		</div>
	);
};

export default AdminLayout;
