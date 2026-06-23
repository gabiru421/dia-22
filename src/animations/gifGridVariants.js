export const gridVariants = {
    hidden: {},
  
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
  
    visible: {
      opacity: 1,
      y: 0
    },
  
    hover: {
      scale: 1.05
    }
  };