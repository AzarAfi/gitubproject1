import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditPost = ({ editname, seteditname, editcomment, seteditcomment, handleEdit, posts }) => {
  const { id } = useParams();
  const postid = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (postid) {
      seteditname(postid.name);
      seteditcomment(postid.comment);
    }
  }, [postid, seteditname, seteditcomment]);

  if (!postid) {
    return <div>Post not found!</div>; // Handle case when post is not found
  }

  return (
    <main className="flex justify-center items-center w-screen h-screen bg-gray-700">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-1/3 flex-col border-4 border-black p-10 bg-green-600 h-1/2 justify-around"
      >
        <h1 className="text-center text-3xl bg-white">Edit Post</h1>

        
          <label htmlFor="name" className="w-1/2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            value={editname}
            onChange={(e) => seteditname(e.target.value)}
            placeholder="Enter your name"
            className="border-4 p-2 border-black w-full"
          />
        

        
          <label htmlFor="comment" className="w-1/2">
            Your Comment:
          </label>
          <textarea
            id="comment"
            required
            value={editcomment}
            onChange={(e) => seteditcomment(e.target.value)}
            placeholder="Enter your comment"
            className="border-4 p-2 border-black w-full mb-6"
          ></textarea>
        

        <button
          type="submit"
          onClick={() => handleEdit(postid.id)}
          className="bg-green-700 text-white px-4 py-2 hover:bg-gray-700"
        >
          Update Post
        </button>
      </form>
    </main>
  );
};

export default EditPost;
