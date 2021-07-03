import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Date } from './components/Date'
import { Location } from './components/Location'
import { TodayWeather } from './components/TodayWeather'
import { ThisWeekWeather } from './components/ThisWeekWeather'
import { Container } from 'react-bootstrap'
import React from 'react'

function App() {
  return (
    <Container>
      <Location/>
      <Date/>
      <TodayWeather/>
      <ThisWeekWeather/>
    </Container>
  );
}

export default App;
