'use client';

import { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2025-11-23T11:11:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  diff: number;
}

export default function Countdown() {
  // Initially null so SSR output is static
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = WEDDING_DATE.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ diff, days, hours, minutes, seconds });
    };

    updateTime(); // initial call
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []); // no dependencies

  if (!timeLeft) {
    // Render static HTML for SSR
    return (
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">Loading...</div>
      </div>
    );
  }

  if (timeLeft.diff <= 0) {
    return (
      <div className="text-white text-3xl font-bold font-mono">
        Happily Married!
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-white space-y-4">
      <div className="flex space-x-4 text-3xl font-mono">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Mins" />
        <TimeBox value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2.5xl font-mono">{value}</div>
      <div className="text-sm font-mono">{label}</div>
    </div>
  );
}
