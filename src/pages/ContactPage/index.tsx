import React, { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './ContactPage.module.css';
import Hero from '../../components/hero';
import Container from '../../components/container';
import PaperCard from '../../components/paper-card';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('formValues', { name, email, message });
  };

  return (
    <Container>
      <Hero
        title="Contact Us"
        breadcrumb={[
          {
            label: 'Home',
            path: '/'
          },
          {
            label: 'Contact',
            path: ''
          }
        ]}
      />
      <PaperCard>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>
              Name:
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"/>
            </label>
            <label>
              Email:
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/>
            </label>
          </div>
          <label className={styles.labelFull}>
            Message:
            <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"/>
          </label>
          <Button type="submit" uiType="primary">Send Message</Button>
        </form>
      </PaperCard>
    </Container>
  );
};

export default ContactPage;
