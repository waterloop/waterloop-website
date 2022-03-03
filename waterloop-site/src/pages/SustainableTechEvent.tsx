import React from 'react';

import { AboutEvent } from '../components/SustainableTech/AboutEvent';
import { Contact } from '../components/SustainableTech/Contact';
import { FAQ } from '../components/SustainableTech/FAQ';
import { Hero } from '../components/SustainableTech/Hero';
import { Schedule } from '../components/SustainableTech/Schedule';
import { Sponsors } from '../components/SustainableTech/Sponsors';
import { Teams } from '../components/SustainableTech/Teams';

const SustainableTechEvent: React.FC = () => (
  <div>
    <Hero />
    <AboutEvent />
    <Schedule />
    <Teams />
    <Sponsors />
    <FAQ />
    <Contact />
  </div>
);

export default SustainableTechEvent;
