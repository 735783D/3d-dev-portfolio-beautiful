import React from 'react'

import { BallCanvas, CertBallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My learnings</p>
            <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                I have experience working with the following technologies and tools. 
                I have gained a deep understanding of them
                not only in my personal projects, but also in my work. I find them extremely 
                useful when it comes to doing projects that I am passionate about.
            </motion.p>
        </div>
        <BallCanvas/>
    </>
    )
}

export default SectionWrapper (Tech, "") 