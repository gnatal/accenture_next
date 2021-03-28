
import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic';

import { Container } from '../styles/pages/home/style'
import Seo from '../components/seo'


//dynamic is a hook
const ModalContent = dynamic(
  () => import('../components/modal')
  , { loading: () => <p>carregando ... </p> }
);



export default function Home() {

  const [isShow, setIsShow] = useState(false);

  function handleOpenModal() {
    setIsShow(!isShow);
  }


  return (
    <>
      <Seo
        title={"Home"}

        description={"a página inicial da application"}
        image={"/images/metaImage.jpg"}
      />
      <Container>
        <Image src={'/image/logo.png'} width={'200'} height={'60'} alt={"logo.png"} />
        <div >
          <h1>Hello NextJS</h1>
        </div>
        <button onClick={handleOpenModal}>{!isShow ? "Abrir" : "Fechar"} modal</button>
        <div>
          {isShow ? <ModalContent /> : null}
        </div>
      </Container>
    </>
  )
}
