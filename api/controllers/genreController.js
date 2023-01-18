let genreModel = require('../models/genre');

let genreController = {
    all: async (req,res) => {
        let found = await genreModel.find();
        res.json(found);
    },
    create: async (req, res) => {
        let newGenre = new genreModel(req.body);
        let savedGenre = await newGenre.save();
        res.json(savedGenre);
    }
}

module.exports = genreController;