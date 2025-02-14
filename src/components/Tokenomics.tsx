import { motion } from 'framer-motion';

const TokenomicsChart = () => {
  const segments = [
    { percent: 80, label: 'Liquidity', color: 'bg-xrp-light' },
    { percent: 15, label: 'Marketing & Dev', color: 'bg-blue-500' },
    { percent: 5, label: 'Team', color: 'bg-purple-500' }
  ];

  let rotation = 0;
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {segments.map((segment, index) => {
        const segmentRotation = rotation;
        rotation += (segment.percent / 100) * 360;
        return (
          <motion.div
            key={segment.label}
            className="absolute inset-0"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: segmentRotation, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div 
              className={`absolute inset-0 ${segment.color}`}
              style={{
                clipPath: `conic-gradient(from 0deg at 50% 50%, currentColor ${segment.percent}%, transparent ${segment.percent}%)`
              }}
            />
          </motion.div>
        );
      })}
      {/* Center hole */}
      <div className="absolute inset-[15%] rounded-full bg-black border-4 border-xrp-light/20 backdrop-blur-sm" />
    </div>
  );
};

const Tokenomics = () => {
  const tokenomicsData = [
    { 
      label: 'Total Supply', 
      value: '100,000',
      description: 'Fixed supply, no minting function',
      color: 'from-xrp-light to-blue-500'
    },
    { 
      label: 'Liquidity', 
      value: '80%',
      description: 'Locked for platform stability',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: 'Marketing & Development', 
      value: '15%',
      description: 'For growth and ecosystem development',
      color: 'from-cyan-500 to-purple-500'
    },
    { 
      label: 'Team', 
      value: '5%',
      description: 'Vested for long-term alignment',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="tokenomics" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/0" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl font-bold mb-4">
            <span className="text-white">Token</span>
            <span className="text-xrp-light">omics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-xrp-light to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Animated Chart */}
          <div className="relative">
            <TokenomicsChart />
            {/* Floating cards */}
            {tokenomicsData.slice(1).map((item, index) => (
              <motion.div
                key={item.label}
                className="absolute hidden lg:block"
                style={{
                  top: `${25 + index * 25}%`,
                  left: index % 2 ? '0' : 'auto',
                  right: index % 2 ? 'auto' : '0',
                }}
                initial={{ opacity: 0, x: index % 2 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="bg-black/50 backdrop-blur-sm border border-xrp-light/20 rounded-lg p-4 max-w-[200px]">
                  <h4 className="font-display text-lg font-semibold text-white mb-1">{item.label}</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-white to-xrp-light bg-clip-text text-transparent">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Details */}
          <div className="space-y-8">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-black/30 backdrop-blur-sm border border-xrp-light/10 rounded-xl p-6 hover:border-xrp-light/30 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-white">{item.label}</h3>
                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-xrp-light bg-clip-text text-transparent">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                  <div className={`h-1 w-full bg-gradient-to-r ${item.color} mt-4 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </motion.div>
            ))}

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-xrp-light/10 backdrop-blur-sm border border-xrp-light/20 rounded-full px-6 py-2">
                <span className="text-sm text-gray-300">Total Supply Verified on XRPL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 