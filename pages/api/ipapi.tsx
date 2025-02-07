import { useEffect, useState } from "react";

interface ICountryState {
  country: string;
  city: string;
}

/**
 * useIpApi is a custom hook for geolocation using two APIs
 */
export const useIpApi = () => {
  const [ipApi, setIpApi] = useState<ICountryState>({ country: "", city: "" });

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org/?format=json");
        const ipData = await ipRes.json();
        
        const geoRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const geoData = await geoRes.json();

        console.log(geoData.country_name);

        setIpApi(() => ({
          country: geoData.country_name,
          city: geoData.country_capital,
        }));

        localStorage.setItem("country", geoData.country_name);
        localStorage.setItem("city", geoData.country_capital);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };

    fetchIpData();
  }, []); // Dependencias vacías ya que `setIpApi` usa función de actualización

  return { ipApi };
};
