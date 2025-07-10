import { stats } from "../constants"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setStartCount(false);
    }
  }, [inView]);

  return (
    <div ref={ref} id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols max-md:grid-cols-2 px-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-extrabold mb-2">
              {startCount && (
                <CountUp suffix={item.suffix} end={item.value} duration={2} />
              )}
              {!startCount && (
                <span>0{item.suffix}</span>
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
