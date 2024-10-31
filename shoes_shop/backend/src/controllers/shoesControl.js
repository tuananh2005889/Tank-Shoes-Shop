import { v2 as cloudinary } from "cloudinary";
import axios from "axios";

export const addShoes = async (req, res) => {
	try {
		const { ID_Product, Name, Bio, Brand, Price, Quantity, Size, Color } =
			req.body;

		const { Image } = req.body;
		if (Image) {
			const promise = Image.map((image) =>
				cloudinary.uploader.upload(img)
			);
			const result = await Promise.all(promise);

			req.body.Image = result.map((result) => result.secure_url);
		}
		const newShoes = new ShoesModel(req.body);

		const checkShoes = await ShoesModel.findOne({
			ID_Product,
			Name,
			Brand,
		});
		if (checkShoes) {
			return res.status(400).json({ error: "Shoes already exists" });
		}

		await newShoes.save();

		res.status(200).json(newShoes);
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};
