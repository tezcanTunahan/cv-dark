import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Alert from './ui/Alert';
import Button from './ui/Button';
import Input from './ui/Input';
import TextInput from './ui/TextInput';

export default function Contact() {
  const form = useRef();
  const [hide, setHide] = useState(true);
  const [message, setMessage] = useState('');

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
          form.current[0].value = '';
          form.current[1].value = '';
          form.current[2].value = '';
          form.current[3].value = '';
          setMessage('form submit successfully');
          setHide(false);
        },
        (error) => {
          form.current[0].value = '';
          form.current[1].value = '';
          form.current[2].value = '';
          form.current[3].value = '';
          setMessage('form submit failed');
          setHide(false);
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
          <Input
            placeholder='Name'
            id='name'
            name='name'
            type='text'
            required={true}
          />
          <Input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            required={true}
          />
        </div>
        <Input
          id='subject'
          name='subject'
          placeholder='Subject'
          type='text'
          required={true}
        />
        <TextInput
          id='message'
          name='message'
          placeholder='Message'
          type='text'
          required={true}
        />
        <Button
          type='submit'
          text='Send message !'
          style={{ marginTop: '2rem' }}
        />
        <Alert message={message} hide={hide} setHide={setHide} />
      </div>
    </form>
  );
}
