function Like({ likes, addLike }) {
  return (
    <div>
      <button onClick={addLike}>{likes} 👍</button>
    </div>
  );
}

export default Like;