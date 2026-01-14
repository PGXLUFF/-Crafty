import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img1 from '../../assets/image3/img1.JPEG'
// import img1 from '../../assets/image3/img2.webp'
import img2 from '../../assets/image3/img3.webp'
import img3 from '../../assets/image3/img4.jpg'
import img4 from '../../assets/image3/img5.jpg'
import img5 from '../../assets/image3/img6.webp'
import img6 from '../../assets/image3/img7.webp'
import img7 from '../../assets/image3/img10.jpg'
import img8 from '../../assets/image3/img11.webp'
import img9 from '../../assets/image3/img14.webp'
import img10 from '../../assets/image3/img15.JPEG'
import img11 from '../../assets/image3/img16.JPEG'
import img12 from '../../assets/image3/img17.JPEG'


const products = [
  {
    id: 1,
    image: img1,
    // title: 'Colorful Socks',
    // category: 'Fashion'
  },
  {
    id: 2,
    image: img2,
    // title: 'Adventure Awaits',
    // category: 'Travel'
  },
  {
    id: 3,
    image: img3,
    // title: 'Team Spirit',
    // category: 'Sports'
  },
  {
    id: 4,
    image: img4,
    // title: 'World Cup Jersey',
    // category: 'Sports'
  },
  {
    id: 5,
    image: img5,
    // title: 'Confidence',
    // category: 'Lifestyle'
  },
  {
    id: 6,
    image: img6,
    // title: 'Premium Socks',
    // category: 'Fashion'
  },
  {
    id: 7,
    image: img7,
    // title: 'Old Home',
    // category: 'Vintage'
  },
  {
    id: 8,
    image: img8,
    // title: 'Winter Collection',
    // category: 'Fashion'
  },
  {
    id: 9,
    image: img9,
    // title: 'Brand Ambassador',
    // category: 'Beauty'
  },
  {
    id: 10,
    image: img10,
    // title: 'Golf Apparel',
    // category: 'Sports'
  },
  {
    id: 11,
    image: img11,
    // title: 'Urban Style',
    // category: 'Fashion'
  },
  {
    id: 12,
    image: img12,
    // title: 'Street Fashion',
    // category: 'Lifestyle'
  }
];

function InfiniteCarousel() {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    // Infinite scroll animation for row 1 (left to right)
    const row1Animation = gsap.to(row1, {
      x: '-50%',
      duration: 30,
      ease: 'none',
      repeat: -1
    });

    // Infinite scroll animation for row 2 (right to left)
    const row2Animation = gsap.fromTo(
      row2,
      { x: '-50%' },
      {
        x: '0%',
        duration: 30,
        ease: 'none',
        repeat: -1
      }
    );

    // Pause on hover
    const cards = containerRef.current.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        row1Animation.pause();
        row2Animation.pause();
      });
      card.addEventListener('mouseleave', () => {
        row1Animation.play();
        row2Animation.play();
      });
    });

    return () => {
      row1Animation.kill();
      row2Animation.kill();
    };
  }, []);

  const ProductCard = ({ product }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      const card = cardRef.current;
      const overlay = card.querySelector('.overlay');
      const image = card.querySelector('.card-image');

      card.addEventListener('mouseenter', () => {
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
        gsap.to(image, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(overlay, { opacity: 0, duration: 0.3 });
        gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
      });
    }, []);

    return (
      <div ref={cardRef} className="card">
        <div className="card-inner">
          <img 
            src={product.image} 
            alt={product.title}
            className="card-image"
          />
          <div className="overlay">
            <div className="overlay-content">
              <span className="category">{product.category}</span>
              <h3 className="title">{product.title}</h3>
              <button className="cta-button">View More</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="hero-section">
        <h1 className="hero-title font-[font2]  font-white">WORK</h1>
        <p className="hero-subtitle"></p>
      </div>

      <div className="carousel-row" ref={row1Ref}>
        {[...products.slice(0, 6), ...products.slice(0, 6)].map((product, idx) => (
          <ProductCard key={`row1-${idx}`} product={product} />
        ))}
      </div>

      <div className="carousel-row" ref={row2Ref}>
        {[...products.slice(6, 12), ...products.slice(6, 12)].map((product, idx) => (
          <ProductCard key={`row2-${idx}`} product={product} />
        ))}
      </div>

      <style>{`

        .carousel-container {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
          overflow: hidden;
          padding: 60px 0;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 80px;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 6rem;
          font-weight: 800;
          background-clip: text;
          margin-bottom: 16px;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #888;
          font-weight: 300;
        }

        .carousel-row {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
          will-change: transform;
        }

        .card {
          flex-shrink: 0;
          width: 320px;
          height: 420px;
          cursor: pointer;
        }

        .card-inner {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          will-change: transform;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          padding: 30px;
          transition: opacity 0.3s ease;
        }

        .overlay-content {
          width: 100%;
        }

        .category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #667eea;
          margin-bottom: 8px;
        }

        .title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .card {
            width: 260px;
            height: 340px;
          }

          .title {
            font-size: 1.4rem;
          }

          .carousel-row {
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default InfiniteCarousel
