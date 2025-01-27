import PostsPage from "./components/PostsPage"
import { PostsProvider } from "./context/PostsDataContext"
function App() {

  return (
    <>
      <PostsProvider>
        <PostsPage />
      </PostsProvider>
    </>
  )

}

export default App