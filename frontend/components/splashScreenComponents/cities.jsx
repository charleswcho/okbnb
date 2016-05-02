var React = require('react');

var Cities = React.createClass({
  render: function () {
    return (
      <div className='cities'>
        <div className='cities-header-1'>Just for the weekend</div>
        <div className='cities-header-2'>Discover new, inspiring people close to home.</div>
        <div className='cities-icons'>
          <div className='city-row-1'>
            <img className='cities-icon' alt="san francisco"
                 src="/assets/san-francisco" width="600" height="300"/>
          </div>
          <div className='city-row-2'>
            <img className='cities-icon' alt="new york"
                 src="/assets/new-york" width="260" height="240"/>
            <img className='cities-icon' alt="chicago"
                 src="/assets/chicago" width="260" height="240"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Cities;
