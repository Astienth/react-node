let gameModel = require('../models/game');
let consoleModel = require('../models/console');
let genreModel = require('../models/genre');


let gameController = {
    all: async (req,res) => {
        let found = await gameModel.find().populate("consoles").populate("genre");
        res.json(found);
    },
    create: async (req, res) => {
        try{
            let newGame = new gameModel(req.body);
            newGame.consoles = await Promise.all(req.body.consoles.map(async(item) => {
                return await consoleModel.findOne({name: item.name}).select("_id")
            }));
            newGame.genre = await genreModel.findOne({name: req.body.genre.name}).select('_id');
            let savedGame = await newGame.save();
            res.json(savedGame);
        } catch(e){
            res.json("ERROR");
        }
    }
}

module.exports = gameController;