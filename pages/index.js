import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { useState } from 'react';
export default function Home() {
  const [hide, setHide] = useState(false);

  function clikHandle() {
    setHide(!hide);
  }

  return (
    <Container>
      <div className='home'>
        <div className='home__navbar'>
          <div onClick={clikHandle} className='home__navbar__button'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Navbar hide={hide} setHide={setHide} />
        </div>
        <div className='home__page'>
          <main>
            <Welcome />
            <Work />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </Container>
  );
}
