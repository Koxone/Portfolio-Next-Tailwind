import React from 'react';

function DonationsModal({ paypalRef, setShowPayPal }) {
  return (
    <div
      className="group flex w-full max-w-sm transform flex-col items-center gap-4 overflow-hidden rounded-2xl border border-orange-400 bg-gray-900 p-6 text-left text-sm leading-relaxed text-neutral-200 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] sm:border-neutral-500 sm:hover:border-orange-400"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="animate-spark absolute z-20 h-2 w-2 rounded-full bg-orange-400 opacity-100 sm:hidden sm:group-hover:block"></span>

      {/* PayPal Button Container */}
      <div ref={paypalRef}></div>

      {/* GitHub Sponsors Button */}
      <iframe
        src="https://github.com/sponsors/Koxone/button"
        title="Sponsor Koxone"
        height="32"
        width="114"
        style={{
          border: 0,
          borderRadius: '6px',
        }}
      ></iframe>

      {/* Close Button */}
      <button
        className="mt-2 cursor-pointer rounded bg-orange-400 px-4 py-2 text-center text-lg font-semibold text-white transition hover:bg-orange-700"
        onClick={() => setShowPayPal(false)}
      >
        Close
      </button>
    </div>
  );
}

export default DonationsModal;
