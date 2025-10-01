import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface CollapsibleProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
}

export const Collapsible = ({
  className,
  children,
  title,
}: CollapsibleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={className}>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
        className="flex items-center gap-2"
      >
        <p className="text-[32px] font-medium">{title}</p>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isVisible ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <path d="M9 18l6-6-6-6" />
        </motion.svg>
      </motion.button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
