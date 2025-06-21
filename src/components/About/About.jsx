import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum
              tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id
              consequatur atque doloremque!
            </p>
            <p className="mt-4 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
              mollitia.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://thumbs.dreamstime.com/z/person-working-computer-under-palm-tree-tropical-beach-image-presented-84599571.jpg?ct=jpeg"
              alt="Working remotely"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
