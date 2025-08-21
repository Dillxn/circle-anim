import Slider from './Slider';

export default function Background() {
  return (
    <>
      <div className="bg-[var(--background)]">
        <div
          className="-z-1 h-svh w-svw overflow-hidden"
          style={{
            maskImage: `linear-gradient(to right, 
          transparent, 
          transparent 20%, 
          rgba(0,0,0,.2) 50%, 
          black 80%, 
          black)`,
          }}
        >
          <Slider
            duration={50}
            count={512}
            scale={8}
            rotation={10}
            tilt={30}
          />
        </div>
      </div>
    </>
  );
}
