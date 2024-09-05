"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NEXT_PUBLIC_API_URL } from "./constants";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const inputRef: any = useRef();
  const [search, setSearch] = useState(false);

  //get posts
  useEffect(() => {
    fetch(NEXT_PUBLIC_API_URL + '/posts')
      .then((res) => res.json())
      .then(res => setPosts(res));
  }, [])

  //search Post
  const searchPost = ((e: any) => {
    if (e.type = "keydown" && e.key !== 'Enter') {
      return;
    }
    setSearch(true);
    fetch(NEXT_PUBLIC_API_URL + '/posts?q=' + inputRef.current.value)
      .then((res) => res.json())
      .then(res => setPosts(res))
      .finally(() => setSearch(false))
  })
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Here you can see latest article</p>
      </main>
      <div className="flex justify-end px-4 py-6">
        <input ref={inputRef} onKeyDown={searchPost} type="text" className="px-4 py-2 border border-gray-300 rounded-md text-black" placeholder="Search..." />
        <button onClick={searchPost} className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">{search ? "..." : "Search"}</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <Link href={"/post/" + post._id}>
            <div className="border border-gray-200 p-4">
              <img className="w-full h-48 object-cover mb-4" src={post.image} alt="Post Image" />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.short_description}</p>
            </div>
          </Link>
        )
        )}
        {!(posts?.length > 0) && inputRef?.current?.value && <p className="text-center text-blue-700">No post available for this query <b>{inputRef.current.value}</b></p>}
        {/* <!-- Add more posts here --> */}
      </div>
    </>
  );
}
