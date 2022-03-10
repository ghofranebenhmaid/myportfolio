import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styles from '../styles/Projects.module.scss';

import { FiArrowUpRight } from 'react-icons/fi';

import { ClapButton, Provider, LikeButton } from '@lyket/react';
import NavLink from '../components/ActiveLink';
import useTheme from '../components/useTheme';
import Footer from '../components/Footer';

export const getServerSideProps = async () =>
{
  const res = await fetch(`http://localhost:3000/api/projects`);
  const data = await res.json();
  return {
    props: { projects: data },
  };
};

const projects = ({ projects, router }) =>
{
  const { darkTheme } = useTheme();

  const {
    query: { tab },
  } = router;

  const isTabOne = tab === 'logos' || tab == null;
  const isTabTwo = tab === 'calygraphy';
  const isTabThree = tab === 'web';

  return (
    <>
      <Head>
        <title> About | Portfolio Ghofrane Ben Hmaid </title>
      </Head>
      <NavBar />
      <div className=''>
        <div className='container'>
          <div className={ styles.navTab }>
            <div className={ styles.tabBtn } selected={ isTabOne }>
              <Link href={ { pathname: '/projects', query: { tab: 'logos' } } }>
                <a>Logos</a>
              </Link>
            </div>
            <div className={ styles.tabBtn } selected={ isTabTwo }>
              <NavLink
                href={ { pathname: '/projects', query: { tab: 'calygraphy' } } }
                activeClassName='activeLink'>
                {/* <Link href={ { pathname: "/projects", query: { tab: "calygraphy" } } }> */ }
                <a> Calygraphy</a>
                {/* </Link> */ }
              </NavLink>
            </div>
            <div className={ styles.tabBtn } selected={ isTabThree }>
              <Link href={ { pathname: '/projects', query: { tab: 'web' } } }>
                <a activeClassName='active'>Web</a>
              </Link>
            </div>
          </div>
          <div className='content'>
            { isTabOne && (
              <React.Fragment>
                <div className={ styles.projects }>
                  { projects.map((item) =>
                    item.type === 'logo' ? (
                      <div key={ item.id } className={ styles.centent }>
                        <div className={ styles.image }>
                          <Image
                            alt={ item.title }
                            src={ item.imageUrl }
                            className={ !darkTheme ? styles.logoImage : '' }
                            layout='fill'
                            objectFit='contain'
                            // placeholder='blur'
                            quality={ 100 }
                            priority
                          />
                        </div>
                      </div>
                    ) : null
                  ) }
                </div>
              </React.Fragment>
            ) }
            { isTabTwo && (
              <React.Fragment>
                <div className={ styles.projects }>
                  { projects.map((item) =>
                    item.type === 'calygraphy' ? (
                      <div key={ item.id } className={ styles.centent }>
                        <div className={ styles.image }>
                          <Image
                            alt={ item.title }
                            src={ item.imageUrl }
                            className={ !darkTheme ? styles.calygraphyImage : '' }
                            layout='fill'
                            objectFit='contain'
                            // placeholder='blur'
                            quality={ 100 }
                            priority
                          />
                        </div>
                      </div>
                    ) : null
                  ) }
                </div>
              </React.Fragment>
            ) }
            { isTabThree && (
              <React.Fragment>
                <div className={ styles.web__projects }>
                  { projects.map((item) =>
                    item.type === 'web' ? (
                      <div
                        key={ item.id }
                        className={ (styles.centent, styles.web) }>
                        <div className={ styles.web__image }>
                          <Image
                            alt={ item.title }
                            src={ item.imageUrl }
                            className={ styles.image }
                            // width={ 300 }
                            // height={ 300 }
                            layout='fill'
                            objectFit='cover'
                            // placeholder='blur'
                            quality={ 100 }
                            priority
                          />
                          <span className={ styles.web__bg }>
                            <a
                              href={ `${ item.link }` }
                              target='blank'
                              rel='noopener noreferrer'>
                              <button className={ styles.web__btn }>
                                <p>
                                  { ' ' }
                                  View Case Study <FiArrowUpRight />{ ' ' }
                                </p>
                              </button>
                            </a>
                          </span>

                          <div className={ styles.web__description }>
                            <h4>{ item.title }</h4>
                            <ul>
                              { item.technologies && item.technologies.length > 0
                                ? item.technologies.map((item, index) =>
                                {
                                  return <li key={ index }> { item }</li>;
                                })
                                : 'Loading..' }
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : null
                  ) }
                </div>
              </React.Fragment>
            ) }
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};
export default withRouter(projects);
