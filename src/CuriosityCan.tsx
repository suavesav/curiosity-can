import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const wormImages = [
  "/worms/worm1.png",
  "/worms/worm2.png",
  "/worms/worm3.png",
  "/worms/worm4.png",
  "/worms/worm5.png",
  "/worms/worm6.png",
];

export default function CuriosityCan() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Can of Curiosity</h1>
        <p className="mb-8 text-lg text-gray-700">You opened it... now the worms are out!</p>

        <div className="relative w-60 h-60 mx-auto">
          <motion.img
            src="/can.png"
            alt="Curiosity Can"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full absolute bottom-0 z-10"
          />

          <AnimatePresence>
            {open && (
              wormImages.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Worm ${i + 1}`}
                  className="absolute w-12 h-12"
                  initial={{ y: 100, scale: 0 }}
                  animate={{
                    y: [0, -80, 0],
                    x: [0, (Math.random() * 100) - 50, 0],
                    scale: 1,
                  }}
                  transition={{
                    delay: i * 0.3,
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ top: `${100 + Math.random() * 20}px`, left: `${40 + i * 30}px`, zIndex: 20 }}
                />
              ))
            )}
          </AnimatePresence>
        </div>

        <Button className="mt-8" onClick={() => setOpen(!open)}>
          {open ? "Put Worms Back" : "Pop the Can"}
        </Button>
      </div>
    </div>
  );
}
