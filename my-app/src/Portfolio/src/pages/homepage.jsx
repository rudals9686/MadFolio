import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Schools from "../components/homepage/schools";
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import '../cv.css'
import "./styles/homepage.css";
import {Link, useNavigate, useParams,useLocation } from "react-router-dom";
import EditBar from "../components/common/editbar";

const Homepage = () => {
	const [data,setdata]=useState({})
	const {id}=useParams()
	const [icon,seticon]=useState(null)
	const location=useLocation()
	const editable=location.state&&location.state.editable
	const navigate=useNavigate()
	useEffect(() => {
		async function getUserdata(){
			axios({
			  method:'post',
			  url:'/getcvdata',
			  data:{
				'id':id
			  }
			}).then(response=>{
			  if(response.data!="ERROR")
			  {
				setdata(response.data)
				seticon(<i class={(response.data.category=="designer")?"fa-solid fa-palette":"fa-brands fa-github"}></i>)
			  }
			  else{
				alert("You have to create one first!")
				navigate("/")
			  }
			}); 
		  }
		  if(!id)
		  {
			  navigate('/login')
		  }
		  	getUserdata()
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{data&&data.name}'s Portfolio</title>
			</Helmet>

			<div className="page-content">
			<div className="editbar-links"><Link to="/" className='editbar-home'>Main</Link></div>
				<NavBar id={id} editable= {editable} active="home" />
				{editable&&<EditBar id={id}/>}
				<br></br>
				<br></br>
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="cv-title homepage-title">
									{data.name}
								</div>
								<div className="cv-subtitle homepage-subtitle">
									{data.job}
								</div>
								<div className="cv-home-content homepage-subtitle">
									{data.description}
								</div>
								<div className="cv-subtitle homepage-subtitle">
									Contact
								</div>
								<div className="homepage-socials">
								<div
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-building"></i> &nbsp; {data.office}
								</div>
								</div>
								<div className="homepage-socials">
								<div
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-mobile"></i> &nbsp; {data.phone}
								</div>
								</div>
								<div className="homepage-socials">
								<div
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-envelope"></i> &nbsp; {data.email}
								</div>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img //이미지 지정 가능하게
											src={"/"+id+"_profile.png"}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="cv-subtitle homepage-subtitle">
									Link
								</div>
						<div className="homepage-socials">
						<div className="homepage-social-icon">
							{icon}</div>
							<a
								href={data.github}
								target="_blank"
								rel="noreferrer"
								className="homepage-social-icon"
							>
							{data.github}
							</a>
						</div>
						<div className="homepage-after-title">
							<div className="homepage-articles">
							<Schools list={data.schools}/>
							</div>
							<div className="homepage-works">
								<Works list={data.works}/>
							</div>
						</div>

						<div className="page-footer">
							<Footer id={id} editable={editable}/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
