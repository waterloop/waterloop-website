import React from 'react';
import { AboutEvent } from '../components/SustainableTech/AboutEvent';
import { Contact } from '../components/SustainableTech/Contact';
import { FAQ } from '../components/SustainableTech/FAQ';
import { Header } from '../components/SustainableTech/Header';
import { Hero } from '../components/SustainableTech/Hero';
import { Schedule } from '../components/SustainableTech/Schedule';
import { Sponsors } from '../components/SustainableTech/Sponsors';

const SustainableTechEvent: React.FC = () => (
  <div>
    <Header />
    <Hero />
    <Schedule />
    <AboutEvent />
    <Sponsors />
    <FAQ />
    <Contact />
  </div>
);

export default SustainableTechEvent;
