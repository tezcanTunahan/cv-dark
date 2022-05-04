import { useRouter } from 'next/router';
import Button from '../components/ui/Button';

export default function Welcome() {
  const router = useRouter();
  function clickHandle() {
    router.push('/#contact');
  }

  return (
    <section id='about' className='welcome'>
      <h1>Hi,</h1>
      <h1>I'm Tunahan</h1>
      <h1>web developer</h1>
      <p>Full-Stack Developer</p>
      <Button onClick={clickHandle} text='Contact Me !' />
    </section>
  );
}
