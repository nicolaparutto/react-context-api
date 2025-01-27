import axios from "axios";
import { useState, useContext, createContext } from "react";

const PostsDataContext = createContext();

const PostsProvider = ({ children }) => {

   const defaultApiUrl = "http://localhost:3000";

   const [postsData, setPostsData] = useState([]);

   const fetchPosts = () => {
      axios.get(`${defaultApiUrl}/posts`)
         .then(res => {
            setPostsData(res.data)
         })
   }

   return (
      <PostsDataContext.Provider value={{ postsData, fetchPosts }}>
         {children}
      </PostsDataContext.Provider>
   )

}

const usePostsDataContext = () => {
   return useContext(PostsDataContext)
}

export { usePostsDataContext, PostsProvider }