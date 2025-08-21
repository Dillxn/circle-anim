import Grid from './Grid';

export default function Slider({
  duration,
  count,
  scale,
  rotation = 0,
  tilt = 0,
}: {
  duration: number;
  count: number;
  scale: number;
  rotation?: number;
  tilt?: number;
}) {
  const opacities = Array(count)
    .fill(0)
    .map(() => {
      const random = Math.random();
      const range = 95;
      return (
        Math.pow(random, 5) * range + (100 - range)
      );
    });
  return (
    <>
      <style>{`
          @keyframes slide {
            from {
              translate: 0%;
            }

            to {
              translate: -25%;
            }
          }
        `}</style>
      <div className="perspective-distant">
        <div
          className="absolute top-1/2 left-1/2
            -translate-1/2"
          style={{
            rotate: `-${rotation}deg`,
            transform: `rotateX(${tilt}deg)`,
          }}
        >
          <div
            className="flex w-fit"
            style={{
              animation: `${duration}s linear slide infinite`,
            }}
          >
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <Grid
                  columns={count / 64}
                  gap={scale / 5}
                  opacities={opacities}
                  size={scale}
                  unit="vw"
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
