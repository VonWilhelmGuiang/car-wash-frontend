import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Maps from './examples/Maps';

const CarwashFinder = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [carwashStations, setCarwashStations] = useState([]);

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        fetchCarwashStations(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error(error);
        // Handle geolocation error
      }
    );
  }, []);

  const fetchCarwashStations = async (latitude, longitude) => {
    try {
      // Make API call to fetch carwash stations
      const response = await fetch(`YOUR_API_ENDPOINT?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      setCarwashStations(data.results);
    } catch (error) {
      console.error(error);
      // Handle API error
    }
  };

  return (
<div>

      {/* Page content */}
      <Container className="" fluid>

    <div>
      <h1>Find Nearest Carwash Station</h1>
      {carwashStations.length > 0 ? (
        <ul>
          {carwashStations.map((station) => (
            <li key={station.id}>{station.name}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}

        <div>
        <div>
                          <i className="ni ni-pin-3" style={{"fontSize":30, "marginButtom":"-30px"}} />
                          <span><input type="text" placeholder='search' style={{"height":50,"width":200}}></input></span><button className="btn btn-primary">search</button>
                        </div>
        </div>
      
        <div>
            <Maps/>
        </div>
    </div>
    </Container>
    </div>


  );
};

export default CarwashFinder;
