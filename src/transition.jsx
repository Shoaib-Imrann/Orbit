import { motion } from 'framer-motion';

const transition = (OgComponent) => {
    return () =>(
      <>
      <OgComponent />
        <motion.div
          className='slide-in z-50'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: [0.32, 1, 0.56, 1] }}
        >
        </motion.div>
        <motion.div
          className='slide-out z-50'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 2, ease: [0.32, 1, 0.56, 1] }}
        />
      </>
    );
};

export default transition;