import React from 'react';
import styles from '../styles/SocialMedia.module.scss';

const SocialMediaAccounts = () => {
  return (
    <div className={styles.socialmedia}>
      <div className={styles.socialmedia__links}>
        <a
          href='https://www.linkedin.com/in/ghofranebenhmaid/'
          className={'transition-colors hover:text-yellow-500'}
          target='_blank'
          rel='noreferrer'>
          LinkedIn
        </a>
        <a
          href='https://www.instagram.com/ghofranbenhmaid/'
          className={'transition-colors hover:text-yellow-500'}
          target='_blank'
          rel='noreferrer'>
          Instagram
        </a>
        <a
          href='https://github.com/ghofranebenhmaid'
          className={'transition-colors hover:text-yellow-500'}
          target='_blank'
          rel='noreferrer'>
          GitHub
        </a>
        <a
          href='https://www.behance.net/ghofranebenhmaid'
          className={'transition-colors hover:text-yellow-500'}
          target='_blank'
          rel='noreferrer'>
          Behance
        </a>
      </div>
    </div>
  );
};

export default SocialMediaAccounts;
