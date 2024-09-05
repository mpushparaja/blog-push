import connectMongo from "@/utils/connectMongo";
import EnquiryModel from "../models/enquiry";

export async function POST(req: any) {
    try {
            const { name, email, message } = await req.json();
            const enquiry = { name, email, message };
            await EnquiryModel.create(enquiry);
            return Response.json({ message: 'Enquiry has been sent' });
    } catch (error: any) {
        return Response.json({ message: error._message });
    }
}