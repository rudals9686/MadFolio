import React from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import "./styles/editbar.css";

const EditBar = (props) => {
    const {id}=props
    const navigate=useNavigate()
    const confirmdelete=()=>{
        if(window.confirm("정말로 삭제하시겠습니까?"))
        {
            axios({
                method: 'post',
                url: '/deletecv',
                data: {
                  'id': id
                }
              }).then(response => {
                if (response.data.result === "SUCCESS") {
                    alert("삭제 완료")
                    navigate("/")
                }
              });
        }
        
    }

    return (
        <React.Fragment>
		<div className='editbar-links'>
        <Link to="/createCV" state={{modify:true}}className='editbar-edit'>Edit</Link>
        <Link to={window.location.pathname} onClick={confirmdelete} className='editbar-delete'>Delete</Link>
        </div>
        </React.Fragment>
	);
};

export default EditBar;