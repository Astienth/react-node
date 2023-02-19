const service = require('../service/ApisServices/apisService');

let apisController = {
    apiName: async (req,res) => {
        try {
            const response = await service(req.params);
            res.json(response);
        } catch (error) {
            res.status(404);
            res.json({ message: error.message });
        }
    },
}

module.exports = apisController;