import React from 'react'

const Card = ({ image, title, description, rating }) => (
    <div className="bg-white p-4 rounded shadow-lg w-64 mb-4">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex items-center">
        <span className="text-green mr-2">{rating}</span>
        <svg
          className="w-4 h-4 fill-current text-green"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2 10.77l7.293 6.47a1 1 0 0 0 1.414 0L18 10.77V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5.77z" />
        </svg>
      </div>
    </div>
    
  );

export default Card;