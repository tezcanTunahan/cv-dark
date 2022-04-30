import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
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
          </main>
          <Footer />
        </div>
      </div>
    </Container>
  );
}
