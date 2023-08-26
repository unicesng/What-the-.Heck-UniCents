const LoginRegisterController = {
    donorRegister: async(req, res) => {
        try {
            // const newModel = await MyModel.create(req.body);
            res.status(201).json({
                error: false,
                data: {},
                message: "Successful"
            });
            
        } catch (error) {
            res.status(500).send({
                error: true,
                data: {},
                message: "Error in registering user"
            });
        }
    },

    donorLogin: async (req, res) => {
        try {
            res.status(201).json({});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    studentRegister: async (req, res) => {
        try {
            const model = await MyModel.findById(req.params.id);
            if (!model) {
                res.status(404).json({ error: 'Model not found' });
                return;
            }
            res.json(model);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    studentLogin: async (req, res) => {
        try {
            const updatedModel = await MyModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedModel) {
                res.status(404).json({ error: 'Model not found' });
                return;
            }
            res.json(updatedModel);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

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
