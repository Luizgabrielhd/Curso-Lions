import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nome: String,
        email: String,

    },
    {collation: "users"}

);

export default mongoose.model("User", UserSchema);