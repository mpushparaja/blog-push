import connectMongo from "@/utils/connectMongo";
import PostModel from "../../models/postModel";

export async function GET(req:any, {params}:any) {
    try {
        await connectMongo();
        const postData = await PostModel.findOne({_id:params.id});
        return Response.json(postData);
    }
    catch (error: any) {
        return Response.json({ message: error.message });
    }
}   