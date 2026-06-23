import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GaleriaFavoritos() {
  const [favoritos, setFavoritos] = useState([
    { id: 1, title: "Gato digitando rápido" },
    { id: 2, title: "Cachorro confuso" },
    { id: 3, title: "Panda rolando" }
  ]);

  const removerFavorito = (id) => {
    setFavoritos((prev) =>
      prev.filter((fav) => fav.id !== id)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Meus GIFs Favoritos ❤️</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "30vh"
        }}
      >
        <AnimatePresence>
          {favoritos.map((fav) => (
            <motion.div
              key={fav.id}

              layout

              initial={{
                opacity: 0,
                y: 50
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                scale: 0.8
              }}

              whileHover={{
                scale: 1.05
              }}

              transition={{
                duration: 0.3
              }}

              style={{
                padding: "20px",
                background: "#333",
                color: "white",
                borderRadius: "8px",
                minWidth: "200px"
              }}
            >
              <p>{fav.title}</p>

              <button
                onClick={() => removerFavorito(fav.id)}
              >
                ❌ Remover
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}