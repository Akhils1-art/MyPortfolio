import { useRef } from "react";
import styled from "styled-components"
import { BiRightArrow } from "react-icons/bi";
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";

import { Title } from "./Title";

export const About = () => {
  
  const ref = useRef();
  const control = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px end", "75% start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if(val>0 && val<1){
        document.querySelector('.about-me').classList.add('is-active');
        control.start('visible');
    } else {
        document.querySelector('.about-me').classList.remove('is-active');
        control.start('hidden');
    }
  });

  return (
    <Container 
        as={motion.div} 
        variants={{
            visible: {opacity: 1, transition: {duration: .25, ease: "easeInOut"}},
            hidden: {opacity: 0, transition: {duration: .1, ease: "easeInOut"}}
        }}
        animate={control}
        initial={{opacity: 0}} 
        ref={ref} 
        className='container'
        id='about-me'
    >
        <Title title='Who am I?'/>
        <div className="details">
            <div className="image">
                <img
                    src={'https://drive.google.com/uc?export=view&id=1e5GdcvyXdCAPDpzrXrWtsLWAWhscIYma'} alt={'profile'}
                />
            </div>
            <div className="about">
                <p>
                    My name is Sohil Gupta, and I am currently pursuing a degree in Information Technology (almost complete 🙂). 
                    I have a keen interest in Problem Solving, Web Development, and Software Development, and have been learning about these topics for the past four years.
                    Although I am not yet an expert, I have gained a solid foundation in various areas of computer science, 
                    starting from my first program in 2019 to more advanced topics like Machine Learning.
                </p>
                
                <p>
                    I am currently working on personal projects to further enhance my skills in technology. 
                    I am committed to continuous learning and improvement, 
                    and am excited to see where my journey in the field of computer science will take me.
                </p>
                
                <p> Here is my educational background: </p>
                
                <ul className="education">
                    <li className="education-li">
                        <h4>Information Technology</h4>
                        <span>Dr. AITH | (2020 - 2024)</span>
                        <ul>
                            <li><BiRightArrow className="bullet"/> Studied Computer fundamentals like programming, DBMS, OS,CN, etc.</li>
                            <li><BiRightArrow className="bullet"/> Got 7.5 CGPA out of 10 till now.</li>
                            
                        </ul>
                    </li>
                    <li className="education-li">
                        <h4>Higher Secondary Eduction</h4>
                        <span>St. Mary's Senior Secondary School | (2019 - 2020)</span>
                        <ul>
                            <li><BiRightArrow className="bullet"/> Studied Physics, Maths and Chemistry.</li>
                            <li><BiRightArrow className="bullet"/> Scored 89.6% in the board examination.</li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    .about{
        font-size: 1.175em;
        letter-spacing: normal;
        width: 55%;
        opacity: .7;
        p{margin-bottom: .75em;}
        display: inline-block;

        @media (max-width: 960px) {
            width: 100%;
        }

        @media (max-width: 500px) {
           text-align: justify;
           font-size: .9em;
        }
    }

    .education{
        h4{
            font-weight: 500;
            color: #76b687;
        }

        @media (max-width: 960px) {
            margin-left: 1.75em;
        }

        @media (max-width: 600px) {
            margin-left: 0;
        }

        @media (max-width: 500px) {
            text-align: left;
            font-size: .8em;
        }

        span{ 
            font-size: 0.85em; 
            @media screen {
                font-size: .75em;
            }

        }
        .education-li{ 
            margin-bottom: 1em; 
            ul{ margin-top: .5em; }
        }
    }

    .details{
        padding: 1em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .image{
        border-radius: 10px;
        margin-top: 2.5em;
        margin-left: 2em;
        contain: content;
        height: 225px;

        @media (max-width: 960px) {
            display: block;
            margin-bottom: 2em;
            margin-inline: auto;
            margin-top: 1em;
        }
    }
`;