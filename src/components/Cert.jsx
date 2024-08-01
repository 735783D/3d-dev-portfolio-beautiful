import React from 'react'

import { CertBallCanvas, CertBallCanvas2 } from './canvas'
import { SectionWrapper } from '../hoc'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Cert = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My collection</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>

        <div className='w-full flex'>
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            The following certifications are a just a small list of what I have achieved over 
            the last few years. There are a lot more that I did not list as they have expired.
            But they do include certifications from the EC-Council for ethical hacking, Splunk 
            for security monitoring, Dell/EMC for data science, and Cisco Systems for networking.
        </motion.p>
        </div>

        <div className='rowC'>
            <CertBallCanvas/>
            <CertBallCanvas2/>
         </div>
    </>
    )
}

export default SectionWrapper (Cert, "") 