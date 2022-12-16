import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';

function PostItem({ post: { title, image, text, date, details } }) {
  const formattedDate = new Date(date).toLocaleDateString();
  const imagePath = `/images/posts/${details}/${image}`;
  const linkPath = `/posts/${details}`;

  return (
    <div className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostItem;
