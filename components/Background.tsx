import Slider from "./Slider";

export default function Background() {
  return (
    <>
      <div
        className="h-svh w-svw overflow-hidden -z-1"
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
          duration={5}
          count={512}
          scale={7}
          rotation={10}
          tilt={30}
        />
      </div>
    </>
  );
}
