import { motion } from 'framer-motion';
import { FaTelegram } from 'react-icons/fa';

const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className="w-6 h-6 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-xrp-blue">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,180,255,0.15),transparent_70%)]" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-xrp-light/5"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              borderRadius: '40%',
              left: `${20 + i * 15}%`,
              top: `${40 + i * 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
          <svg 
            className="relative block w-full h-12 md:h-24" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-black"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  BEST on <span className="text-xrp-light">XRPL</span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-xrp-light to-transparent" />
              </motion.div>
              <p className="text-gray-400 leading-relaxed">
                Join the revolution of decentralized finance on the XRP Ledger. 
                Building the future of financial freedom, one block at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="font-display text-xl font-semibold text-white">Quick Links</h4>
                {['About', 'Roadmap'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-xrp-light transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Community Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="font-display text-xl font-semibold text-white mb-6">Join Community</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://t.me/BESTonXRP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-xrp-light rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative bg-black/30 backdrop-blur-sm border border-xrp-light/20 p-4 rounded-lg">
                      <FaTelegram className="text-2xl text-xrp-light" />
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://x.com/bestonxrp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-xrp-light rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative bg-black/30 backdrop-blur-sm border border-xrp-light/20 p-4 rounded-lg">
                      <XIcon />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-xrp-light/10 text-center"
          >
            <p className="text-gray-400">
              &copy; {currentYear} BEST on XRPL. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 