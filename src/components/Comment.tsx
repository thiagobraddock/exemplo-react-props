
function Comment({addNewPost}) {
  return (
    <>
    <div>Comment</div>
    <button onClick={ ()=> addNewPost('03', 'Novo Post 03')}>ADICIONAR</button>
    </>
  )
}

export default Comment