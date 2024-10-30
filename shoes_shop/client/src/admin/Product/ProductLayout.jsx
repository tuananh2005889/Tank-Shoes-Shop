import React, { useState } from "react";
import { Input } from "antd";
const ProductLayout = () => {
	const [isopen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<div className="p-12 w-full justify-end flex" a>
				<div
					className="bg-neutral-600 h-12 rounded-xl font-bold cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 w-[120px] text-white p-3 hover:bg-white hover:text-black"
					onClick={handleOpen}
				>
					Add product
				</div>
			</div>
			{isopen && (
				<div className="flex z-50 absolute justify-center items-center w-full">
					<div className="bg-gradient-to-r from-neutral-800 to-orange-800 rounded-xl w-[800px] p-5">
						<div className="flex justify-end p-2  text-white text-2xl">
							<p
								onClick={handleClose}
								className="cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out"
							>
								X
							</p>
						</div>
						<div className="text-white grid-cols-[15%_85%] grid text-xl gap-y-6 overflow-auto px-12">
							<p className="">ID:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />

							<p>Name:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />

							<p>Bio:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />
							<p>Brand:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />

							<p>Price:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />
							<p>Quantity:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />

							<p>Size:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />

							<p>Color:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />

							<p>Image:</p>
							<textarea className="bg-gradient-to-l from-neutral-200 to-orange-300 textarea textarea-bordered h-[25px] shadow-md shadow-white text-black w-full" />
						</div>
					</div>
				</div>
			)}
			;
		</div>
	);
};

export default ProductLayout;
