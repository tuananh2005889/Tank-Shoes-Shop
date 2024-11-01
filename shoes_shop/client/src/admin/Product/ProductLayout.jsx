import React, { useState } from "react";
import { Input } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ScrollArea } from "@/components/ui/scroll-area"
import { CiImageOn } from "react-icons/ci";

const ProductLayout = () => {
	const [formData, setFormData] = useState({
		Name: "",
		Bio: "",
		Brand: "",
		Price: "",
		Quantity: "",
		Size: [],
		Color: [],
		Image: [],
	});

	const [imgs, setImgs] = useState([]);
	const [colors, setColors] = useState([]);

	const imgRef = useRef(null);
	const queryClient = useQueryClient();
	/////////////////////////////////////////////////////////////////////////////////
	const {
		mutate: addShose,
		isError,
		error,
		isPending,
	} = useMutation({
		mutation: async (formData) => {
			try {
				const res = await fetch("/api/shoes/add", {
					method: "POST",
					headers: {
						"content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				const data = await res.json();
				if (!res.ok)
					throw new Error(data.error || "Failed to create Shoes");
				console.log(data);
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: () => {
			setFormData({
				Name: "",
				Bio: "",
				Brand: "",
				Price: "",
				Quantity: "",
				Size: [],
				Color: [],
				Image: [],
			});
			closeModal();

			queryClient.invalidateQueries(["Product"]);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	///////////////////////////////////////////////
	//  getALLProduct
	const {
		data: product,
		isloading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["product"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/shoes/all");
				const data = await response.json();

				console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});
	//////////////////////////////////////////////////
	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		// Send formData to the server
		formData.Image = imgs;
		formData.Color = colors;
		console.log(formData);
		addShose(formData);
	};
	////////////////////////////////////////////////
	const handleImgChange = (e) => {
		const files = Array.from(e.target.files);
		const updatedImgs = [...imgs];

		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				updatedImgs.push(reader.result);
				// setImgs(updatedImgs);
				setImgs((prevImgs) => [...prevImgs, reader.result]);
			};
			reader.readAsDataURL(file);
		});
	};

	const handleRemoveImg = (indexToRemove) => {
		setImgs(imgs.filter((_, index) => index !== indexToRemove));
	};
	//////////////////////////////////////

	// open div add
	const closeModal = () => {
		const modal = document.getElementById("Add_shoes");
		if (modal) {
			modal.close();
		}
	};
	return (
		<div>
			<div className="p-12 w-full justify-end flex">
				<button
					className="bg-neutral-600 h-12 rounded-xl font-bold cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 w-[120px] text-white p-3 hover:bg-white hover:text-black"
					onClick={() =>
						document.getElementById("Add_shoes").showModal()
					}
				>
					Add product
				</button>
			</div>
			<dialog
				id="Add_shoes"
				className="modal rounded-2xl overflow-hidden"
			>
				{/* Overlay */}
				<div
					className="bg-gray-900 cursor-pointer bg-opacity-50 fixed inset-0 z-10"
					onClick={closeModal}
				></div>

				{/* Modal box */}
				<div className="modal-box backdrop-blur-3xl bg-gray-700 shadow-gray-500 shadow-md bg-opacity-0 relative z-20">
					<div className="bg-neutral-800 rounded-xl w-[600px] p-12">
						<div className="text-white grid-cols-[30%_70%] grid text-xl gap-y-6 px-2 overflow-auto">
							<p className="mt-1">ID:</p>
							<input className="bg-neutral-500 mt-1 rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Name:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Bio:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Brand:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Price:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Quantity:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Size:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Color:</p>
							<input className="bg-neutral-500 textarea textarea-bordered  rounded-md text-black w-full hover:bg-white transition-all ease-in-out duration-200" />

							<p>Image:</p>
							<div className="w-full bg-black p-4 h-[200px] rounded-2xl bg-opacity-20">
								<ScrollArea>
									<div className="flex space-x-3">
										{imgs.map((img, index) => (
											<div>
												<div className="w-6 h-6 cursor-pointer"
													onClick={() =>
														handleRemoveImg(index)
													}>
													X
												</div>
												<img
													key={index}
													src={img}
													alt={`img-${index}`}
													className="w-auto h-20 object-cover rounded-xl"
												/>
											</div>
										))}
									</div>
							
								</ScrollArea>

								<div className="flex justify-between border-t py-2 border-t-gray-700">
									<div className="flex gap-1 items-center">
										<CiImageOn
											className="fill-[#2191d8] w-6 h-6 cursor-pointer"
											onClick={() =>
												imgRef.current.click()
											}
										/>
									</div>

									<input
										type="file"
										hidden
										ref={imgRef}
										onChange={handleImgChange}
										accept="image/*"
										multiple
									/>
								</div>
							</div>

							<div className="w-full justify-end col-span-2 items-end flex">
								<button
									onClick={handleSubmit}
									className="bg-neutral-500  w-[120px] text-md hover:text-black rounded-md p-1  mt-12 hover:bg-white transition-all ease-in-out duration-300"
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default ProductLayout;
