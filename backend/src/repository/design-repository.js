const Design = require('../models/design');

const createDesign = async (designData) => {
    try {
        const design = new Design(designData);
        await design.save();
        return design;
    } catch (error) {
        throw new Error(`Error creating design: ${error.message}`);
    }
}

const getAllDesigns = async () => {
    try {
        const designs = await Design.find();
        return designs;
    } catch (error) {
        throw new Error(`Error fetching designs: ${error.message}`);
    }
}

module.exports = {
    createDesign,
    getAllDesigns
};