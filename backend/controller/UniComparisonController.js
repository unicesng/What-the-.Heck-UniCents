const { db, uniDataTable } = require("../config/db.config.js");

const UniComparisonController = {
    getAllUnis: async(req, res) => {
        try {
            const rows = await db.scan({TableName: uniDataTable}).promise();
            console.log(rows)
            res.status(201).json({
                error: false,
                data: rows.Items,
                message: "Successful"
            });
            
        } catch (error) {
            console.log(error)
            res.status(500).send({
                error: true,
                data: {},
                message: "Error getting list of universities"
            });
        }
    },

    filterUnis: async(req, res) => {
        try {
            const citizen = req.query.citizen;
            const localFees = req.query.localfees;
            const internationalFees = req.query.internationalfees;

            const rows = await db.scan({TableName: uniDataTable}).promise();

            let filteredData = rows.Items;

            if (citizen == 'international') {
                filteredData = filteredData.filter(item => {
                    return item.scholarships.some(scholarship => scholarship.info.citizen && scholarship.info.citizen.international === true);
                });
            }
            else if (citizen == 'local') {
                filteredData = filteredData.filter(item => {
                    return item.scholarships.some(scholarship => scholarship.info.citizen && scholarship.info.citizen.sg === true);
                });
            }

            if (localFees) {
                filteredData = filteredData.filter(item => {
                    return item.computingSgFees <= localFees;
                });
            }
            else if (internationalFees) {
                filteredData = filteredData.filter(item => {
                    return item.computingSgFees <= internationalFees;
                });
            }
            
            res.status(201).json({
                error: false,
                data: filteredData,
                message: "Successful"
            });
            
        } catch (error) {
            console.log(error)
            res.status(500).send({
                error: true,
                data: {},
                message: "Error getting list of universities"
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

module.exports = UniComparisonController;
