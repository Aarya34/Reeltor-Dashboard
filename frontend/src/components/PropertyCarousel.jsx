import React from 'react';
import propertyListings from '../data/propertyListingsData';
import { Carousel, Image } from 'react-bootstrap';

const PropertyCarousel = () => {
  const featuredProperties = propertyListings.filter(property => property.featured);

  return (
    // Carousel component from react-bootstrap is used to display the featured properties
    <Carousel pause="hover" className="bg-primary mb-4 property-carousel mt-1" interval={3000}>
      {featuredProperties.map((property, index) => (
        <Carousel.Item key={index}>
          <Image
            className="w-267.66px h-158.02px"
            src={property.image}
            alt={property.name}
            style={{
              objectFit: 'cover',
              height: '300px'  // Fixed height for the image
            }}
          />
          <Carousel.Caption className="custom-caption">
            <h2>{property.name}</h2>
            <p>{property.etherPrice} ether </p>
            {/* <p>{property.rating} stars</p> */}
            <p> {property.rating} stars</p>
            {/* <p>{property.rating} stars</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PropertyCarousel;
