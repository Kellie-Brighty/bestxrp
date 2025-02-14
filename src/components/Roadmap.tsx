import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Launch & Foundation',
      icon: FaRocket,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Token Launch on XRPL',
        'Community Building',
        'Website Launch',
        'Social Media Presence'
      ],
      status: 'completed'
    },
    {
      phase: 'Phase 2',
      title: 'Growth & Development',
      icon: FaChartLine,
      color: 'from-cyan-500 to-green-500',
      items: [
        'Strategic Partnerships',
        'Marketing Campaigns',
        'Community Events',
        'Exchange Listings'
      ],
      status: 'in-progress'
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      icon: FaUsers,
      color: 'from-green-500 to-yellow-500',
      items: [
        'Platform Development',
        'Utility Expansion',
        'Global Marketing',
        'Major Exchange Listings'
      ],
      status: 'upcoming'
    },
    {
      phase: 'Phase 4',
      title: 'Global Adoption',
      icon: FaGlobe,
      color: 'from-yellow-500 to-red-500',
      items: [
        'Worldwide Expansion',
        'Cross-Chain Integration',
        'Advanced Features',
        'Ecosystem Growth'
      ],
      status: 'upcoming'
    }
  ];

  return (
    <section id="roadmap" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,255,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl font-bold mb-4">
            <span className="text-white">Road</span>
            <span className="text-xrp-light">map</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-xrp-light to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-xrp-light via-xrp-light/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'lg:text-right' : ''
                }`}>
                  {/* Phase content */}
                  <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="relative bg-black/30 backdrop-blur-sm border border-xrp-light/10 rounded-xl p-8 hover:border-xrp-light/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                          <phase.icon className="text-3xl text-xrp-light" />
                          <div>
                            <h3 className="font-display text-2xl font-bold text-white">{phase.phase}</h3>
                            <p className="text-xrp-light">{phase.title}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-3">
                          {phase.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + (i * 0.1) }}
                              className="flex items-center gap-3 text-gray-300"
                            >
                              <div className="w-2 h-2 rounded-full bg-xrp-light" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Status indicator */}
                        <div className="mt-6 flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            phase.status === 'completed' ? 'bg-green-500' :
                            phase.status === 'in-progress' ? 'bg-yellow-500' :
                            'bg-gray-500'
                          } animate-pulse`} />
                          <span className="text-sm text-gray-400 capitalize">{phase.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-xrp-light relative"
                    >
                      <div className="absolute inset-0 bg-xrp-light rounded-full animate-ping opacity-25" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 