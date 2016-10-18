import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getGuests } from '../actions/index';
// import GuestCardData from '../data/guestCard';
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
		marginBottom: '6%'
	}
}



class Guests extends Component {
  componentWillMount() {
    this.props.getGuests();
  }

  buildRows(guestList) {
    var newBlock = [];
    var gList = guestList
      if (gList.length > 0) {
        var guestChunk = gList.splice(0,3)
        newBlock.push(guestChunk);
        return this.buildRows(gList);
      } else {
        return newBlock;
      }
    };

  renderPhotoGrid(){

      var newRows = [];
      newRows = this.buildRows(this.props.guests)

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

  render() {
    if(!this.props.guests){
      return <h1 style={{color: 'white'}}>Loading...</h1>
    }
    
    return (
			<div className="container-fluid">
					<GuestSplash />
          {console.log(this.props.guests)}

    			{this.renderPhotoGrid()}
    	</div>
    );
  }
}

function mapStateToProps(state){
  return {guests: state.guestList};
}

export default connect(mapStateToProps, { getGuests })(Guests);


//  }
