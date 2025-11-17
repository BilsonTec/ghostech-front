// @ts-nocheck
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AnimatedCarousel.css';

const data = [
  {
    place: 'Switzerland Alps',
    title: 'SAINT',
    title2: 'ANTONIEN',
    description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
    image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
  },
  {
    place: 'Japan Alps',
    title: 'NANGANO',
    title2: 'PREFECTURE',
    description: 'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
    image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg'
  },
  {
    place: 'Sahara Desert - Morocco',
    title: 'MARRAKECH',
    title2: 'MEROUGA',
    description: 'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
    image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg'
  },
  {
    place: 'Sierra Nevada - USA',
    title: 'YOSEMITE',
    title2: 'NATIONAL PARK',
    description: 'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
    image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg'
  },
  {
    place: 'Tarifa - Spain',
    title: 'LOS LANCES',
    title2: 'BEACH',
    description: 'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
    image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg'
  },
  {
    place: 'Cappadocia - Turkey',
    title: 'Göreme',
    title2: 'Valley',
    description: 'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
    image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg'
  },
];

const AnimatedCarousel = () => {
  const demoRef = useRef(null);
  const slideNumbersRef = useRef(null);
  const detailsEvenRef = useRef(null);
  const detailsOddRef = useRef(null);
  const paginationRef = useRef(null);
  const progressForegroundRef = useRef(null);
  const indicatorRef = useRef(null);
  const coverRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    let order = [0, 1, 2, 3, 4, 5];
    let detailsEven = true;
    let clicks = 0;

    const offsetTop = 200;
    const offsetLeft = 700;
    const cardWidth = 200;
    const cardHeight = 300;
    const gap = 40;
    const numberSize = 50;
    const ease = "sine.inOut";

    const getCard = (index) => `#card${index}`;
    const getCardContent = (index) => `#card-content-${index}`;
    const getSliderItem = (index) => `#slide-item-${index}`;

    const animate = (target, duration, properties) => {
      return new Promise((resolve) => {
        gsap.to(target, {
          ...properties,
          duration: duration,
          onComplete: resolve,
        });
      });
    };

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadImages = () => {
      const promises = data.map(({ image }) => loadImage(image));
      return Promise.all(promises);
    };

    const init = () => {
      const [active, ...rest] = order;
      const detailsActive = detailsEven ? detailsEvenRef.current : detailsOddRef.current;
      const detailsInactive = detailsEven ? detailsOddRef.current : detailsEvenRef.current;
      const { innerHeight: height, innerWidth: width } = window;

      gsap.set(paginationRef.current, {
        top: offsetTop + 330,
        left: offsetLeft,
        y: 200,
        opacity: 0,
        zIndex: 60,
      });
      
      gsap.set(navRef.current, { y: -200, opacity: 0 });

      gsap.set(getCard(active), {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
      gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
      gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
      gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
      gsap.set(`${detailsInactive} .text`, { y: 100 });
      gsap.set(`${detailsInactive} .title-1`, { y: 100 });
      gsap.set(`${detailsInactive} .title-2`, { y: 100 });
      gsap.set(`${detailsInactive} .desc`, { y: 50 });
      gsap.set(`${detailsInactive} .cta`, { y: 60 });

      gsap.set(progressForegroundRef.current, {
        width: 500 * (1 / order.length) * (active + 1),
      });

      rest.forEach((i, index) => {
        gsap.set(getCard(i), {
          x: offsetLeft + 400 + index * (cardWidth + gap),
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
        });
        
        gsap.set(getCardContent(i), {
          x: offsetLeft + 400 + index * (cardWidth + gap),
          zIndex: 40,
          y: offsetTop + cardHeight - 100,
        });
        
        gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
      });

      gsap.set(indicatorRef.current, { x: -window.innerWidth });

      const startDelay = 0.6;

      gsap.to(coverRef.current, {
        x: width + 400,
        delay: 0.5,
        ease,
        onComplete: () => {
          setTimeout(() => {
            loop();
          }, 500);
        },
      });
      
      rest.forEach((i, index) => {
        gsap.to(getCard(i), {
          x: offsetLeft + index * (cardWidth + gap),
          zIndex: 30,
          delay: 0.05 * index,
          ease,
          delay: startDelay,
        });
        
        gsap.to(getCardContent(i), {
          x: offsetLeft + index * (cardWidth + gap),
          zIndex: 40,
          delay: 0.05 * index,
          ease,
          delay: startDelay,
        });
      });
      
      gsap.to(paginationRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
      gsap.to(navRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
      gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
    };

    const step = () => {
      return new Promise((resolve) => {
        order.push(order.shift());
        detailsEven = !detailsEven;

        const detailsActive = detailsEven ? detailsEvenRef.current : detailsOddRef.current;
        const detailsInactive = detailsEven ? detailsOddRef.current : detailsEvenRef.current;

        // Mettre à jour le contenu des détails
        if (detailsActive) {
          const textElement = detailsActive.querySelector('.place-box .text');
          const title1Element = detailsActive.querySelector('.title-1');
          const title2Element = detailsActive.querySelector('.title-2');
          const descElement = detailsActive.querySelector('.desc');
          
          if (textElement) textElement.textContent = data[order[0]].place;
          if (title1Element) title1Element.textContent = data[order[0]].title;
          if (title2Element) title2Element.textContent = data[order[0]].title2;
          if (descElement) descElement.textContent = data[order[0]].description;
        }

        gsap.set(detailsActive, { zIndex: 22 });
        gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
        gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
        gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
        gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
        gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
        gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
        
        gsap.set(detailsInactive, { zIndex: 12 });

        const [active, ...rest] = order;
        const prv = rest[rest.length - 1];

        gsap.set(getCard(prv), { zIndex: 10 });
        gsap.set(getCard(active), { zIndex: 20 });
        gsap.to(getCard(prv), { scale: 1.5, ease });

        gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
        gsap.to(getSliderItem(active), { x: 0, ease });
        gsap.to(getSliderItem(prv), { x: -numberSize, ease });
        gsap.to(progressForegroundRef.current, { width: 500 * (1 / order.length) * (active + 1), ease });

        gsap.to(getCard(active), {
          x: 0,
          y: 0,
          ease,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          onComplete: () => {
            const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
            gsap.set(getCard(prv), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              zIndex: 30,
              borderRadius: 10,
              scale: 1,
            });

            gsap.set(getCardContent(prv), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
            });
            
            gsap.set(getSliderItem(prv), { x: rest.length * numberSize });
            gsap.set(detailsInactive, { opacity: 0 });
            gsap.set(`${detailsInactive} .text`, { y: 100 });
            gsap.set(`${detailsInactive} .title-1`, { y: 100 });
            gsap.set(`${detailsInactive} .title-2`, { y: 100 });
            gsap.set(`${detailsInactive} .desc`, { y: 50 });
            gsap.set(`${detailsInactive} .cta`, { y: 60 });
            
            clicks -= 1;
            if (clicks > 0) {
              step();
            }
          },
        });

        rest.forEach((i, index) => {
          if (i !== prv) {
            const xNew = offsetLeft + index * (cardWidth + gap);
            gsap.set(getCard(i), { zIndex: 30 });
            gsap.to(getCard(i), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              ease,
              delay: 0.1 * (index + 1),
            });

            gsap.to(getCardContent(i), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
              ease,
              delay: 0.1 * (index + 1),
            });
            
            gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
          }
        });
      });
    };

    const loop = async () => {
      await animate(indicatorRef.current, 2, { x: 0 });
      await animate(indicatorRef.current, 0.8, { x: window.innerWidth, delay: 0.3 });
      gsap.set(indicatorRef.current, { x: -window.innerWidth });
      await step();
      loop();
    };

    const start = async () => {
      try {
        await loadImages();
        init();
      } catch (error) {
        console.error("One or more images failed to load", error);
      }
    };

    start();

    // Cleanup function
    return () => {
      // Nettoyer les animations GSAP si nécessaire
      gsap.killTweensOf("*");
    };
  }, []);

  const cards = data.map((item, index) => (
    <div key={index} className="card" id={`card${index}`} style={{ backgroundImage: `url(${item.image})` }}></div>
  ));

  const cardContents = data.map((item, index) => (
    <div key={index} className="card-content" id={`card-content-${index}`}>
      <div className="content-start"></div>
      <div className="content-place">{item.place}</div>
      <div className="content-title-1">{item.title}</div>
      <div className="content-title-2">{item.title2}</div>
    </div>
  ));

  const slideNumbers = data.map((_, index) => (
    <div key={index} className="item" id={`slide-item-${index}`}>{index + 1}</div>
  ));

  return (
    <div className="animated-carousel">
      <div className="indicator" ref={indicatorRef}></div>

      <nav ref={navRef}>
        <div>
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div>Globe Express</div>
        </div>
        <div>
          <div className="active">Home</div>
          <div>Holidays</div>
          <div>Destinations</div>
          <div>Flights</div>
          <div>Offers</div>
          <div>Contact</div>
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </nav>

      <div id="demo" ref={demoRef}>
        {cards}
        {cardContents}
      </div>

      <div className="details" id="details-even" ref={detailsEvenRef}>
        <div className="place-box">
          <div className="text">Switzerland Alps</div>
        </div>
        <div className="title-box-1"><div className="title-1">SAINT</div></div>
        <div className="title-box-2"><div className="title-2">ANTONIEN</div></div>
        <div className="desc">
          Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.
        </div>
        <div className="cta">
          <button className="bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="discover">Discover Location</button>
        </div>
      </div>

      <div className="details" id="details-odd" ref={detailsOddRef}>
        <div className="place-box">
          <div className="text">Switzerland Alps</div>
        </div>
        <div className="title-box-1"><div className="title-1">SAINT </div></div>
        <div className="title-box-2"><div className="title-2">ANTONIEN</div></div>
        <div className="desc">
          Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.
        </div>
        <div className="cta">
          <button className="bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="discover">Discover Location</button>
        </div>
      </div>

      <div className="pagination" id="pagination" ref={paginationRef}>
        <div className="arrow arrow-left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="arrow arrow-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="progress-sub-container">
          <div className="progress-sub-background">
            <div className="progress-sub-foreground" ref={progressForegroundRef}></div>
          </div>
        </div>
        <div className="slide-numbers" id="slide-numbers" ref={slideNumbersRef}>
          {slideNumbers}
        </div>
      </div>

      <div className="cover" ref={coverRef}></div>
    </div>
  );
};

export default AnimatedCarousel;