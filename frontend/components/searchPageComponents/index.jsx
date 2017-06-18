import React from 'react';

import IndexItem from './indexItem';

export default class Index extends React.Component {
  render() {
    const { profiles, renderMap } = this.props;

    const profileKeys = Object.keys(profiles);

    if (renderMap) {
      return (
        <div className='profiles-index'>
          {
            profileKeys.map(id => <IndexItem key={id} profile={profiles[id]} />)
          }
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
