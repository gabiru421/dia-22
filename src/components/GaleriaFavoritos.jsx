import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GaleriaFavoritos() {
  const [favoritos, setFavoritos] = useState([
    { id: 1, title: "Gato digitando rápido", gifUrl: "" },
    { id: 2, title: "Cachorro confuso", gifUrl: "" },
    { id: 3, title: "Panda rolando", gifUrl: "" }
  ]);

  const buscarGif = async (query) => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1`
    );

    const data = await res.json();

    return data.data[0]?.images?.downsized?.url;
  };

  useEffect(() => {
    const carregarGifs = async () => {
      const atualizados = await Promise.all(
        favoritos.map(async (fav) => {
          const gifUrl = await buscarGif(fav.title);
          return { ...fav, gifUrl };
        })
      );

      setFavoritos(atualizados);
    };

    carregarGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removerFavorito = (id) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Meus GIFs Favoritos ❤️</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          minHeight: "100vh",
          alignItems: "flex-start"
        }}
      >
        <AnimatePresence>
          {favoritos.map((fav) => (
            <motion.div
              key={fav.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: "20px",
                background: "#333",
                color: "white",
                borderRadius: "8px",
                width: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <p>{fav.title}</p>

              {fav.gifUrl && (
                <img
                  src={fav.gifUrl}
                  alt={fav.title}
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginTop: "10px"
                  }}
                />
              )}

              <button
                onClick={() => removerFavorito(fav.id)}
                style={{ marginTop: "10px" }}
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