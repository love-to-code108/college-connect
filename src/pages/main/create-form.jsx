import * as yup from "yup";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc , collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    const schema = yup.object().shape({
        title:yup.string().required("you must add a title"),
        description:yup.string().required("you must add a Description"),
    });


    const { register , handleSubmit , formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    })


    
        const postsRef = collection(db,"post")

    // CREATE POST FUNCTION 
    const onCreatePost = async (data) => {
        await addDoc(postsRef , {
            title: data.title,
            description: data.description,
            username:user?.displayName,
            userId:user?.uid,
        });

        

        navigate("/");
        
    }




    return(
        <form action="" onSubmit={handleSubmit(onCreatePost)}>
            <input type="text" placeholder="Title" {...register("title")}/>
            <p>{errors.title?.message}</p>
            <br />
            <textarea placeholder="Description" {...register("description")}/>
            <p>{errors.description?.message}</p>
            <input type="submit" />
        </form>

        
    );
}