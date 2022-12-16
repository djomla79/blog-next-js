import { Fragment } from 'react';
import ContactForm from '../../components/contact/contact-form';
import Head from '../../metadata/head';

function ContactPage() {
  return (
    <Fragment>
      <Head
        active={false}
        title='Contact me'
        content='Ask me anything/send your messages'
      />
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
