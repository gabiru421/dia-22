import { motion } from "framer-motion";
import { itemVariants } from "../animations/gifGridVariants";

export function GifItem({ gif }) {
  return (
    <motion.div
      className="gif-item"
      variants={itemVariants}
      whileHover="hover"
    >
      <img src={gif.url} alt={gif.title} />

      <h3>{gif.title}</h3>
    </motion.div>
  );
}