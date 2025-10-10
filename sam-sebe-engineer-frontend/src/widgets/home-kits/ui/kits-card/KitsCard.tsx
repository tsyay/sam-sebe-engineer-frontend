import { motion } from "motion/react";
import { useState } from "react";
import { getImageUrl, useRandom } from "../../../../shared";

interface KitsCardProps {
  title: string;
  description: string;
  image: string;
}

export const KitsCard = ({ title, description, image }: KitsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { int, pick } = useRandom();

  return (
    <motion.div
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className="flex flex-1 flex-col items-center justify-between h-[660px] bg-white rounded-[30px] text-center p-4 m-4"
    >
      <motion.img
        animate={{
          rotate: isVisible ? int(-15, 15) : 0,
        }}
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 50, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        src={getImageUrl(image)}
        alt={title}
        viewport={{ once: true }}
        className="h-3/4 object-contain mb-4"
      />

      <motion.div
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.95,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-4 rounded-[30px]"
      >
        <h4 className="font-semibold text-[36px]">{title}</h4>
        <p className="text-[18px] font-light text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};
