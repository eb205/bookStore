import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
        <div style={{color:"white"}} className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright: Made by EB inc</div>
      </nav>
    );
  }
}

export default AppFooter;
