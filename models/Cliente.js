const { model, Schema } = require("mongoose");

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
        required: true,
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = model("Cliente", ClienteSchema);
