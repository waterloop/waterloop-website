import React from 'react';

import { AboutEvent } from '../components/SustainableTech/AboutEvent';
import { FAQ } from '../components/SustainableTech/FAQ';
import { Hero } from '../components/SustainableTech/Hero';
import { Schedule } from '../components/SustainableTech/Schedule';
import { Teams } from '../components/SustainableTech/Teams';

const SustainableTechEvent: React.FC = () => (
  <div>
    <Hero />
    <AboutEvent />
    <Schedule />
    <Teams />
    <FAQ />
  </div>
);

export default SustainableTechEvent;
