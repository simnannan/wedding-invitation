"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  target: string;
};

function toTimeLeft(targetDate: Date): TimeLeft {
  const diff = Math.max(0, targetDate.getTime() - Date.now());
  const total = Math.floor(diff / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}
export default function Countdown({ target }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    toTimeLeft(new Date(target))
  );

  useEffect(() => {
    const targetDate = new Date(target);
    const id = window.setInterval(() => {
      setTimeLeft(toTimeLeft(targetDate));
    }, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div className="countdown">
      <div>
        <strong>{timeLeft.days}</strong>
        <span>日</span>
      </div>
      <div>
        <strong>{timeLeft.hours}</strong>
        <span>時間</span>
      </div>
      <div>
        <strong>{timeLeft.minutes}</strong>
        <span>分</span>
      </div>
      <div>
        <strong>{timeLeft.seconds}</strong>
        <span>秒</span>
      </div>
    </div>
  );
}
