import { useEffect, useState } from "react";

interface ICountryState {
  country: string;
  city: string;
}

/**
 * useIpApi is a custom hook for the geolocation using two apis
 */
export const useIpApi = () => {
  const [ipApi, setipApi] = useState<ICountryState>({
    country: "",
    city: ""
  });

  useEffect(() => {
    fetch(`https://api.ipify.org/?format=json`)
      .then((results) => results.json())
      .then((data) => {
        fetch(`https://ipapi.co/${data.ip}/json/`)
          .then((results) => results.json())
          .then((data) => {
            console.log(data.country_name);
            setipApi((prevState) => ({
              ...prevState,
              country: data.country_name,
              city: data.country_capital,
            }));
            localStorage.setItem("country", data.country_name);
            localStorage.setItem("city", data.country_capital);
          });
      })
      .catch((err) => console.error(err));
  }, []); // No es necesario incluir ipApi en las dependencias

  return { ipApi };
};
