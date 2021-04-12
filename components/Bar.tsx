import { FunctionComponent } from "react";
import { Skill } from "../types";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {
  const bar_width = `${level}`;

  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "string",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-200 rounded-full">
      <motion.div 
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        style={{ width: bar_width, }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;