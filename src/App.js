import { BrowserRouter, Routes, Route}  from 'react-router-dom';

import Header from './Header';
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Post from './pages/Post';


function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/new-post" element={<NewPost />}></Route>
              <Route path="/posts/:postId" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;