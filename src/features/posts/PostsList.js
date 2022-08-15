import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    const posts = useSelector(state => state.posts);
    console.log(posts);

    const renderedPosts = posts.map((post) => ( 
        <article className='post-exceprt' key={post.id}>
                <h3>{post.title}</h3>
                <p className='post-content'>{post.content.substring(0,100)}</p> 
                <PostAuthor userId={post.user}/>
                <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
        </article>
    ))

    return (
        <div>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default PostsList;