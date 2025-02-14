import { motion } from "framer-motion";
import { FaShieldAlt, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Security",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaUsers,
      title: "Community",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaChartLine,
      title: "Growth",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Hexagon Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-4 transform rotate-12">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square"
                >
                  <div className="w-full h-full bg-xrp-light/10 backdrop-blur-sm border border-xrp-light/20 rounded-xl transform hover:rotate-45 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
          </motion.div>

          {/* Right side - Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="h-1 bg-xrp-light mb-2"
                />
                <h2 className="font-display text-5xl font-bold text-white">
                  Revolutionizing
                  <span className="block text-xrp-light">DeFi on XRPL</span>
                </h2>
              </div>

              <div className="prose prose-invert">
                <p className="text-lg text-gray-300 leading-relaxed">
                  BEST on XRPL represents the pinnacle of financial innovation
                  on the XRP Ledger. We're building the future of decentralized
                  finance, leveraging the speed, efficiency, and reliability of
                  the XRPL network.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative p-4 border border-xrp-light/20 rounded-xl backdrop-blur-sm">
                      <feature.icon className="text-2xl text-xrp-light mb-3" />
                      <h3 className="font-display text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <div className="h-1 w-8 bg-gradient-to-r from-xrp-light to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
