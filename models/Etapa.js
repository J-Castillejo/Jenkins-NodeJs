const { model, Schema } = require("mongoose");

const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: true,
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

module.exports = model("Etapa", EtapaSchema);
