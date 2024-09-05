import { NEXT_PUBLIC_API_URL } from "@/app/constants";
import Post from "../../components/post"

export async function generateMetadata({params}:any) {
    const id  = params.id;
   const getPost = await fetch(NEXT_PUBLIC_API_URL + '/post/' + id)
    .then((res) => res.json())
    return {
        title: getPost.title
    }
}

export default function Page({ params }: any) {
    return <Post params={params}/>
}