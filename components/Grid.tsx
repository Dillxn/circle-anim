import Image from 'next/image';
import circle from '@/public/circle.svg';

export default function Grid({
  opacities,
  gap,
  columns,
  unit,
  size
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
          <Image
            key={index}
            alt="circle"
            src={circle}
            className="max-w-[unset]"
            style={{
              opacity: `${opacity}%`,
              width: `${size}${unit}`
            }}
          />
        ))}
      </div>
    </>
  );
}
