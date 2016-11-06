import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getGuests } from '../actions/index';
import GuestSplash from './GuestSplash';
import {GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
// import GuestPhotoGrid from './GuestPhotoGrid';

const styles = {
	gridTile: {
		margin: 0,
		padding: 0,
		width: '100%',
		height: 500
	},
	gridBody: {
		marginBottom: '6%',
		zIndex: 4
	},
	gridLi: {
		fontSize: '1.2em',
		color: 'white'
	}
}


class Guests extends Component {
	constructor(props){
		super(props)

		this.renderGrid = this.renderGrid.bind(this)
		// this.buildRows = this.buildRows.bind(this)
	}

	componentWillMount() {
		this.props.getGuests();
	}




  render() {
    if(!this.props.guests){
      return <h1 style={{color: 'white'}}>Loading...</h1>
    }
		console.log(this.props.guests);

    return (
			<div className="container-fluid">
					<GuestSplash />
					<div className="container" style={styles.gridBody}>
						{this.renderGrid(this.props.guests)}
		      </div>
			</div>
		)
  }
	renderGrid(blocks) {

		return (
			<div>
			{blocks.map(function(blockRow){
				return <div className="row" key={blockRow[0].id}>
						{blockRow.map(function(tile){
							return (
								<div className="col-md-4" key={tile.id}>
								<Link to={`guest-detail/${tile.id}`}>
								<GridTile
									style={styles.gridTile}
									title={tile.name}
									subtitle={<span>{tile.date}--{tile.concert}</span>}
									actionIcon={<RaisedButton label="Bio" primary={true}></RaisedButton>}
								>
									<img src={tile.photoUrl} />
								</GridTile>
								</Link>
								</div>
							)
							})}
						</div>
				})}
			</div>
		)
	}
}






function mapStateToProps(state){
  return { guests: state.guests.all };
}



export default connect(mapStateToProps, {getGuests})(Guests)
