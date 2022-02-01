import React from 'react';



const Render = ({ scooters }) => (
  <>
    <div  style={{ display: 'flex', justifyContent: "space-around" }}>
      {scooters.map(({ name, price, charge, src }) => (
      
      <div className="item" key={name}>
        <div><img src={src} alt="Самокат" style={{width: "150px"}}/></div>
        <h3>{name}</h3>
        Аренда (час): <i>{price}</i>
        <div>Зарядка: {charge}</div>
      </div>
    ))}
    </div>
  </>
);

export default Render;
