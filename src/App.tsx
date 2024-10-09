import { useState } from 'react';
import './App.css';
import Post from './components/Post';

interface PostType {
  id: string;
  title: string;
  likes: number;
}

function App() {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: '01',
      title: 'Post Title',
      likes: 0,
    },
    {
      id: '02',
      title: 'Post Title 02',
      likes: 0,
    },
  ]);

  const addLike = (id: string) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className='container'>
      {posts.map((post) => (
        <Post
          key={post.id}
          {...post}
          addLike={() => addLike(post.id)}
        />
      ))}
    </div>
  );
}

export default App;