import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  inViewThreshold?: number;
}

export function AnimatedCounter({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  inViewThreshold = 0.5,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    threshold: inViewThreshold,
    triggerOnce: true,
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          separator=","
          prefix={prefix}
          suffix={suffix}
          useEasing
        />
      ) : (
        <span>
          {prefix}0{suffix}
        </span>
      )}
    </span>
  );
}