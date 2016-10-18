import React from 'react';
import { Component } from 'react';
import Leader from '../data/kahuna';

const bkgPhotoUrl = "../../img/unsplash/concert-hall-2.jpg"

const styles = {
	splash: {
		position: 'fixed',
		margin: 'auto',
		backgroundImage: 'url('+ bkgPhotoUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		marginTop: '-120px',
		top: 0,
		opacity: 0.3,
		backgroundPosition: 'top',
		height: '70em'
		// zIndex: '-1'
	},
	photo: {
		minWidth: "70%",
		maxWidth: "95%",
		borderRadius: "5%"
	},
	blurb: {
		color: "white",
		marginBottom: "130px"

	},
	paragraph: {
		marginTop: '25px',
		fontSize: "1.8rem"
	},
	photoCredit: {
		position: 'fixed',
		opacity: 1,
		right: 8,
		top: 60,
		color: '#CCCCCC'
	}
}

 class Director extends Component {

	render() {
			return (
				<div className="container-fluid">
				{/* {document.body.scrollTop = document.documentElement.scrollTop = 0} */}
					<div style={styles.splash}>
     			</div>
					<p style={styles.photoCredit}>Photo Credit: <a href="https://unsplash.com/@rgrzybowski">Radek Grzybowski</a></p>
					<div className="container" style={{marginTop: '15%'}}>
						<div className="row">
							<div className="col-md-5">
			    			<img src={Leader.photoUrl} alt="Scott Lutterman" style={styles.photo}/>
			    		</div>
							<div className="col-md-7" style={styles.blurb}>
									<h1 style={{marginTop: "20px"}}>Artistic Director</h1>
									<h2>{Leader.name}</h2>
									<h3>{Leader.header}</h3>
									<p style={styles.paragraph}>{Leader.content} </p>
			    		</div>
						</div>
					</div>
			</div>

		)
	}
}

export default Director;
