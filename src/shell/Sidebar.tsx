import classNames from 'classnames';

interface SidebarProps {
  isOpenedOnMobile: boolean;
}

export default function Sidebar({ isOpenedOnMobile }: SidebarProps) {
  return (
    <aside
      className={classNames(
        `border-bright-gray fixed top-36 left-0 z-40 h-screen w-64 border bg-white px-10 transition-transform md:top-0 md:translate-x-0`,
        {
          '-translate-x-full': !isOpenedOnMobile,
          'transform-none': isOpenedOnMobile,
        }
      )}
    >
      <div className={`my-5 hidden h-15 flex-row items-center md:flex`}>
        <h1 className="text-american-blue text-2xl">Soar Task</h1>
      </div>
      <ul className="text-raisin-black text-lg">
        <li className="py-5">Dashboard</li>
        <li className="text-philippine-silver py-5">Transactions</li>
      </ul>
    </aside>
  );
}
