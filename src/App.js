import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { getMoment, findLocation } from './utils/helpers';
import WeatherCard from './views/WeatherCard';
import WeatherSetting from './views/WeatherSetting';
import useWeatherAPI from './hooks/useWeatherAPI';

const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
};
const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AUTHORIZATION_KEY = 'CWB-58F87371-93FB-4EFF-B4E0-63DFB26954F0';
// const LOCATION_NAME = '大林';
// const CITY_NAME = '嘉義縣';

const App = () => {
  console.log('--- invoke function component. ---');
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('WeatherCard');
  const handleCurrentPageChange = (currentPage) => {
    setCurrentPage(currentPage);
  }
  const storageCity = localStorage.getItem('cityName') || '嘉義縣';
  const [currentCity, setCurrentCity] = useState(storageCity);
  const currentLocation = useMemo(() => findLocation(currentCity), [currentCity]);
  const { cityName, locationName, sunriseCityName } = currentLocation;
  console.log(currentLocation);
  const moment = useMemo(() => getMoment(sunriseCityName), [sunriseCityName]);
  const [weatherElement, fetchData] = useWeatherAPI({
    authorizationKey: AUTHORIZATION_KEY,
    locationName: locationName,
    cityName: cityName,
  });
  const handleCurrentCityChange = (currentCity) => {
    setCurrentCity(currentCity);
  }

  useEffect(() => {
    // according moment to decide light or dark mode.
    setCurrentTheme(moment === 'day' ? 'light' : 'dark');
  }, [moment]);
  
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      {console.log('*** render, isLoading')}
      <Container>
        {currentPage === 'WeatherCard' && (
          <WeatherCard
            cityName={cityName}
            weatherElement={weatherElement}
            moment={moment}
            fetchData={fetchData}
            handleCurrentPageChange={handleCurrentPageChange}
          />
        )}
        {currentPage === 'WeatherSetting' && <WeatherSetting 
          cityName={cityName}
          handleCurrentCityChange={handleCurrentCityChange}
          handleCurrentPageChange={handleCurrentPageChange}
        />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
