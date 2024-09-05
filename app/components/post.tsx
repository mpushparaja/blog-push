"use client"
import { useEffect, useState } from "react";
import { NEXT_PUBLIC_API_URL } from "../constants";

export default function Post({ params }: any) {
    const id = params.id;
    const [post, setPost]: any = useState(null);
    useEffect(() => {
        fetch(NEXT_PUBLIC_API_URL + '/post/' + id)
            .then((res) => res.json())
            .then(res => setPost(res));
    }, [])
    return <>{post &&
        <main className="container mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-500">Published on {post.created_at_formatted}</p>
            <img width={300} height={200} src={post.image} alt="Post Image" className="my-4" />
            <p>{post.description}</p>
        </main>}
    </>
}