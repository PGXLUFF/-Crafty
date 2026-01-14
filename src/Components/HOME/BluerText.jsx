import React from 'react';
import BlurText from "./Textanime";

const BluerText = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div>
      <BlurText
        text="Elevate your brand with cutting-edge digital marketing strategies. We specialize in SEO, social media management, content creation, and paid advertising. Drive traffic, boost conversions, and maximize ROI. Let's transform your online presence into measurable success today."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[4vw]  sm:p-13 p-4 font-[font2] leading-none:1  text-black"
      />
    </div>
  );
};

export default BluerText;
