import { useCountdown } from '@/hooks/useCountdown';
import { Clock, AlertTriangle } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes: number;
}

export const CountdownTimer = ({ initialMinutes }: CountdownTimerProps) => {
  const { minutes, seconds, isExpired } = useCountdown(initialMinutes);

  if (isExpired) {
    return (
      <div className="flex items-center justify-center gap-2 bg-destructive/10 text-destructive px-4 py-3 rounded-full border border-destructive/20">
        <AlertTriangle className="w-5 h-5" />
        <span className="font-semibold">Oferta Expirada!</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary/10 to-primary/20 text-primary px-6 py-4 rounded-full border border-primary/30">
      <Clock className="w-5 h-5 animate-pulse" />
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium opacity-80">Oferta expira em:</span>
        <div className="flex items-center gap-1">
          <div className="bg-primary/20 px-3 py-1 rounded-md">
            <span className="text-lg font-bold font-blinker">
              {minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-lg font-bold animate-pulse">:</span>
          <div className="bg-primary/20 px-3 py-1 rounded-md">
            <span className="text-lg font-bold font-blinker">
              {seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};