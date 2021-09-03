import Image from 'next/image';
import Link from 'next/link';

import { Button, ButtonDiv, Div } from './style';
import logo from '../../../public/logo.svg';

export default function Menu() {
  return (
    <Div>
      <Image src={logo} alt="Logo" />
      <ButtonDiv>
        <Link href="/">Sobre</Link>
        <Link href="/">Biblioteca</Link>
        <Button>Login</Button>
      </ButtonDiv>
    </Div>
  );
}
