import React from 'react'
import style from './AddPost.module.scss'
import MyPosts from './MyPosts/MyPosts';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm'

const AddPost = React.memo(({ posts, addPost }) => {

	let postsElement = posts.map(p => <MyPosts img={p.img} key={p.id} message={p.message} />)

	let addNewPost = (values) => {
		addPost(values.newPostText)
	}

	return (
		<div className={style.content__addpost}>
			<h2 className='title'>My posts</h2>
			<AddNewPostForm onSubmit={addNewPost} />
			<div className={style.posts}>
				{postsElement}
			</div>
		</div>

	)
})

export default AddPost