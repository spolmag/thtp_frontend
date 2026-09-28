import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Target: November 30, 2026, at 21:00:00 (9:00 PM)
    const targetDate = new Date("2026-11-30T23:00:00+07:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-3 text-xs font-medium text-gray-600 bg-orange-50 border border-orange-100 py-2 px-4 rounded-xl inline-block">
      <span>⏳ เหลือเวลาในโครงการอีก</span>{" "}
      <span className="text-orange-600">
        {timeLeft.days} วัน {timeLeft.hours} ชั่วโมง
      </span>
      <span className="text-xs text-gray-500 block mt-0.5">
        (สิ้นสุดโครงการ 30 พ.ย. 2569 21:00 น.)
      </span>
    </div>
  );
}

export default CountdownTimer;
