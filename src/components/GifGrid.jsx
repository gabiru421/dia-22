import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { gridVariants } from "../animations/gifGridVariants";
import { GifItem } from "./GifItem";

export function GifGrid({ gifs }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true
  });

  return (
    <motion.div
      ref={ref}
      className="gif-grid"
      variants={gridVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {gifs.map((gif) => (
        <GifItem
          key={gif.id}
          gif={gif}
        />
      ))}
    </motion.div>
  );
}