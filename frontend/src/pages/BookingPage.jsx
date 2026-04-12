import React from 'react';
import Scheduler from '../components/Scheduler';
import Questionnaire from '../components/Questionnaire';

const BookingPage = () => {
  return (
    <main className="pt-20">
      <Scheduler />
      <Questionnaire />
    </main>
  );
};

export default BookingPage;
