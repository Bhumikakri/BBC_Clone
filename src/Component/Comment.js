import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { auth, database } from "../Firebase/FirebaseSetup";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Comment = (props) => {
  const [comment, setComments] = useState("");
  const [newscomment, setNewsComment] = useState([]);

  const addComment = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentRef = collection(newsDoc, "Comments");
    // auth.currentUser == null && toast.warning("Please login");
    if(auth.currentUser == null){
        toast.warning("Please login"); 
    }else{
        try {
            auth.currentUser && await addDoc(commentRef, {
              comment: comment,
              name: auth.currentUser.displayName,
              profileImg: auth.currentUser.photoURL,
            });
            toast.success("Comment add succesfully")
          } catch (error) {
            console.error(error);
          }
    }
    
  };

  const showComments = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentRef = collection(newsDoc, "Comments");
    try {
      const data = await getDocs(commentRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNewsComment(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showComments();
  }, [newscomment]);

  return (
    <div className=" grid grid-rows-2">
      <div className=" pt-10">
        <label
          for="first_name"
          class="block mb-2 text-lg font-medium text-gray-90"
        >
          Add Comments
        </label>
        <div className=" flex gap-3">
          <input
            onChange={(e) => setComments(e.target.value)}
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comment"
            required
          ></input>
          <button
            onClick={addComment}
            class="text-gray-700 hover:text-white hover:bg-gray-700 border border-gray-700 text-xs font-semibold rounded-md px-4 py-1 leading-normal"
          >
            Add
          </button>
        </div>
      </div>
      <div className=" mt-4 min-h-32 h-auto p-6 w-3/4 rounded-lg bg-red-300">
        <h2 className=" font-bold underline-offset-1 mb-3">*Comments *</h2>

        {newscomment.map((items) => {
          return (
            <>
            <div className=" flex items-center gap-3 mt-2">
                <img className=" rounded-full w-5 h-5" src={items.profileImg} />
                <h3 className=" text-slate-900">{items.name}</h3>
            </div>
              <h4 className=" font-semibold text-red-800">{items.comment}</h4>
            </>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Comment;
