import { motion } from "framer-motion";

const Triangle = ({ color, position, text }) => {
  const variants = {
    hidden: { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)", opacity: 0 },
    visible: { clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)", opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        width: 300,
        height: 300,
        backgroundColor: color,
        clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "black",
        ...position,
      }}
    >
      {text}
    </motion.div>
  );
};

export default Triangle;
