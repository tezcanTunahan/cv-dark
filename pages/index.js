import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <Container>
      <div className='home'>
        <div className='home__navbar'>
          <Navbar />
        </div>
        <div className='home__page'>
          <main>
            <h1>welcome page</h1>
          </main>
          <Footer />
        </div>
      </div>
    </Container>
  );
}
