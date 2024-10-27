import connectDB from "./db/connectDB.js";
import dotenv from 'dotenv';
import express from 'express';
import shoesmodel from "./model/ShoesModel.js";

dotenv.config();

const app = express();
const port = 5000;

// Kết nối đến cơ sở dữ liệu
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Định nghĩa route
app.get('/', async (req, res) => {
    try {
        let shoes = await shoesmodel.find();
        console.log(shoes); 
        res.json(shoes); 
    } catch (error) {
        console.error(error); 
        res.status(500).send('Server error'); 
    }
});
