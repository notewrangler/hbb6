import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import {GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
	gridTile: {
		margin: 0,
		padding: 0,
		width: '100%',
		height: 500
	},
	gridBody: {
		marginBottom: '6%'
	}
}

export default class GuestPhotoGrid extends Component {

	makeRows(guestList) {
		var newBlock = [];
		var gList = guestList
			if (gList.length > 0) {
				var guestChunk = gList.splice(0,3)
				newBlock.push(guestChunk);
				return this.makeRows(gList);
			} else {
				return newBlock;
			}
		};

 	render() {
	//  let {id, name, date, concert, photoUrl} = this.props

		var newRows = [];
		newRows = this.makeRows(this.props.guests);


		return (
			<div className="container" style={styles.gridBody}>
				{newRows.map(function(blockRow){
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
