import { useEffect } from "react";
import PostCard from "./PostCard";
import { usePostsDataContext } from "../context/PostsDataContext";

function PostsList() {

  const { postsData, fetchPosts } = usePostsDataContext();

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section className="container">
      <div className="cards-container">
        {postsData.map(post => (
          <PostCard key={post.id} postData={post} />
        ))}
      </div>
    </section>
  )

}

export default PostsList