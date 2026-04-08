import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, PieChart, TrendingUp, DollarSign } from 'lucide-react';

export function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const icons = [Wallet, PieChart, TrendingUp, DollarSign];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[#0c1222] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              {icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon 
                    size={index === 1 ? 32 : 28} 
                    className="text-[#00d4ff]" 
                    strokeWidth={1.5}
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold text-white tracking-wide"
              >
                Smart Finance
              </motion.h1>
              
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[#00d4ff] rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}