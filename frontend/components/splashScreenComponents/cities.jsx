import React from 'react';

const Cities = () => (
  <div className='cities'>
    <div className='cities-header-1'>Just for the weekend</div>
    <div className='cities-header-2'>Discover new, inspiring people close to home.</div>
    <div className='cities-icons'>
      <div className='city-row-1'>
        <a href='#/search/san-francisco' className='row-1-icon' alt="san francisco" id='cr1i1'>
          <div className='icon-title-w'>San Francisco</div>
        </a>
      </div>
      <div className='city-row-2'>
        <a href='#/search/new-york' className='row-2-icon' alt="new york" id='cr2i1'>
          <div className='icon-title'>New York</div>
        </a>

        <a href='#/search/chicago' className='row-2-icon' alt="chicago" id='cr2i2'>
          <div className='icon-title'>Chicago</div>
        </a>
      </div>
    </div>
  </div>
);

export default Cities;
