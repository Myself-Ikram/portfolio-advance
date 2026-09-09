import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";

interface TransitionContextType {
  navigateWithTransition: (to: string, label: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [transitionLabel, setTransitionLabel] = useState<string | null>(null);

  const navigateWithTransition = (to: string, label: string) => {
    if (location.pathname === to) return;

    setTransitionLabel(label);

    // Navigate after a short hold so the Preloader covers the screen first.
    // Preloader calls onComplete() after ~750ms which clears the label.
    setTimeout(() => {
      navigate(to);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 600);
  };

  const handleTransitionComplete = () => {
    setTransitionLabel(null);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {/*
       * Reuse the exact same Preloader component with an optional `label` prop.
       * When label is set, Preloader skips the Hello cycle and shows the page name.
       * The SVG curve, slide-up exit — all identical to the initial load preloader.
       */}
      <AnimatePresence>
        {transitionLabel && (
          <Preloader
            key={transitionLabel + "-transition"}
            label={transitionLabel}
            onComplete={handleTransitionComplete}
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};
