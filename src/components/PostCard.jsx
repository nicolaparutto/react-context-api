function PostCard(props) {
   const post = props.postData
   return (
      <div className="card">
         <div className="card-content">
            <div className="card-image">
               <img src={post.image} alt="post-image" />
            </div>
            <div className="card-text">
               <h2>{post.title}</h2>
               <p>{post.content}</p>
            </div>
         </div>
      </div>
   )
}

export default PostCard