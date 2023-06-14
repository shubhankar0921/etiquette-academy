import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../../config'
import "../tutor/tutor_style.css"
import { useNavigate } from "react-router-dom";



export default function Request_recieved() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"learn_request")
    let authenticated = localStorage.getItem("Authenticated")
    let email = localStorage.getItem("email")
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="find">
            {list.map((post) =>{
                if (post.owner_email == email) {
                    
                return <div className="post" id="my_post">
                    <h2>{post.name}</h2>
                    <p>Course : {post.course} </p>
                    <p>Money Willing To Pay : {post.money}</p>
                    <a href={`mailto:${post.email}`} target="_blank" className="reply">REPLY BACK</a>
                
                </div>
                }
            })}
            
        </div>
    )
}