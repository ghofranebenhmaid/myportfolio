import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SocialMediaAccounts from '../components/SocialMedia';
import { ClapButton, Provider, LikeButton } from "@lyket/react";

import styles from '../styles/Home.module.scss';
import Accordion from '../components/Accordion';
import Logo from '../../public/assets/SVG/logo.svg';

export default function Home ()
{
  return (
    <>
      <Head>
        <title>Home | Portfolio Ghofrane Ben Hmaid </title>
      </Head>
      <NavBar />
      <div className={ `${ styles.header } $ container` } >
        <div>
          <Logo className='logo' />
        </div>
        <div>
        <h3 className='title'>Ghofrane Ben Hmaid</h3>
        <p>I’m a skilled and diligent frontend developer with a passion for React and a flair for user interface design.</p>
        </div>
      </div>
      <div className={ styles.hero }>
        <div className={ styles.hero__image }>
          <Image
            alt='...'
            src='/ghofranebenhmaid.jpg'
            className={ styles.imagebg }
            layout='fill'
            objectFit='cover'
            quality={ 100 }
            priority
          />

          <div className={ styles.hero__title }>
            <h3 title="Ghofrane Ben Hmaid">Ghofrane Ben Hmaid</h3>
            <p>Frontend developer</p>

          </div>
          <div className={ styles.hero__like }>
            <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
              {/* <LikeButton
                namespace="my-blog-post"
                id="how-to-beat-me-at-chess"
              /> */}
              {/* <ClapButton id="diy-fish-holder" namespace="post" /> */ }
              {/* <LikeButton
                namespace="my-blog-post"
                id="how-to-beat-me-at-chess"
                component={ LikeButton.templates.Twitter }
              /> */}
            </Provider>

          </div>

          <div className={ styles.hero__social }>
            <SocialMediaAccounts />
          </div>
        </div>
      </div>
      <div className='container' >
        <h1 className='title' id='about'>Hello!</h1>
        <p >
          I’m a skilled and diligent frontend developer with a passion for React
          and a flair for user interface design. I have experience with
          different programming languages and technologies, including HTML, CSS,
          JavaScript, Node.js, Express.js, React, MySQL, Knex.js and
          Git/Bitbucket (Version control) as well as WordPress. I’m also very
          skilled in using Adobe design programs, such as Photoshop,
          Illustrator, InDesign, Lightroom, Premiere Pro, After Effects and 3Ds
          max.
        </p>


        <p>
          I’m educated in IT & Multimedia, and have completed the HackYourFuture
          web-development education program, and have achieved a lot of
          learning-by-doing through the years.
        </p>

        <p>
          I have a broad skillset beside web-development including graphic
          design, user interface design, typography, photo and video editing. In
          my spare time I also enjoy photography and exploring the city and the
          nature.
        </p>

        <h1 className='title'>Skills!</h1>
        <Accordion />

        <p>
          Currently I am working at
          <a href=' https://kglakademi.dk/' target='_blank'>
            <samp className='samp'> The Royal Danish Academy (KADK)</samp>
          </a>
        </p>

        <p id='contact'>
          If you have a project that you'd like to work together on, please
          don't hesitate to get in touch
          <a href='mailto:contact@ghofrane.com' target='_blank'>
            <samp className='samp'> contact@ghofrane.com</samp>
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
}
