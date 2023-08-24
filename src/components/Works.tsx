
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../contants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard: React.FC<{project: typeof projects[number], index: number}> = ({project:{name, image, source_code_link, description, tags}, index}) => {
  return <motion.div variants={fadeIn('up','spring', index * 0.5, 0.75)}>
    <Tilt 
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full max-w-[370px]"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} 
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={() => window.open(source_code_link, '_blank')}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
      <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="flex mt-4 flex-wrap gap-2">
          {tags.map((tag) => <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>)}
      </div>
    </Tilt>
  </motion.div>
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)} className="">
        <p className={styles.sectionSubText}>My work </p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex mt-3">
        <motion.p variants={fadeIn('', '', 0.1, 1)}>
        Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 max-[1083px]:justify-center justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-card-${index}`} project={project} index={index}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");