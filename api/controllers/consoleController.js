let consoleModel = require('../models/console');

let consoleController = {
    all: async (req,res) => {
        let found = await consoleModel.find();
        res.json(found);
    },
    create: async (req, res) => {
        try{
            let newConsole = new consoleModel(req.body);
            let savedConsole = await newConsole.save();
            res.json(savedConsole);
        } catch(e)
        {
            console.log("ERROR");   
            res.json("ERROR");        
        }
    }
}

module.exports = consoleController;