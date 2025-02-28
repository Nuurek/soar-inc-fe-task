import IconButton from '../components/icon-button/IconButton';

interface NavbarProps {
  onBurgerButtonClick: () => void;
}

export default function Navbar({ onBurgerButtonClick }: NavbarProps) {
  return (
    <nav
      className={`border-b-bright-gray fixed top-0 right-0 left-0 border-b-1 bg-white px-10 py-5 md:ml-64`}
    >
      <div className={`flex h-9 flex-row items-center justify-between md:h-15`}>
        <IconButton
          className="md:hidden"
          icon="Burger"
          onClick={onBurgerButtonClick}
        />
        <h1 className="text-american-blue text-lg md:text-3xl">Overview</h1>
        <div className="flex flex-row gap-4">
          <div className="hidden md:block">Set</div>
          <div className="hidden md:block">Not</div>
          <div>Photo</div>
        </div>
      </div>
    </nav>
  );
}
