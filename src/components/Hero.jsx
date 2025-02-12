import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-20 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          TEDx
          <span className="text-ted-red">AKGEC</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Ideas Worth Spreading
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-ted-red text-white px-8 py-3 rounded-full text-lg font-medium"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;