import { FC, PropsWithChildren } from 'react';
import { monoton, poppins } from '~/theme/fonts';

export const SharedDefaults: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${poppins.variable} ${monoton.variable}`}>{children}</div>
  );
};
