import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
export default function Home() {
  return (
    <Container>
      <div className='home'>
        <div className='home__navbar'>
          <Navbar />
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
