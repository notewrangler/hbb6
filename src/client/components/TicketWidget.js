import React from 'react';
import { Component } from 'react';
import seriesList from '../data/seriesList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
	orderButton: {
		position: 'absolute',
		color: 'white',
		left: 15
	},
	title: {
		margin: 'auto',
		textAlign: 'center',
		background: '#DDD9D9',
		fontSize: '4em',
		fontFamily: 'federo',
		color: 'white',
		marginTop: '7%',
		width: '70%',
		borderRadius: '5px'
	},
	widget: {
		marginLeft: '15%',
		marginTop: '15%',
		textAlign: 'center',
		color: 'white'
	},
	noWidget: {
		margin: 'auto',
		background: '#DDD9D9',
		color: '#5E5858',
		marginTop:'40%',
		textAlign: 'center',
		width: '70%',
		borderRadius: '5px'
	}
}

export default class TicketWidget extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

	handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				onClick={this.handleSubmit}
			/>,
		];

			const bpthref = `http://www.brownpapertickets.com/event/${this.props.bptid}`
			const script1 = document.createElement("script");
			const script2 = document.createElement("script");
			script1.src = `http://www.brownpapertickets.com/eventwidget.js?event=${this.props.bptid}&nodescription=true`;
			script2.src = `http://www.brownpapertickets.com/widget_v651.js?event=${this.props.bptid}`;

			document.body.appendChild(script1);
			document.body.appendChild(script2);

		return (
			<div>
			<FlatButton
				style={styles.orderButton}
				backgroundColor="#DDDDDD"
				hoverColor="#B7E0E5"
				label="Order Tickets"
				onClick={this.handleOpen} />

			<Dialog>
				<div>
					<h1 style={styles.title}>{this.props.title}</h1>
				</div>
				<div>
					{this.props.bptid ?
							<div id="bpt_eventbody" style={styles.widget}>Brown Paper Tickets Ticket Widget Loading...
								<a href={bpthref}>Click Here</a> to visit the Brown Paper Tickets event page.
							</div> : null }
						{this.props.bptid ? null :
							<div style={styles.noWidget}>
									<h2>Tickets are not yet available for this concert</h2>
							</div>
						}
				</div>
			</Dialog>
			</div>
		);
	}
}
