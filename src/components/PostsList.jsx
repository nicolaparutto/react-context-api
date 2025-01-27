import axios from "axios"
import { useState, useEffect } from "react"

function PostsList() {
  const defaultApiUrl = "http://localhost:3000"

  const [postsData, setPostsData] = useState(null);

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
        <div className="card">
          <div className="card-image">

          </div>
          <div className="card-text">

          </div>
        </div>
      </div>
    </section>
  )

}

export default PostsList