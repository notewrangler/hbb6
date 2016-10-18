import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import NavPanel from './NavPanel';
import NavBar from './NavBar';
import Contact from './Contact';
import MailingList from './MailingList';
import Footer from './Footer'

const styles = {
  // body: {
  //   background: 'black',
  //   zIndex: -5
  // },
  logo: {
    position: 'fixed',
    top: 7,
    fontFamily: 'Federo',
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#13AFAA'
  },
  footer: {
    // flex: 'none',
    position: 'absolute',
    bottom: 0,
		marginTop: '5%',
		marginBottom: '-50px',
    color: 'white',
    width: '100%',
    height: '13em',
    zIndex: '-1'
  }
}

class App extends Component {
  render() {
    return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
        <div >
          <NavBar />
            <div>
                {this.props.children}
            </div>
          <Footer style={styles.footer}/>
        </div>
		  </MuiThemeProvider>
    );
  }
}

export default App;


// site: {
// style={styles.body}
//   display: 'flex',
//   background: 'black',
//   flexDirection: 'column',
//   height: '100%',
//   zIndex: '-1'
// },
// siteContent: {
//   flex: '1 0 auto',
//   width: '100%',
//   marginBottom: '13em',
//   opacity: '0.9'
// },
// header: {
//   flex: 'none'
// },

// style={styles.site}
// style={styles.header}
// style={styles.siteContent}
