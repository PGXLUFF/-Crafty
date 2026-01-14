import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const faqData = {
  "Digital Marketing": [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by channel. Paid advertising can generate immediate traffic and leads, while SEO typically takes 3-6 months to show significant results. Social media growth is gradual, usually taking 2-4 months of consistent posting. Content marketing builds momentum over time. The key is patience, consistency, and continuous optimization."
    },
    {
      question: "What's the best way to learn React?",
      answer: "The best way to start with digital marketing is by defining your target audience and business goals. Begin with a strong online presence through a website and social media profiles. Focus on one or two channels initially, learn the fundamentals of content marketing and SEO, and analyze your results regularly. Start small, test strategies, and scale what works!"
    },
    {
      question: "Is social media marketing effective for B2B companies?",
      answer: "Absolutely! Social media marketing is highly effective for B2B companies, especially on platforms like LinkedIn, Twitter, and YouTube. It helps build brand authority, generate leads, and nurture relationships with decision-makers. B2B social media focuses on thought leadership, industry insights, and demonstrating expertise rather than direct selling."
    },
    {
      question: " How long does it take to see results from digital marketing?",
      answer: "Organic digital marketing focuses on building visibility naturally through SEO, content marketing, and social media engagement without paying for ads. Paid digital marketing involves investing in advertisements like Google Ads, Facebook Ads, and sponsored content to reach your audience quickly. Both strategies complement each other for optimal results."
    }
  ],
  "Web Development ": [
    {
      question: "What makes a marketing website different from a regular website?",
      answer: "A marketing website is designed to attract visitors, generate leads, and convert them into customers. It focuses on UX, speed, SEO, mobile responsiveness, and clear call-to-actions (CTAs)."
    },
    {
      question: "Why is responsive design important for marketing websites?",
      answer: "Most users browse on mobile devices. A responsive site ensures all users have a seamless experience, increasing engagement and conversion rates."
    },
    {
      question: "How does website speed affect marketing performance?",
      answer: "Faster websites reduce bounce rates, improve user experience, and positively impact SEO rankings. Marketing campaigns perform better when landing pages load quickly."
    },
    {
      question: "Can modern marketing websites integrate with analytics tools?",
      answer: "Yes! Tools like Google Analytics, Hotjar, or Mixpanel can track user behavior, measure conversions, and provide insights for improving marketing strategies."
    }
  ],
  "SEO": [
    {
      question: "What is local SEO and why is it important for businesses?",
      answer: "Local SEO helps businesses appear in local search results like Google Maps and “near me” searches. It’s vital for attracting nearby customers and driving foot traffic."
    },
    {
      question: "How often should I update my website content for SEO?",
      answer: "Regular updates, like blog posts, case studies, or landing page improvements, signal relevance to search engines and keep your website competitive."
    },
    {
      question: "How does SEO affect marketing campaigns?",
      answer: "SEO improves organic visibility, reduces dependency on paid ads, and complements marketing campaigns by driving targeted traffic that’s more likely to convert."
    },
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. Some improvements may be visible in a few weeks, but significant results usually take 3–6 months, depending on competition and content quality"
    },
  ],
  "Editing": [
    {
      question: "What is color grading in video editing?",
      answer: "Color grading enhances the mood and style of a video by adjusting tones, contrast, and saturation to create a specific visual look."
    },
    {
      question: "What makes a marketing video effective?",
      answer: "A strong marketing video grabs attention in the first few seconds, includes a clear message, uses brand visuals, and ends with a call-to-action (CTA)."
    },
    {
      question: "Which software is best for video editing?",
      answer: "Professionals often use Adobe Premiere Pro, DaVinci Resolve, or Final Cut Pro. Beginners and social media creators prefer tools like CapCut, VN, or Canva Video."
    },
    {
      question: "How do designers ensure graphics are SEO-friendly?",
      answer: "By using descriptive file names, alt text, proper image sizes, and optimized file formats to improve website performance and visibility."
    }
  ],
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("React JS");
  const [openQuestion, setOpenQuestion] = useState(null); // Tracks which question is open
  const answerRefs = useRef([]); // To get references to answer content for GSAP animation
  const qRefs = useRef([]); // To get references to question items for GSAP stagger

  useEffect(() => {
    // Stagger animation for questions when category changes
    gsap.fromTo(qRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );
  }, [activeCategory]);


  const toggleQuestion = (index) => {
    // Close the currently open question if it's the same one
    if (openQuestion === index) {
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => setOpenQuestion(null)
      });
    } else {
      // If another question is open, close it first
      if (openQuestion !== null) {
        gsap.to(answerRefs.current[openQuestion], {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
      // Then open the new question
      setOpenQuestion(index);
    }
  };

  useEffect(() => {
    // Animate the opening of the answer when openQuestion changes
    if (openQuestion !== null && answerRefs.current[openQuestion]) {
      gsap.fromTo(answerRefs.current[openQuestion],
        { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
        {
          height: "auto",
          opacity: 1,
          paddingTop: "16px", // Corresponds to p-4 (16px) or similar
          paddingBottom: "16px",
          duration: 0.4,
          ease: "power2.inOut",
          clearProps: "height" // Remove height property after animation to allow content to naturally expand/shrink
        }
      );
    }
  }, [openQuestion]);


  return (
    <section className="min-h-screen flex flex-col items-center pt-10 pb-20 px-4 bg-darkBackground text-textLight">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-10 md:mb-16 text-textLight leading-tight">
        Frequently Asked Questions
      </h1>

      <div className="flex justify-center gap-3 sm:gap-4 mb-10 flex-wrap">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            className={`
              relative text-lg font-medium py-2 px-4 sm:px-5 cursor-pointer
              transition-colors duration-300 ease-in-out
              ${activeCategory === category ? 'text-accent' : 'text-textMuted hover:text-textLight'}
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-accent
              after:transition-all after:duration-300 ease-in-out
              ${activeCategory === category ? 'after:w-full after:left-0' : ''}
            `}
            onClick={() => {
              setActiveCategory(category);
              setOpenQuestion(null); // Close any open question when category changes
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1  gap-5 md:gap-6 w-full max-w-6xl mt-8">
        {faqData[activeCategory] && faqData[activeCategory].map((item, index) => (
          <div
            key={index}
            ref={el => qRefs.current[index] = el} // Ref for question items
            className={`
              bg-cardBackground border border-borderColor rounded-xl text-left overflow-hidden
            `}
          >
            <button
              className="flex justify-between items-center w-full bg-transparent border-none text-textLight text-lg font-medium p-5 cursor-pointer transition-colors duration-300 hover:bg-white/[0.05]"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span className={`ml-4 text-sm transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180 text-accent' : ''}`}>
                ▼
              </span>
            </button>
            <div
              ref={el => answerRefs.current[index] = el} // Ref for answer content
              className="px-5 text-textMuted leading-relaxed text-base text-justify"
              style={{
                height: openQuestion === index ? 'auto' : 0,
                opacity: openQuestion === index ? 1 : 0,
                paddingTop: openQuestion === index ? '16px' : 0, // Corresponds to p-4 (16px)
                paddingBottom: openQuestion === index ? '16px' : 0,
                overflow: 'hidden' // Important for height animation
              }}
            >
              <p className="m-0">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;