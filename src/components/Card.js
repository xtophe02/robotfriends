import React from 'react';
import 'tachyons';

const Card = (props) => {
  const {name, email, id} = props;
  return (<div className='courier tc washed-red bg-blue dib helvetica br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robot pic' src={`https://robohash.org/${id}?200x200&&set=set3`}/>
    <div>
      <h2>{name}</h2>
      <p className='i'>{email}</p>
    </div>
  </div>);
}

export default Card;
