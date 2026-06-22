import { motion } from "framer-motion";
import { alertVariants } from "./alertVariants";

export function SuccessBox() {
  return (
    <motion.div
      variants={alertVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.4 }}
      style={{
        padding: "16px",
        background: "#55efc4",
        borderRadius: "6px"
      }}
    >
      ✅ Operação concluída com sucesso
    </motion.div>
  );
}