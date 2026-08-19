import { useNavigate } from "react-router-dom";
import { locationValidate } from "../../utils/locationValidate";
import { useRef, useState } from "react";
import { Country, State, City } from "country-state-city";
import { setCountry, setState, setCity } from "../../utils/signupSlice";
import { useDispatch } from "react-redux";

const LocationInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();

  console.log(countries);
  const country = useRef(null);
  const state = useRef(null);
  const city = useRef(null);

  const handleLocation = () => {
    const message = locationValidate(
      country.current.value,
      state.current.value,
      city.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    navigate("/signup/additional-info");
    dispatch(setCountry(country.current.value));
    dispatch(setState(state.current.value));
    dispatch(setCity(city.current.value));

    console.log("Location is valid");
  };

  const handelCountryChange = (country) => {
    setSelectedCountry(country);
    setStates(State.getStatesOfCountry(country.isoCode));
    setCities([]);
  };

  const handelStateChange = (state) => {
    setSelectedState(state);

    if (!state) {
      setCities([]);
      city.current.value = "";
      return;
    }
    setCities(City.getCitiesOfCountry(selectedCountry.isoCode, state.isoCode));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Back */}
        <button
          onClick={() => navigate("/signup/profile")}
          className="text-3xl text-gray-800 mb-6"
        >
          ←
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Create your profile
        </h1>

        {/* Step */}
        <p className="text-green-500 font-semibold text-lg mt-1">Step 3 of 4</p>

        {/* Progress Bar */}
        <div className="flex gap-1 mt-3">
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-green-500 rounded"></div>
          <div className="h-1 flex-1 bg-gray-200 rounded"></div>
        </div>

        {/* Location Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl text-green-500">⌖</span>
          </div>
        </div>

        {/* Location Information */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            Location Information
          </h2>

          <p className="text-gray-600 mt-2">Tell us where you are from</p>
        </div>

        {/* Country */}
        <div className="mt-6">
          <label className="block text-sm text-gray-700 mb-1">Country</label>

          <select
            ref={country}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
            onChange={(e) =>
              handelCountryChange(
                countries.find((c) => c.isoCode === e.target.value),
              )
            }
          >
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">State</label>

          <select
            ref={state}
            disabled={!selectedCountry}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
            onChange={(e) =>
              handelStateChange(
                states.find((s) => s.isoCode === e.target.value),
              )
            }
          >
            <option value="">Select state</option>

            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">City</label>

          <select
            ref={city}
            disabled={!selectedState}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:border-green-500"
          >
            <option value="">Select city</option>
            {cities.map((city, index) => (
              <option key={`${city.name}-${index}`} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Error */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        {/* Continue */}
        <button
          type="button"
          className="w-full mt-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          onClick={handleLocation}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LocationInfo;
