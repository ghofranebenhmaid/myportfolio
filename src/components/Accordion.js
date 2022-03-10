
import React, { useState } from 'react';
import styles from '../styles/Accordion.module.scss';

import { FiCheck, FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";


const Data = [
    {
        id: 1,
        title: 'HTML',
        discreption: ['Semantic HTML5', 'Forms', 'Markdown', 'HTML Attributes'],
        // bgColor: '   #ecd1ae  ',
        // Color: '   #ecb45f ',

    },
    {
        id: 2,
        title: 'CSS',
        discreption: ['BEM', 'SASS', 'Sass Module System', 'Responsive Web Design', 'flex and grid', 'Animations, variables', 'styled-components'],
        // bgColor: ' #8b7fba',
        // Color: ' #523aaf ',


    },
    {
        id: 3,
        title: 'JavaScript',
        discreption: ['JavaScript ES6 + features', 'JS: Local storage', 'Loops, functions, class', 'Fetch API', 'Arrays, objects, prototypes'],
        // bgColor: ' #ecd1ae',
        // Color: ' #d3a870',


    },
    {

        id: 4,
        title: 'React',
        discreption: ['React Hooks', 'React router', 'Communication with REST API', 'Styling components', 'Component life cycle (class and hooks)', 'Formik', 'Building the interface', 'Design tools and form handling', 'Solving the most common problems with React'],
        // bgColor: ' #def7fe ',
        // Color: ' #6bd8f7 ',

    },
    {
        id: 5,
        title: 'Next js',
        discreption: ['I just recreate my portfolio with Nextjs',],
        // bgColor: ' #def7fe ',
        // Color: ' #6bd8f7 ',

    },
    {
        id: 6,
        title: 'Animation',
        discreption: ['Lottie (JSON)', '@keyframes ', 'Css transitions', 'Adobe After Effects (Lottie)'],
        // bgColor: ' #def7fe ',
        // Color: ' #6bd8f7 ',

    },
    {
        id: 7,
        title: 'Software',
        discreption: ['VS Code', 'Figma', 'Adobe After Effects', 'Adobe Illustrator', 'Adobe Photochop', 'Adobe XD', 'Adobe InDesign', 'Maya Software', '3Ds Max', 'Unity'],
        // bgColor: ' #55a592 ',
        // Color: '  #a1c0b9  ',


    },
    {
        id: 8,

        title: 'Version Control',
        discreption: ['Git'],
        // bgColor: ' #55a592 ',
        // Color: '  #a1c0b9  ',

    },
    {
        id: 9,
        title: 'Design',
        discreption: ['Logos', 'Typography', 'Web Design', 'Graphic Design'],
        // bgColor: ' #55a592 ',
        // Color: '  #a1c0b9  ',

    },

];

function Accordion ()
{
    const [clicked, setClicked] = useState(false);

    const toggle = (index) =>
    {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };
    return (
        <div>
            <div className={ styles.accordion }>
                < div className={ styles.container } >
                    { Data.map((item, index) =>
                    {
                        return (
                            <div>
                                <div className={ styles.wrap }
                                    onClick={ () =>
                                    {
                                        toggle(index);
                                    } }
                                    key={ item.id }
                                    style={ { backgroundColor: item.bgColor } }
                                >
                                    <h2
                                        style={ { color: item.Color } }

                                    > { item.title }</h2>

                                    <h5> { clicked === index ? <FiArrowUpRight /> : <FiArrowDownRight /> }</h5>
                                </div>
                                {
                                    clicked === index ? (
                                        <div className={ styles.dropdown }
                                            style={ { backgroundColor: item.bgColor } }
                                        >
                                            { item.discreption.map((element, index) =>
                                            {
                                                return (

                                                    <li key={ index } ><FiCheck /> <p> { element }</p> </li>
                                                )
                                            }) }
                                        </div>
                                    ) : null
                                }
                            </div>
                        );
                    }) }

                </div>
            </div>
        </div >
    );
}


export default Accordion;