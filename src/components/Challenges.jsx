<section className="bg-[#1B1B1B] text-white py-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-[32px] font-semibold leading-tight mb-10">
          The Challenges <br className="hidden md:block" />
          Facing Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.25, // each card fades in sequentially
                ease: 'easeOut',
              }}
              className="relative border-l md:border-l-0 md:border-r border-[#3A3A3A] px-6 pb-6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-auto h-60 mb-2"
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                />

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#CFCFCF] max-w-[260px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </section>