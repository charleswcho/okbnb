var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <div className='footer'>
        <div className='footer-header'>Join Us On</div>
        <div className='footer-icons'>
          <a href="https://www.linkedin.com/in/charles-cho-44396074">
            <img className='footer-icon' alt="linkedin"
                 src="/assets/linkedin" width="32" height="32"/>
          </a>
          <a href="https://github.com/charleswcho">
            <img className='footer-icon' alt="github"
                 src="/assets/github" width="32" height="32"/>
          </a>
          <a href="https://www.instagram.com/charleswcho/">
            <img className='footer-icon' alt="instagram"
                 src="/assets/instagram" width="32" height="32"/>
          </a>
        </div>
        <div className='footer-copyright'>© OkBnb</div>
      </div>
    );
  }
});

module.exports = Footer;
