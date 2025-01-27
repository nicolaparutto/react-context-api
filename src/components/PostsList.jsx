import axios from "axios"
import { useState, useEffect } from "react"
import PostCard from "./PostCard";

function PostsList() {
  const defaultApiUrl = "http://localhost:3000"

  const [postsData, setPostsData] = useState([]);

  const fetchPosts = () => {
    axios.get(`${defaultApiUrl}/posts`)
      .then(res => {
        setPostsData(res.data)
      })
  }

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