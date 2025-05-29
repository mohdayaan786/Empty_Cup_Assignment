const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: [56, 'Content is too long']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating must be at most 5']
    },
    description: {
        type: String,
        required: true,
        max: [500, 'Content is too long']
    },
    NoOfProjects: {
        type: Number,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
        validate: {
            validator: v => /^\d{10}$/.test(v),
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    alternativeMobileNumber: {
        type: Number,
        validate: {
            validator: v => /^\d{10}$/.test(v),
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
}, {
    timestamps: true,
});

const Design = mongoose.model('Design', designSchema);
module.exports = Design;