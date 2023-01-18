let consoleModel = require('../models/console');

let consoleController = {
    all: async (req,res) => {
        let found = await consoleModel.find();
        res.json(found);
    },
    create: async (req, res) => {
        let newConsole = new consoleModel(req.body);
        let savedConsole = await newConsole.save();
        res.json(savedConsole);
    }
}

module.exports = consoleController;