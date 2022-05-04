import FlipCard from './ui/FlipCard';
import cv1 from '../public/img/cv1.png';
import blogT from '../public/img/blogT.png';
import residue from '../public/img/residue.png';
import sorting from '../public/img/sorting.png';
import todo from '../public/img/todo.png';

export default function Work() {
  return (
    <div className='work'>
      <h1>My Projects</h1>
      <div className='work__projects'>
        <FlipCard
          img={cv1}
          title='CV1'
          text='my first portfolio page'
          link='https://tunahantezcan.netlify.app/'
        />
        <FlipCard
          img={blogT}
          title='BlogT'
          text='MERN stack project'
          link='https://blogt.netlify.app/'
        />
        <FlipCard
          img={residue}
          title='Residue'
          text='MERN stack project'
          link='https://residue.netlify.app/'
        />
        <FlipCard
          img={sorting}
          title='Sorting algorithms'
          text='I tried to visualize the algorithms'
          link='https://sortvisu.netlify.app/'
        />
        <FlipCard
          img={todo}
          title='Todo app'
          text='My first React app'
          link='https://todowithtimer.netlify.app/'
        />
      </div>
    </div>
  );
}
