import { useLocation } from "react-router"

import { UserProfile } from "../components/UserProfile";
import { PostsTable } from "../components/PostsTable";
import { PhotosTable } from "../components/PhotosTable"
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


function HomeScreen() {
    const options = useLocation()
    const {state} = options

    const token = state.token
    const navigate = useNavigate()

    useEffect(()=> {
        if(!token){
            navigate("/login")
        }
    },[])
    return(
        <>
            <h1 style={{textAlign: "center"}}>Fetching de datos</h1>
            <UserProfile token={token}/>
            <PhotosTable token={token}/>
            <PostsTable token={token}/>
        </>
    )
}

export {HomeScreen}