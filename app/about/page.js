import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BorderedContentCard from '../../components/BorderedContentCard';
import BubbleText from '../../components/BubbleText';
import { ShiftingDropDown } from '../../components/SiftingDown';
import { RevealBento } from '../../components/RevealBento';
import { SlideTabsExample } from '../../components/SlideTabs';
import Example from '../../components/FlyoutLink';
import { RevealLinks } from '../../components/RevealLinks';
import TimelineFade from '../../components/TimelineFade';
import Waves from '../../components/Waves';
import SplitText from '../../components/SplitText';
import FlowingMenu from '../../components/FlowingMenu';
import TiltedCard from '../../components/TiltedCard';
import ASCIIText from '../../components/ASCIIText/ASCIIText';

const demoItems = [

  { link: '#', text: 'Projects', image: 'https://picsum.photos/600/400?random=1' },

  { link: '#', text: 'Contact', image: 'https://picsum.photos/600/400?random=2' },

  { link: '#', text: '', image: 'https://picsum.photos/600/400?random=3' },

  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }

];

const About = () => {
  return (
    <>
      <section>
        <header className="sticky top-0 z-50"> <Header /> </header>
        <Waves
          lineColor="#A4A1A1"
          className='absolute top-0'
          backgroundColor="rgba(255, 255, 255, 0.1)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.1}
          maxCursorMove={120}
          xGap={36}
          yGap={36}
        />
        <div>
          <div className="p-10 grid grid-cols-1 gap-10 mx-auto max-w-screen-xl">
            <SplitText
              textAlign='center'
              text="Jacob Cadavez"
              className="text-9xl text-center block overflow-hidden whitespace-nowrap font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeInCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <SplitText
              textAlign='center'
              text="Web, Mobile, and Game Developer"
              className="text-3xl text-center block overflow-hidden whitespace-nowrap font-bold uppercase lg:text-3xl"
              delay={36}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeInCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <FlowingMenu items={demoItems} />
          </div>

          <RevealLinks />
        </div>
      </section>
      <section>
      </section>
    </>
  );
};

export default About;
