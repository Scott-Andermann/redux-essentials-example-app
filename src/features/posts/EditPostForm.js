import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { postUpdated } from './postsSlice';
import { selectPostById } from './postsSlice';

const EditPostForm = ({match}) => {
    const {postId} = match.params;

    const post = useSelector(state => selectPostById(state, postId))

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    const history = useHistory();



    const savePost = () => {
        if (title && content) {
            dispatch(
                postUpdated({
                    id: postId,
                    title,
                    content
                }
                )
            )
            history.push(`/posts/${postId}`)
        }
    }

    const onTitleChange = (e) => setTitle(e.target.value);

    const onContentChange = (e) => setContent(e.target.value);

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title</label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    placeholder='Whats on your mind?'
                    value={title}
                    onChange={onTitleChange}
                />
                <label hmtlFor='postContent'>Post Content</label>
                <textarea
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChange}
                />
                <button type='button' onClick={savePost}>Save Post</button>
            </form>
        </section>
    )
}

export default EditPostForm;