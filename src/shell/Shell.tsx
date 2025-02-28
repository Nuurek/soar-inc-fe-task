import { useCallback, useState } from 'react';

import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Shell() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  const onBurgerButtonClick = useCallback(() => {
    setIsSideBarOpened((opened) => !opened);
  }, []);

  return (
    <div className="bg-cultured antialiased">
      <Navbar onBurgerButtonClick={onBurgerButtonClick} />
      <Sidebar isOpenedOnMobile={isSideBarOpened} />
      <Main disabled={isSideBarOpened} />
    </div>
  );
}
