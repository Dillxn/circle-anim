import Background from '@/components/Background';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function Home() {
  return (
    <>
      {/* container */}
      <div
        className="flex place-content-center items-center"
        data-theme="dark"
      >
        <Image
          src={logo}
          alt="Circle Avenue Logo"
          className="absolute w-[40vw]"
          style={{
            filter: `drop-shadow(0px 0px 1vw var(--background)) 
            drop-shadow(0px 0px 1vw var(--background)) 
            drop-shadow(0px 0px 2vw var(--background))
            drop-shadow(0px 0px 3vw var(--background))
            drop-shadow(0px 0px 4vw var(--background))`,
          }}
        />
        <Background />
      </div>
    </>
  );
}
