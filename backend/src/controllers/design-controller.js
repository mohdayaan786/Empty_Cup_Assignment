const DesignService = require('../services/design-service');

const createDesign = async (req, res) => {
    try {
        const designData = req.body;
        const design = await DesignService.createDesign(designData);
        res.status(201).json(design);
    } catch (error) {
        console.error("Error creating design:", error);
        res.status(500).json({ message: error.message });
    }
}

const getAllDesigns = async (req, res) => {
    try {
        const designs = await DesignService.getAllDesigns();
        res.status(200).json(designs);
    } catch (error) {
        console.error("Error fetching designs:", error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createDesign,
    getAllDesigns
};