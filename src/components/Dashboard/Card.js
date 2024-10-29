import React from 'react';

function Card({ title, total }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h1>{total}</h1>
    </div>
  );
}

export default Card;
