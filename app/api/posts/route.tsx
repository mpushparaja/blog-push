import connectMongo from "@/utils/connectMongo";
import PostModel from "../models/postModel";

export async function GET(req:any) {
    const query = req.nextUrl.searchParams.get('q');
    try {
        let postData = [];
        await connectMongo();
        if(query){
        postData = await PostModel.find({
            $or:[
                {title:new RegExp(query,'i') },
                {description:new RegExp(query,'i') }
            ]
        });
        }
        else{
        postData = await PostModel.find({});
            
        }
        return Response.json(postData);
    }
    catch (error: any) {
        return Response.json({ message: error.message });
    }
}   