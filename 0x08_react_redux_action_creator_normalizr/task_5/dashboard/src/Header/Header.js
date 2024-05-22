import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt='logo' />
          <h1 className={css(styles.h1)}>School Dashboard</h1>
        </header>
        <hr className={css(styles.hr)}></hr>
        {user.isLoggedIn && (
          <section id='logoutSection'>
            Welcome {user.email} (<a href='#' onClick={logOut}>logout</a>)
          </section>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    width: '50%'
  },

  appLogo: {
      width: '250px'
  },

  h1: {
    color: 'red',
    verticalAlign: 'middle',
    paddingTop: '4rem',
    paddingBottom: '4rem',
    width: '50%'
  },

  hr: {
    height: '3px',
    backgroundColor: 'red'
  }
});

export default Header;

// function Header() {
//   return (
//     <>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <h1>School Dashboard</h1>
//       </header>
//       <hr></hr>
//     </>
//   );
// }