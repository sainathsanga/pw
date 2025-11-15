'use client';
 
import { FireworksBackground } from '@/components/ui/shadcn-io/fireworks-background';
const Fireworks = () => {
 
  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      color={'LightGoldenRodYellow'}
    />
  );
};
export default Fireworks;