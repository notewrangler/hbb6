import React from 'react';
import { Component } from 'react';
// import seriesList from '../data/seriesList';
import { connect } from 'react-redux';
import { getNextConcert } from '../actions/index';

import Splash from './Splash';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
// import NextConcert from './NextConcert';

var today = new Date;



// const nextGig = seriesList.reduce(function(a,b){
//   var next = new Date(a.nextDay)
//   if (Date.parse(a.nextDay) >= Date.parse(today)) {
//     return a
//   } else {
//     return b
//   }
// })

const styles = {
  titleBlock: {
    fontFamily: 'Federo',
    // marginLeft: '54%',
    marginBottom: '10%'
  },
  title: {
    paddingTop: '3em',
    paddingBottom: '0em',
    fontSize: '6em',
    fontWeight: 'bold',
    color: '#13AFAA'
    // color: '#725F5F'
  },
  subtitle: {
    // marginLeft: '1em',
    marginTop: '0em',
    paddingTop: '0em',
    letterSpacing: '1px',
    fontSize: '5em',
    fontWeight: 'bold',
    color: '#13AFAA'
    // color: '#725F5F'
  },
  slogan: {
    fontSize: '2em',
    marginLeft: '2em',
    fontWeight: 'bold',
    // paddingTop: '0.5em',
    color: '#33A1FF'
    // color: "#169692"
  },
  next: {
    marginBottom: '50px'
  },
  panel: {
    background: '#F7FFFC',
  	margin: 'auto',
  	backgroundSize: 'cover',
  	marginTop: '10%',
    marginBottom: '6%',
  	height: '120em',
  	borderRadius: '10px',
    fontFamily: 'Federo'
  },
  content: {
    width: '80%',
  	margin: 'auto',
  	paddingTop: 15,
    paddingBottom: 20,
  	fontFamily: 'Arial'
  },

  posterStyle: {
    margin: 'auto',
    width: '100%'
  },
  buttonLabel: {
		fontSize: '1.8em',
		fontWeight: 'bold'
	},
  buttonStyle: {
    margin: 'auto',
    textAlign: 'center'
  },
  oldNatLogo: {
    width: '300px'
  }

}


const TitleBlock = () => (
  <div className="container-fluid">
    <div style={styles.titleBlock}>
      <div className='row'>
        <div className='col-md-3 col-md-offset-6'>
          <h1 style={styles.title}>Heartland</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 col-md-offset-7'>
          <h3 style={styles.subtitle}>Big Band</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-md-offset-6'>
          <h4 style={styles.slogan}>Indiana's Premier Big Band Concert Experience</h4>
        </div>
      </div>
    </div>
  </div>
);





class Home extends Component {
  componentWillMount(){
    this.props.getNextConcert();
  };

  renderNextConcert() {
    if (!this.props.nextC){
      return <h1 style={{color: 'white'}}>Loading...</h1>
    }
    // console.log(this.props.nextC);
    let concertUrl = `concert-detail/${this.props.nextC.id}`
    return (
			<div style={styles.panel} className="container">
				<div style={styles.content} className="row">
						<h3>Our Next Concert...</h3>

            <h1>{this.props.nextC.title}</h1>
            <div>
            <Link to={concertUrl}>
              <img src={this.props.nextC.posterUrl} style={styles.posterStyle}/>
            </Link>
						</div>
            <Link to={concertUrl} style={styles.buttonStyle}>
              <RaisedButton
              label="Order Tickets"
              labelStyle={styles.buttonLabel} />
            </Link>
        </div>
			</div>
    );
  }


  render() {
    // if(!this.props.nextConcert){
    //   return (<div>Loading...</div>)
    // }
      return (
        <div>
            <Splash />
            <TitleBlock />
            <div>
              {this.renderNextConcert()}
            </div>

        </div>
      );
    // }
  }
}

function mapStateToProps(state) {
  return { nextC: state.nextC[0] };
}

export default connect(mapStateToProps, { getNextConcert })(Home);

// nextC={nextGig}
