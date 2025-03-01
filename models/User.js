const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});

UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            // Generate a salt and hash the password
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;