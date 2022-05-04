import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import TextInput from './ui/TextInput';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fgi1xoh',
        'template_gj0jstk',
        form.current,
        '80Rzd4G6fhpcrVVoA'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact'>
      <div className='contact__left'>
        <h1>Contact Me </h1>
        <p>
          I am interested in work opportunities – particularly ambitious or
          large projects. However, if you have any other requests or questions,
          feel free to use the form.
        </p>
        <div className='contact__left__doubleInput'>
          <Input placeholder='Name' id='name' name='name' type='text' />
          <Input id='email' type='email' name='email' placeholder='Email' />
        </div>
        <Input id='subject' name='subject' placeholder='Subject' type='text' />
        <TextInput
          id='message'
          name='message'
          placeholder='Message'
          type='text'
        />
        <Button
          type='submit'
          text='Send message !'
          style={{ marginTop: '2rem' }}
        />
      </div>
    </form>
  );
}
