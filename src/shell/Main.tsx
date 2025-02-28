import classNames from 'classnames';

interface MainProps {
  disabled: boolean;
}

export default function Main({ disabled }: MainProps) {
  return (
    <main
      className={classNames('h-dvh p-4 pt-20 md:ml-64', {
        'pointer-events-none': disabled,
      })}
    />
  );
}
