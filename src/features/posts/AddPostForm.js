import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const onSavePost = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    title,
                    content,
                    userId
                })
            )
            setTitle('')
            setContent('')
        }
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onContentChange = (e) => {
        setContent(e.target.value);
    }

    const onAuthorchange = (e) => setUserId(e.target.value);

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add New Form</h2>
            <form>
                <label htmlFor='postTitle'>Post Title</label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor='postAuthor'>Author</label>
                <select id='postAuthor' value={userId} onChange={onAuthorchange}>
                    <option value=''></option>
                    {usersOptions}
                </select>
                <label htlmFor='postContent'>Content</label>
                <input
                    type='text'
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChange}
                />
                <button type='button' onClick={onSavePost} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;