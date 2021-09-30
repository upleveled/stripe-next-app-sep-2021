import { css } from '@emotion/react';
import Image from 'next/image';
import logo from '../public/images/logo.png';

export function Header() {
  return (
    <header>
      <div
        css={css`
          width: 100px;
          height: auto;
        `}
      >
        <Image src={logo} alt="UpLeveled" /> UpLeveled
      </div>
    </header>
  );
}
