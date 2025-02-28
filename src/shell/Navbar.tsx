import IconButton from '../components/icon-button/IconButton';
import SearchInput from '../components/search-input';

interface NavbarProps {
  onBurgerButtonClick: () => void;
}

export default function Navbar({ onBurgerButtonClick }: NavbarProps) {
  return (
    <nav
      className={`border-b-bright-gray fixed top-0 right-0 left-0 border-b-1 bg-white p-6 md:ml-64 md:px-10 md:py-5`}
    >
      <div className="flex flex-col gap-5">
        <div
          className={`flex h-9 flex-row items-center justify-between md:h-15`}
        >
          <IconButton
            className="md:hidden"
            icon="Burger"
            onClick={onBurgerButtonClick}
          />
          <h1 className="text-american-blue text-lg md:text-3xl">Overview</h1>
          <div className="flex flex-row items-center gap-4">
            <div className="hidden md:block">
              <SearchInput />
            </div>
            <div className="hidden md:block">Set</div>
            <div className="hidden md:block">Not</div>
            <div>Photo</div>
          </div>
        </div>
        <div className="md:hidden">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
