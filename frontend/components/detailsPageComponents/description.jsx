var React = require('react');

var Accounting = require('accounting');

module.exports = React.createClass({

  render: function () {
    var profile = this.props.profile;
    var Edit, Delete;
    if (this.props.showEditDelete) {
      Edit = <img className='profile-button' onClick={this.props.editProfile} src='http://res.cloudinary.com/ddodpmqri/image/upload/v1468451999/edit_filled_mc8h3d.png' alt='edit profile' height='20' width='20'/>
      Delete = <img className='profile-button' onClick={this.props.deleteProfile} src='http://res.cloudinary.com/ddodpmqri/image/upload/v1468452002/trash_filled_tnuxo3.png' alt='delete profile' height='20' width='20'/>
    }

    return (
      <div className='detail-description'>
        <div className='description-heading'>My self summary
          {Edit}
          {Delete}
          <p className='description-body'>{profile.description}</p>
        </div>
        <br/>
        <div className='description-heading'>Preferences
          <div className='description-container'>
            <img className='description-item-pic' src='http://res.cloudinary.com/ddodpmqri/image/upload/v1462388730/ok_hho7jx.png' alt='search-status' height='20' width='20'/>
            <div className='description-item'>{profile.search_status}</div>
            <img className='description-item-pic' src='http://res.cloudinary.com/ddodpmqri/image/upload/v1462388796/smoking_eccnkg.png' alt='smoker' height='20' width='20'/>
            <div className='description-item'>{profile.smoker ? "Yes"  : "No"}</div>
            <img className='description-item-pic' src='http://res.cloudinary.com/ddodpmqri/image/upload/v1462388816/restaurant_cag3xr.png' alt='diet' height='20' width='20'/>
            <div className='description-item'>{profile.diet}</div>
            <img className='description-item-pic' src='http://res.cloudinary.com/ddodpmqri/image/upload/v1462388751/cat_footprint_ondvsd.png' alt='pet' height='20' width='20'/>
            <div className='description-item'>{profile.pet}</div>
          </div>
        </div>
        <div className='description-heading'>Budget
          <div className='description-container'>
            <img className='description-item-pic' src='http://res.cloudinary.com/ddodpmqri/image/upload/v1462388771/money_box_eywt0a.png' alt='budget' height='20' width='20'/>
            <div className='description-item'>{Accounting.formatMoney(profile.budget)}</div>
          </div>
        </div>
      </div>
    );
  }
});
