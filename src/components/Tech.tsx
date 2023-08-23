import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../contants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {

  const icons = Object.values(technologies).map((technology) => technology.icon);
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>
          Programming languages, libraries and frameworks i use{" "}
        </p>
        <h2 className={styles.heroHeadText}>Technologies.</h2>
        <p className={'sm:text-[17px] text-[17px] text-secondary tracking-wider w-[70%] mt-6'}>The following objects indicate the various software development tools that I have had the privilege to work with throughout my career. These experiences have provided me with a strong foundation in software engineering and have enabled me to deliver cutting-edge solutions to clients across various industries.</p>
      </motion.div>
      <div className='w-full h-[75vh] mx-auto mt-[30px]'>
          <BallCanvas icons={icons} />
      </div>
      </>
      );
    };
    
    export default SectionWrapper(Tech, "technologies");
