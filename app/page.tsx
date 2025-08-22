import Background from '@/components/Background';
import Logo from '@/components/Logo';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <>
      {/* container */}

      <ThemeSwitch />
      <div
        className="flex place-content-center items-center"
      >
        <Logo />
        <Background />
      </div>
    </>
  );
}
