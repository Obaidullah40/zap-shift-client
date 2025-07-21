import React from 'react';

const ServiceCard = ({service}) => {
     const {icon: Icon, title, description} = service;
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border hover:bg-green-300 transition-all duration-300 flex items-center flex-col">
      <div className="text-4xl text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    );
};

export default ServiceCard;