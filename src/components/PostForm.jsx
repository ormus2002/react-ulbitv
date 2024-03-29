import {useState, useRef} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(post);
    console.log(bodyInputRef.current.value);
    const newPost = {
      ...post, id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        placeholder="Name"/>
      <MyInput
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text"
        placeholder="Description"/>
      <MyInput ref={bodyInputRef} type="text" placeholder="Example of using useRef"/>
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;