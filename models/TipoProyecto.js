const { model, Schema } = require("mongoose");

const TipoProyectoSchema = Schema({
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

module.exports = model("TipoProyecto", TipoProyectoSchema);
