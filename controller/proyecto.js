const Proyecto = require("../models/Proyecto");
const Cliente = require('../models/Cliente');
const TipoProyecto = require('../models/TipoProyecto');
const Universidad = require('../models/Universidad');
const Etapa = require('../models/Etapa');


const proyectoController = {
    // metodo de busqueda general
    find: async (req, res) => {

        try {
            console.log('PETICIÓN...');
            const proyecto = await Proyecto.find().
                populate([
                    { path: 'cliente', select: 'nombre email' },
                    { path: 'tipoProyecto', select: 'nombre' },
                    { path: 'universidad', select: 'nombre telefono' },
                    { path: 'etapa', select: 'nombre' }
                ]);

            return res.status(200).json(proyecto);

        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    // metodo de busqueda por ID
    findById: async (req, res) => {

        try {
            console.log("Petición...")
            const proyecto = await Proyecto.findById(req.params.id).
                populate([
                    { path: 'cliente', select: 'nombre email' },
                    { path: 'tipoProyecto', select: 'nombre' },
                    { path: 'universidad', select: 'nombre telefono' },
                    { path: 'etapa', select: 'nombre' }
                ]);
                
            return res.status(200).json(proyecto);

        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    
}

module.exports = proyectoController;
