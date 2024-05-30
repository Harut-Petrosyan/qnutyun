import React from 'react';
import { useParams } from 'react-router-dom';
let prod = JSON.parse(localStorage.getItem('prod'))

const PageWithID = () => {
  const { id } = useParams();
  const product = prod.find(e=>e.id === +id)

  return (
    <div>
      <div>
        <img src={prod.image}/>
      </div>
    </div>
  );
};

export default PageWithID;
