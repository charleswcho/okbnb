var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <div className='footer'>
        <div className='footer-header'>Join Us On</div>
        <div className='footer-icons'>
          <a href="https://www.linkedin.com/in/charles-cho-44396074">
            <img className='footer-icon' alt="linkedin"
                 src="http://res.cloudinary.com/ddodpmqri/image/upload/v1462225559/linkedin_n0quzo.png" width="32" height="32"/>
          </a>
          <a href="https://github.com/charleswcho">
            <img className='footer-icon' alt="github"
                 src="http://res.cloudinary.com/ddodpmqri/image/upload/v1462225559/github_lerkgi.png" width="32" height="32"/>
          </a>
          <a href="https://www.instagram.com/charleswcho/">
            <img className='footer-icon' alt="instagram"
                 src="http://res.cloudinary.com/ddodpmqri/image/upload/v1462225559/instagram_ppxb8f.png" width="32" height="32"/>
          </a>
        </div>
        <div className='footer-copyright'>© OkBnb</div>
      </div>
    );
  }
});

module.exports = Footer;