import React from "react";
import Navbar from "../common/Navbar"
import NavbarAdmin from "./NavbarAdmin";
const AdminLayout = () => {
	return (
		<div className="bg-neutral-400 w-screen h-screen overflow-hidden">
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
