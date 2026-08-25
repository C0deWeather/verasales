iport mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            minLength: 8,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user"
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;

