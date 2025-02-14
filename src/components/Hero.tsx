import { motion } from 'framer-motion';
import { FaArrowRight, FaCopy } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "rHj11mPuMVXYSeexchRY8ixfQyBQckHFqy";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen relative flex items-center pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-xrp-blue/20 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-xrp-light rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-xrp-light to-transparent" />
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white">Discover</span>
              <span className="animate-gradient bg-gradient-to-r from-white via-xrp-light to-white bg-clip-text text-transparent">
                BEST on XRPL
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 font-light tracking-wide mb-6 max-w-xl">
              Your best route to financial freedom on the XRP Ledger. 
              Join the revolution of decentralized finance.
            </p>

            {/* Contract Address */}
            <motion.div 
              className="mb-12 relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-xrp-light/20">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Contract Address</p>
                  <p className="font-mono text-sm text-gray-200 break-all">{contractAddress}</p>
                </div>
                <motion.button
                  onClick={handleCopy}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCopy className="text-xrp-light text-xl" />
                  {/* Tooltip */}
                  <span 
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap transition-opacity ${
                      copied ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Copied!
                  </span>
                </motion.button>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-6">
              <motion.a
                href="https://t.me/BESTonXRP"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-display bg-xrp-light/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-xrp-light hover:bg-xrp-light hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Community
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                className="font-display bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 -left-10 -top-10 bg-gradient-to-br from-xrp-light/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-0 -right-10 -bottom-10 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />
            
            {/* Image container */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-xrp-light/20 backdrop-blur-sm">
                <img 
                  src="/best-two.jpg" 
                  alt="BEST Token" 
                  className="w-full aspect-square object-cover transform scale-110 hover:scale-100 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-xrp-light rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-xrp-light rounded-bl-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 