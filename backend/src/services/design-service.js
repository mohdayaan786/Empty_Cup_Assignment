const designRepository = require('../repository/design-repository');

const createDesign = async (designData) => {
    try {
        const design = await designRepository.createDesign(designData);
        return design;
    } catch (error) {
        throw new Error(`Error creating design: ${error.message}`);
    }
}

const getAllDesigns = async () => {
    try {
        const designs = await designRepository.getAllDesigns();
        return designs;
    } catch (error) {
        throw new Error(`Error fetching designs: ${error.message}`);
    }
}

module.exports = {
    createDesign,
    getAllDesigns
};