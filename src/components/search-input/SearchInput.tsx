import { Icon } from '../icon';

export default function SearchInput() {
  return (
    <div className="text-ceil focus:outline-american-blue relative w-full text-xs md:text-base">
      <Icon
        icon="Search"
        className="pointer-events-none absolute inset-y-3 start-5 h-4 w-4 md:inset-y-4 md:h-5 md:w-5"
      />
      <input
        type="text"
        placeholder="Search for something"
        className="bg-cultured focus:outline-cerulean-frost block w-full rounded-full p-3 ps-14 focus:outline-1 md:p-4 md:ps-15"
      />
    </div>
  );
}
