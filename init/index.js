const initData = require("./data");
const mongoose = require("mongoose");
const Listing = require("../models/listing");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    console.log("connected to db");
}

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a978de5118e00d46a9e66aa"
    }));

    await Listing.insertMany(initData.data);

    console.log("data was initialized");
};

async function start() {
    try {
        await main();
        await initDB();
    } catch (err) {
        console.log(err);
    }
}

start();