const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    }, 
    cast: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Celebrity',
        required: [true, 'A cast is required']
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;