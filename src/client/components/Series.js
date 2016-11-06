import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getSeries } from '../actions/index';
import SeriesSplash from './SeriesSplash';
import SeriesCard from './SeriesCard';
import Map from './Map';

const styles = {
  cardStack: {
    marginBottom: '32em'
  }
}

class Series extends Component {

  componentWillMount(){
    this.props.getSeries();
  }

  render() {
    if(!this.props.series){
      return <h1 style={{color: 'white'}}>Loading...</h1>
    }
    return (
      <div className="container-fluid">
      {document.body.scrollTop = document.documentElement.scrollTop = 0}
				<SeriesSplash />
        {console.log(this.props.series)}
        <div className="container"
             style={styles.cardStack}>
          { this.props.series.map(function(concert){
            return (
              <SeriesCard
              key={concert.id}
              id={concert.id}
              title={concert.title}
              subtitle={concert.subtitle}
              date1={concert.date1}
              date2={concert.date2}
              time={concert.time}
              picUrl={concert.picUrl}
              blurb={concert.blurb}
              guestTag={concert.guestTag}
              guests={concert.guests}
              bptid={concert.bptid}
            />
            )
          })}
        </div>
        <Map />
      </div>

    );
  }
}

function mapStateToProps(state){
  return { series: state.series.all }
}

export default connect(mapStateToProps, { getSeries })(Series);
