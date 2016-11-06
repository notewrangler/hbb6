import React from 'react';
import { Component } from 'react';
import GuestArtists from '../data/guests';
import { getArtist } from '../actions/index';
import { connect } from 'react-redux';
const bkgPhotoUrl = "../../img/unsplash/dark-stage-copy.jpg"

const styles = {
	splash: {
		position: 'relative',
		margin: 'auto',
		backgroundImage: 'url('+ bkgPhotoUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		marginTop: 50,
		backgroundPosition: 'top',
		maxHeight: '180em',
		zIndex: '-1'
	},
	photo: {
		minWidth: "70%",
		maxWidth: "95%",
		marginTop: "15%"
	},
	blurb: {
		color: "white",
		marginBottom: "300px"

	},
	ptag: {
		fontSize: "2rem"
	},
	photoCredit: {
		position: 'fixed',
		right: 0,
		top: 60,
		color: '#CCCCCC'
	}
}

 class GuestDetail extends Component {

	 componentWillMount(){
		 this.props.getArtist(this.props.params.id);
	 }

	render() {
		if (!this.props.artist) {
			return <div>loading...</div>
		}

		const artist = this.props.artist;
		return (

				<div style={styles.splash}>
				{document.body.scrollTop = document.documentElement.scrollTop = 0}
				<p style={styles.photoCredit}>Photo Credit: <a href="https://unsplash.com/@hpeurane">Hannu-Pekka Peuranen</a></p>
					<div className="container">
						<div className="row">
							<div className="col-md-5">
			    			<img src={artist.detailPhotoUrl} style={styles.photo}/>
			    		</div>
							<div className="col-md-7" style={styles.blurb}>
									<h1 style={{marginTop: "100px"}}>{artist.name}</h1>
									<h2>{artist.instrument}</h2>
									<h3>{artist.concert}: {artist.date}</h3>
									{artist.content.map(function(paragraph){
										let pKey = artist.content.indexOf(paragraph);
										return(
											<p style={styles.ptag} key={pKey}>{paragraph} </p>
										)
									})}
			    		</div>
						</div>
					</div>
			</div>

		)
	}
}


function mapStateToProps(state) {
	return {artist: state.guests.artist}
}

export default connect(mapStateToProps, {getArtist})(GuestDetail);
