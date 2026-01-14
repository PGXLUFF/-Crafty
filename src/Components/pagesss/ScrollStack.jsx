import React from 'react';
import ScrollReveal from './ScrollStackItem';

function ScrollStack() {
  return (
    <div className="h-full bg-white px-8 py-6">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0 }
        blurStrength={10}
        containerClassName="w-full "
        textClassName="text-slate-800"
      >
       At craftysocials, we don’t just run campaigns — we craft stories that connect, engage, and convert. In today’s fast-moving digital world, creativity and strategy must work hand in hand. Our team of digital experts and creative thinkers build data-driven strategies that elevate your brand across every platform — from social media and SEO to paid ads and influencer marketing. We help startups scale, businesses grow, and brands become unforgettable through authentic storytelling and innovative digital experiences. Whether it’s crafting viral social campaigns, designing conversion-focused websites, or optimizing your online presence, craftysocials ensures your brand stands out in the crowded digital space. We believe every post, click, and impression should spark meaningful engagement and real results. Your growth is our mission — and we’re here to make it happen, one crafted idea at a time.
      </ScrollReveal>
    </div>
  );
}

export default ScrollStack;