import Image from 'next/image';

export default function FlipCard({ title, text, img, link }) {
  return (
    <a href={link}>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <Image src={img} />
          </div>
          <div className='flip-card-back'>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
