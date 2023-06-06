const mongoose = require("mongoose");

const getConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexion exitosa a MongoDB");
    } catch (error) {
        console.log("Error", error)
        throw new Error("Error conectando a MongoDB")
    }
}

module.exports = {
    getConnection
}
