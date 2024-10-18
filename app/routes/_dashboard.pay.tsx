// LoginRouter.tsx
import React from 'react';
import { Meta } from '@remix-run/react'; // Adjust imports as necessary
import Payment from '../Dashboard/Payment';
import LastSection from '~/Dashboard/BodySection/Body4th/LastSection';

export const meta: Meta = () => {
  return [
    { title: 'Router' },
    { name: 'description', content: 'Router Page' },
  ];
};

export default function PaymentRouter() {
  return (
    <div>
   <Payment/>
   

   <LastSection/>
    </div>
  );
}
