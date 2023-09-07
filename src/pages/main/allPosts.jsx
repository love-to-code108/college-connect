import { getDocs, collection, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase"; 
import { useEffect, useState } from "react";
import { PostByPeople } from "./post";




export const AllPosts = () => {


    const postsRef = collection(db,"post");
    const [postList , setPostList] = useState(null);



    const getPosts = async () => {


        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc) => ({...doc.data() , id:doc.id})));
    }


    
    useEffect(() => {
        
        getPosts();

    }, [])

    return(
        <div>
            {postList?.map((post) => post.title )};
            {postList?.map((post) => post.userId )};
        </div>
    );
}