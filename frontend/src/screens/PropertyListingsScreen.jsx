import React from "react";
import Badge from "../components/Badge";
import { FaBed, FaBath } from "react-icons/fa";
import { BsHouse } from "react-icons/bs";
import propertyListings from "../data/propertyListingsData";

const PropertyCard = ({ property }) => {
  return (
    <div className="relative rounded-lg shadow-sm p-4 bg-white">
      <img src={property.image} alt={property.name} className="w-55 h-50 object-cover rounded-md" />
      {property.featured && (
        <Badge className="absolute top-6 left-6 bg-purple-500 text-white">
          FEATURED
        </Badge>
      )}
      {property.sponsored && (
        <Badge className="absolute top-6 left-6 bg-red-500 text-white">
          Sponsored
        </Badge>
      )}
      <div className="mt-4 flex flex-col gap-2 items-start">
      <p className="text-xl font-bold mt-2">${property.price} / mo</p>
        <h2 className="text-lg font-semibold">{property.name}</h2>
        <p className="text-gray-500">{property.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
          <span className="flex items-center gap-1 mr-4">
            <FaBed /> {property.numBeds} bed
          </span>
          <span className="flex items-center gap-1 mr-4">
            <FaBath /> {property.numBaths} bath
          </span>
          <span className="flex items-center gap-1">
            <BsHouse /> {property.numSqft} sqft
          </span>
        </div>
      </div>
    </div>
  );
};

const PropertyListingsScreen = () => {
  return (
    <div className="container mx-auto px-4 justify-items-start">
  <h2 className="text-2xl font-bold mt-18 mb-6">Discover popular properties</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start">
    {propertyListings.map((property, index) => (
      <PropertyCard key={index} property={property} />
    ))}
  </div>
</div>

  );
};

export default PropertyListingsScreen;