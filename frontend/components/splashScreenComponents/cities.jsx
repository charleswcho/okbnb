var React = require('react');

var Cities = React.createClass({
  render: function () {
    return (
      <div className='cities'>
        <div className='cities-header-1'>Just for the weekend</div>
        <div className='cities-header-2'>Discover new, inspiring people close to home.</div>
        <div className='cities-icons'>
          <div className='city-row-1'>
            <img className='row-1-icon' alt="san francisco"
                 src="/assets/san-francisco" width="700" height="350"/>
          </div>
          <div className='city-row-2'>
            <img className='row-2-icon' alt="new york"
                 src="/assets/new-york" width="330" height="300"/>
            <img className='row-2-icon' alt="chicago"
                 src="/assets/chicago" width="330" height="300"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Cities;
