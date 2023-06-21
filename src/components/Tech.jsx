import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Languages and Frameworks</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-row flex-wrap justify-center gap-10 mt-5"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-secondary text-center">{technology.name}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
