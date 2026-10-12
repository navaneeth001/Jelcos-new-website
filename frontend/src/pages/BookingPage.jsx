import React from 'react';
import Scheduler from '../components/Scheduler';
import Questionnaire from '../components/Questionnaire';
import Instructions from '../components/Instructions';

const BookingPage = () => {
  return (
    <main className="pt-20">
      <Scheduler />
      <Questionnaire />
      <Instructions />
    </main>
  );
};

export default BookingPage;
