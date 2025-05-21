// LogoCarousel.tsx
import React, { useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component

import css from '../logos/css.svg';
import git from '../logos/git.svg';
import html from '../logos/html.svg';
import java from '../logos/java.svg';
import javascript from '../logos/javascript.svg';
import mongodb from '../logos/mongodb.svg';
import nextjs from '../logos/nextjs.svg';
import node from '../logos/node.svg';
import python from '../logos/python.svg';
import react from '../logos/react.svg';
import sql from '../logos/sql.svg';
import tailwind from '../logos/tailwind.svg';
import typescript from '../logos/typescript.svg';

const LogoCarousel: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // Add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', 'true');

        // Make an array from the elements within `.scroller__inner`
        const scrollerInner = scroller.querySelector('.scroller__inner') as HTMLElement;
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it and add it to the `.scroller__inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div >
      {/* <h2 style={{ textAlign: 'center' }}>My Tech Stack</h2> */}

      <a href="https://github.com/samielmadani?tab=repositories" target="_blank" rel="noopener noreferrer">
        <div className="scroller" data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            <Image src={css} alt="Logo 1" width={50} height={50} />
            <Image src={git} alt="Logo 2" width={50} height={50} />
            <Image src={html} alt="HTML Logo" width={50} height={50} />
            <Image src={java} alt="Java Logo" width={50} height={50} />
            <Image src={javascript} alt="JavaScript Logo" width={50} height={50} />
            <Image src={mongodb} alt="MongoDB Logo" width={50} height={50} />
            <Image src={nextjs} alt="Next.js Logo" width={50} height={50} />
            <Image src={node} alt="Node.js Logo" width={50} height={50} />
            <Image src={python} alt="Python Logo" width={50} height={50} />
            <Image src={react} alt="React Logo" width={50} height={50} />
            <Image src={sql} alt="SQL Logo" width={50} height={50} />
            <Image src={tailwind} alt="Tailwind Logo" width={50} height={50} />
            <Image src={typescript} alt="TypeScript Logo" width={50} height={50} />
          </div>
        </div>
      </a>


      <style jsx>{`
        .scroller {
          max-width: 600px;
        }

        @media (max-width: 768px) {
          .scroller {
            max-width: 300px;
          }
        }

        .scroller__inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .scroller[data-animated='true'] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        }

        .scroller[data-animated='true'] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction='right'] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction='left'] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed='fast'] {
          --_animation-duration: 20s;
        }

        .scroller[data-speed='slow'] {
          --_animation-duration: 60s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }

        /* general styles */
        :root {
          --clr-neutral-100: hsl(0, 0%, 100%);
          --clr-primary-100: hsl(205, 15%, 58%);
          --clr-primary-400: hsl(215, 25%, 27%);
          --clr-primary-800: hsl(217, 33%, 17%);
          --clr-primary-900: hsl(218, 33%, 9%);
        }

        html {
          color-scheme: dark;
        }

        body {
          display: grid;
          min-block-size: 100vh;
          place-content: center;
          font-family: system-ui;
          font-size: 1.125rem;
          background-color: var(--clr-primary-800);
        }

        .tag-list {
          margin: 0;
          padding-inline: 0;
          list-style: none;
        }

        .tag-list li {
          padding: 1rem;
          background: var(--clr-primary-400);
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
        }

        /* for testing purposes to ensure the animation lined up correctly */
        .test {
          background: red !important;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
