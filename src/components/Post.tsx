import Like from './Like';

function Post({ id, title, likes, addLike }) {
  return (
    <div className='post'>
      <h1>{id}</h1>
      <div>{title}</div>
      <Like likes={likes} addLike={addLike} />
    </div>
  );
}

export default Post;