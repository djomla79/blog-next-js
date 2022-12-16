import Image from 'next/image';

import classes from './about-me.module.css';

function AboutMe() {
  return (
    <section className={classes.about}>
      <div className={classes.image}>
        <Image
          src='/images/site/profile_picture.png'
          alt='An image'
          width={250}
          height={250}
        />
      </div>
      <h3 className={classes.info}>Hi, I'm me</h3>
      <p className={classes.text}>This is my blog space</p>
    </section>
  );
}

export default AboutMe;
