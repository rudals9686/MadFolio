import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = (props) => {
	const { id,editable} = props;

	return (

		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to={"/viewcv/"+id} state={{editable:editable}}>Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={"/viewcv/"+id+"/about"} state={{editable:editable}}>About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={"/viewcv/"+id+"/projects"} state={{editable:editable}}>Projects</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Tharindu.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
