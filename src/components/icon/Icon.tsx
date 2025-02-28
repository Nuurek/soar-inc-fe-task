import * as Icons from './icons';

export type IconType = keyof typeof Icons;

import React, { type SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType;
};

export function Icon({ icon, ...props }: IconProps) {
  const Component = React.createElement(Icons[icon], props);

  return <span className="icon">{Component}</span>;
}
