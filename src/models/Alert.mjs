import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
     city:String,
    alertType:String,
    timestamp:{type : Date, default: Date.now}
})

export default mongoose.model("Alert",alertSchema);