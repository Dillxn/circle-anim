import Image from 'next/image';
import circle from '@/public/circle.svg';

export default function Home() {
  const opacities = Array(128)
    .fill(0)
    .map(() => Math.random() * 80 + 20);
  return (
    <>
      {/* container */}
      <div
        className="mt-24 h-128 overflow-hidden bg-white
          perspective-distant"
      >
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
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
          <div
            className="flex w-fit"
            style={{
              animation: '10s linear slide infinite',
            }}
          >
            <div
              className="mr-[20px] grid gap-[20px]"
              style={{
                gridTemplateColumns: 'repeat(16, 1fr)',
              }}
            >
              {opacities.map((opacity, index) => (
                <Image
                  key={index}
                  alt="circle"
                  src={circle}
                  className="w-[100px] max-w-[unset]"
                  style={{
                    opacity: `${opacity}%`,
                  }}
                />
              ))}
            </div>
            <div
              className="mr-[20px] grid gap-[20px]"
              style={{
                gridTemplateColumns: 'repeat(16, 1fr)',
              }}
            >
              {opacities.map((opacity, index) => (
                <Image
                  key={index}
                  alt="circle"
                  src={circle}
                  className="w-[100px] max-w-[unset]"
                  style={{
                    opacity: `${opacity}%`,
                  }}
                />
              ))}
            </div><div
              className="mr-[20px] grid gap-[20px]"
              style={{
                gridTemplateColumns: 'repeat(16, 1fr)',
              }}
            >
              {opacities.map((opacity, index) => (
                <Image
                  key={index}
                  alt="circle"
                  src={circle}
                  className="w-[100px] max-w-[unset]"
                  style={{
                    opacity: `${opacity}%`,
                  }}
                />
              ))}
            </div>
            <div
              className="mr-[20px] grid gap-[20px]"
              style={{
                gridTemplateColumns: 'repeat(16, 1fr)',
              }}
            >
              {opacities.map((opacity, index) => (
                <Image
                  key={index}
                  alt="circle"
                  src={circle}
                  className="w-[100px] max-w-[unset]"
                  style={{
                    opacity: `${opacity}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
