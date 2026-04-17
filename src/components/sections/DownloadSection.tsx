import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function DownloadSection() {
  const { t } = useTranslation();

  return (
    <section id="download" className="py-20 md:py-32 bg-gradient-to-b from-[#0c1222] via-[#0a1628] to-[#0c1222] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00d4ff]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066ff]/20 border border-[#0066ff]/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
              <span className="text-[#00d4ff] text-sm font-medium">Disponible ahora</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
            >
              {t('download.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#38bdf8]">
                en tu bolsillo
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-[#94a3b8] mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t('download.subtitle')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group flex items-center justify-center gap-3 bg-white text-[#0c1222] hover:bg-[#f0f9ff] px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-2xl hover:-translate-y-1">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-[#64748b]">Descargar en</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </button>
              
              <button className="group flex items-center justify-center gap-3 bg-white text-[#0c1222] hover:bg-[#f0f9ff] px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-2xl hover:-translate-y-1">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-[#64748b]">Disponible en</div>
                  <div className="text-base font-bold">Play Store</div>
                </div>
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>{t('download.free')}</span>
              </div>
              <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                <span>{t('download.noCreditCard')}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative z-10">
              <div className="w-56 md:w-64 lg:w-72 aspect-[9/19] bg-gradient-to-br from-[#1a2744] to-[#0c1222] rounded-[3rem] p-3 shadow-2xl shadow-[#00d4ff]/20 border border-[#38bdf8]/20">
                <div className="w-full h-full bg-[#0c1222] rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1a2744] to-transparent z-10" />
                  <div className="w-full h-full p-4 pt-12 flex flex-col gap-3">
                    <div className="h-24 bg-gradient-to-r from-[#0066ff]/40 to-[#00d4ff]/40 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">S/ 0</div>
                        <div className="text-xs text-[#00d4ff]">Balance disponible</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-16 bg-[#1a2744] rounded-xl" />
                      <div className="flex-1 h-16 bg-[#1a2744] rounded-xl" />
                    </div>
                    <div className="flex-1 bg-[#1a2744] rounded-xl" />
                    <div className="h-14 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold">+ Nuevo ingreso</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#94a3b8]/30 rounded-full" />
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-4 md:right-0 top-1/4 hidden md:block"
            >
              <div className="w-40 p-4 bg-[#1a2744]/90 backdrop-blur-xl rounded-2xl border border-[#38bdf8]/20 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#0066ff]/30 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">Factura creada</span>
                </div>
                <div className="text-xs text-[#94a3b8]">SUNAT accepted</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-4 md:left-0 bottom-1/4 hidden md:block"
            >
              <div className="w-40 p-4 bg-[#1a2744]/90 backdrop-blur-xl rounded-2xl border border-[#38bdf8]/20 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">+ S/ 150.00</span>
                </div>
                <div className="text-xs text-[#94a3b8]">Ingreso registrado</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}