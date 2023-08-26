const { db, userTable } = require("../config/db.config.js");

const LoginRegisterController = {
    get: async(req, res) => {
        try {

            res.status(201).json({
                error: false,
                data: data.Items,
                message: "Successful"
            });
            
        } catch (error) {
            console.log(error)
            res.status(500).send({
                error: true,
                data: {},
                message: "Error in registering user"
            });
        }
    },

    // static async delete(req, res) {
    //     try {
    //         const deletedModel = await MyModel.findByIdAndDelete(req.params.id);
    //         if (!deletedModel) {
    //             res.status(404).json({ error: 'Model not found' });
    //             return;
    //         }
    //         res.json(deletedModel);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }
}

module.exports = LoginRegisterController;
