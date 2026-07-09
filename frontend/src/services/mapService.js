const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class MapService {
  // Get Current Location
  async getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported."));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  }

  // Reverse Geocoding
  async getAddress(latitude, longitude) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/maps/reverse-geocode?lat=${latitude}&lng=${longitude}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch address.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        address: "Anna Salai, Puducherry",
      };
    }
  }

  // Forward Geocoding
  async searchLocation(query) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/maps/search?query=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        {
          name: "Anna Salai",
          latitude: 11.9416,
          longitude: 79.8083,
        },
      ];
    }
  }

  // Nearby Complaints
  async getNearbyComplaints(latitude, longitude) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/maps/nearby?lat=${latitude}&lng=${longitude}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch nearby complaints.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        {
          id: 1,
          title: "Road Damage",
          latitude: 11.9416,
          longitude: 79.8083,
          status: "Pending",
        },
        {
          id: 2,
          title: "Garbage Overflow",
          latitude: 11.9420,
          longitude: 79.8091,
          status: "Resolved",
        },
      ];
    }
  }

  // Route Directions
  async getRoute(start, destination) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/maps/route`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            start,
            destination,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to calculate route.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        distance: "2.8 km",
        duration: "9 mins",
      };
    }
  }

  // Static Map URL (Placeholder)
  getStaticMap(latitude, longitude) {
    return `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  }

  // Google Maps Navigation URL
  getGoogleMapsUrl(latitude, longitude) {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  }
}

export default new MapService();