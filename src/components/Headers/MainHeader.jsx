'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DonationsModal from '../Modals/DonationsModal';
import localFont from 'next/font/local';

const inter = localFont({
  src: '../../Fonts/Inter.ttf',
});

export default function MainHeader() {
  const [showPayPal, setShowPayPal] = useState(false);
  const paypalRef = useRef(null);

  useEffect(() => {
    if (showPayPal && paypalRef.current) {
      const script = document.createElement('script');
      script.src =
        'https://www.paypal.com/sdk/js?client-id=AXr4UIOmeot54V2uNE_M4bGGch06W-yNS1LHcezuvFN0VQI_Vw9-GOXvs0tzdua4eVnYAYYbVdHqlEYq&vault=true&intent=subscription';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.paypal) {
          window.paypal
            .Buttons({
              style: {
                shape: 'pill',
                color: 'blue',
                layout: 'vertical',
                label: 'subscribe',
              },
              createSubscription: (data, actions) =>
                actions.subscription.create({
                  plan_id: 'P-75E64413KL930952ENBWCOXA',
                }),
              onApprove: (data) => {
                alert(
                  `Thank you for subscribing! Subscription ID: ${data.subscriptionID}`
                );
              },
            })
            .render(paypalRef.current);
        }
      };
    }
  }, [showPayPal]);

  return (
    <>
      <header
        className={`flex h-16 w-full items-center border-b border-gray-800 bg-gray-900 px-5 py-8 md:p-8 ${inter.className}`}
      >
        <img
          className="mr-auto h-fit max-h-10 w-full max-w-9 cursor-pointer object-cover md:max-h-15 md:max-w-13"
          src="/logo.png"
          alt="logo icon"
        />

        <div className="flex items-center gap-2 text-xs text-white sm:gap-8 sm:text-base">
          <a
            className="transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
            target="_blank"
            href="https://resume.koxland.dev/"
          >
            Resume
          </a>
          <a
            className="transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
            target="_blank"
            href="https://github.com/Koxone"
          >
            Github
          </a>
          <a
            className="transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
            target="_blank"
            href="https://www.youtube.com/@KoxDeveloper"
          >
            Youtube
          </a>
          <a
            className="transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
            href="#footer"
          >
            Contact
          </a>
          <span
            className="cursor-pointer transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
            onClick={() => setShowPayPal(true)}
          >
            Donate
          </span>
        </div>
      </header>

      <AnimatePresence>
        {showPayPal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={() => setShowPayPal(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <DonationsModal
                paypalRef={paypalRef}
                setShowPayPal={setShowPayPal}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
