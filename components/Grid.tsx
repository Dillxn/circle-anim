import Image from 'next/image';
import circle from '@/public/circle.svg';

export default function Grid({
  opacities,
  gap,
  columns,
  unit,
  size,
}: {
  opacities: number[];
  gap: number;
  columns: number;
  unit: 'px' | '%' | 'vw';
  size: number;
}) {
  return (
    <>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          marginRight: `${gap}${unit}`,
          gap: `${gap}${unit}`,
        }}
      >
        {opacities.map((opacity, index) => (
          <div key={index}>
            <style>
              {`
              @keyframes fadeIn {
                  from { opacity: 0; }
                  to   { opacity: 1; }
                }

                @keyframes fadeOut {
                  from { opacity: 1; }
                  to   { opacity: 0; }
                }
             `}
            </style>
            <Image
              alt="circle"
              src={circle}
              className="absolute max-w-[unset]
                animate-[fadeOut_900ms_forwards] opacity-0
                hover:animate-[fadeIn_900ms_forwards]"
              style={{
                width: `${size}${unit}`,
              }}
            />
            <Image
              alt="circle"
              src={circle}
              className="pointer-events-none max-w-[unset]"
              style={{
                opacity: `${opacity}%`,
                width: `${size}${unit}`,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
