/**
 * LoadingOverlay.tsx
 * ==================
 * Pantalla de carga minimalista con spinner estilo Microsoft (16 dots).
 * Muestra progreso de carga sin texto, solo iconografía y animaciones.
 * 
 * @features
 * - Spinner circular de 16 dots con iluminacion secuencial
 * - Iconos de financiera con opacidad animada
 * - Fondo con orbe sutil animado
 * - Exit animation con fade-out
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, PieChart, TrendingUp, DollarSign } from 'lucide-react';

// =============================================================================
// CONSTANTES
// =============================================================================
const LOADING_DURATION = 1500;
const DOT_COUNT = 16;
const DOT_RADIUS = 30;
const SVG_SIZE = 80;

const icons = [Wallet, PieChart, TrendingUp, DollarSign];

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================
export function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // -------------------------------------------------------------------------
  // EFECTO: Control de progreso y temporizador de carga
  // -------------------------------------------------------------------------
  useEffect(() => {
    const interval = 20;
    const steps = LOADING_DURATION / interval;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(progressTimer);
      }
    }, interval);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // -------------------------------------------------------------------------
  // RENDER: Overlay completo
  // -------------------------------------------------------------------------
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          {/* Fondo con orbe animado */}
          <BackgroundOrb />

          {/* Contenido centrado */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <Spinner16Dots progress={progress} />
            <IconRow />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// =============================================================================
// SUB-COMPONENTES
// =============================================================================

/**
 * BackgroundOrb
 * ------------
 * Orbe decorativo animado en el fondo.
 * Proporciona profundidad visual sin distraer.
 */
function BackgroundOrb() {
  return (
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full"
      style={{
        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
        filter: 'blur(100px)',
        opacity: 0.15
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/**
 * Spinner16Dots
 * ------------
 * Spinner estilo Microsoft: 16 dots en circulo.
 * Los dots se iluminan secuencialmente segun el progreso (0-100%).
 * 
 * @param {number} progress - Porcentaje de carga (0-100)
 */
function Spinner16Dots({ progress }: { progress: number }) {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="w-full h-full">
        {Array.from({ length: DOT_COUNT }).map((_, i) => {
          const angle = (i * (360 / DOT_COUNT) - 90) * (Math.PI / 180);
          const x = 40 + DOT_RADIUS * Math.cos(angle);
          const y = 40 + DOT_RADIUS * Math.sin(angle);
          const isActive = (i / DOT_COUNT) * 100 <= progress;

          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill={isActive ? 'var(--color-accent)' : 'var(--color-border)'}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: isActive ? [0.5, 1, 0.5] : 0.3,
              }}
              transition={{
                duration: 0.6,
                repeat: isActive ? Infinity : 0,
                delay: isActive ? i * (1 / DOT_COUNT) : 0,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/**
 * IconRow
 * -------
 * Fila de iconos de financiera con opacidad secuencial.
 * Representa el dominio de la app (finanzas).
 */
function IconRow() {
  return (
    <div className="flex items-center gap-4">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: index * 0.2,
            ease: 'easeInOut',
          }}
        >
          <Icon
            size={18}
            className="text-[var(--color-accent)]"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
    </div>
  );
}