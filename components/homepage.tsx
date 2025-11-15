'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Fireworks from "./bg/fireworks";
import { SparklesText } from "./magicui/sparkles-text";
import { WordRotate } from "./magicui/word-rotate";
import { SpinningText } from "./magicui/spinning-text";
import { HyperText } from "./magicui/hyper-text";
import { ShootingStars } from "./bg/shooting-stars";
import { NumberTicker } from './magicui/number-ticker';
import { StarsBackground } from "./bg/stars-background";
import Countdown from "./countdown";
import { Pictures } from "./pictures";
import { ConfettiStars } from "./stars";
import { TimelineLayout } from "./timeline/timeline-layout";


export default function WeddingIntro() {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFireworks(true), 6000); // 6 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-900 flex flex-col items-center justify-start w-full overflow-x-hidden scrollbar-hide">
      {/* Infinite starry background */}
      <div className="fixed inset-0 ">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Spinning circle text */}
      <SpinningText className="mt-20 text-white"> 
        Sanga • Akula • Sanga • Akula •
      </SpinningText>

      <div className="mt-20 relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
        <HyperText className="text-3xl font-mono text-white">
          Sainath Sanga
        </HyperText>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <WordRotate 
            className="text-2xl tracking-tight font-medium text-white" 
            words={["Weds","♥️", "Loves","💕","With", "💗", "Hearts", "💖"]} 
          />
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
        >
          <SparklesText className="text-3xl font-mono text-white" sparklesCount={3}>
            Sree Pooja Akula
          </SparklesText>
        </motion.span>

        {/* Muhurtham */}
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1.2 }}
        >
          <div className="text-2xl tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex">
            Muhurtham
          </div>
        </motion.span>

        {/* Wedding Time + Date */}
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1.2 }}
        >
          <div className="flex items-center space-x-2">
            {/* Animated 11:11 */}
            <div className="flex items-center">
              <NumberTicker 
                delay={3.5} 
                value={11} 
                startValue={0} 
                className="w-8 text-center text-3xl font-mono font-bold text-white" 
              />
              <span className="mx-1 text-3xl font-mono font-bold text-white">:</span>
              <NumberTicker 
                delay={3.5} 
                value={11} 
                startValue={0} 
                className="w-8 text-center text-3xl font-mono font-bold text-white" 
              />
            </div>
            {/* Static date */}
            <span className="ml-4 text-3xl font-mono font-bold text-white">23/11/2025</span>
          </div>
        </motion.span>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6, duration: 1 }}
        >
          <Countdown />
        </motion.div>
      </div>

      {/* Fireworks after 6s */}
      {showFireworks && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Fireworks />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 15, duration: 1.2 }}
        className="relative z-10 w-full justify-center items-center flex flex-col"
      >
        <TimelineLayout />
        <Pictures />
        <ConfettiStars/>
      </motion.div>
    </div>
  );
}
