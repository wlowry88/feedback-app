function App() {
    const title = 'Blog Post';
    const body = 'whatup yeehaw this my blog ppl';
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 1, text: 'Comment two'},
        {id: 1, text: 'Comment three'},
    ]

    const loading = false;
    const showComments = true;
    if (loading) return <p>Loading...</p>

    return (
      <div className="container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {showComments && (
            <div className='comments'>
            <h3>Comments ({comments.length})</h3>  
            <ul>
                {comments.map( (comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
            </div>)
            }
      </div>
    )
}

export default App;