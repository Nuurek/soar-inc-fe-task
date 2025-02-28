import classNames from 'classnames';

import { Icon, IconType } from '../icon';

type IconButtonProps = React.HTMLProps<HTMLButtonElement> & {
  icon: IconType;
};

export default function IconButton({
  icon,
  className: customClassName,
  onClick,
}: IconButtonProps) {
  const className = classNames(customClassName, 'color-american-blue');

  return (
    <button className={className} onClick={onClick}>
      <Icon icon={icon} />
    </button>
  );
}
