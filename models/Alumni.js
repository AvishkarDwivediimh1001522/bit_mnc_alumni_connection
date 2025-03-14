//import { File } from "lucide-react";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const AlumniSchema = new mongoose.Schema({
    name: { type: String, required: true },
    organisation: { type: String, required: true },
    job_profile: { type: String, required: true },
    job_location: { type: String, required: true },
    //image: { type: File },  // this field is optional in form
    batch: { type: String, required: true },
    passout_year: { type: String, required: true },
    phone_number: { type: String }, // this field is optional in form
    email: { type: String, required: true , unique:true },
    linkedin_acc: { type: String, required: true },
    twitter_acc: { type: String }, // this field is optional in form
    home_state: { type: String, required: true }

});


// prevent model recompilation in development

export default mongoose.models.Alumni || mongoose.model('Alumni', AlumniSchema);