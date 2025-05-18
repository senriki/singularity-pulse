import HeroSection from '../components/HeroSection';
import HighlightCards from '../components/HighlightCards';
import StayConnected from '../components/StayConnected';
import useFadeInEffect from '../hooks/useFadeInEffect';
import { Helmet } from 'react-helmet';

export default function Home() {
  useFadeInEffect();

  return (
    <>
      <Helmet>
        <title>Home | Singularity Pulse</title>
        <meta name="description" content="Enter a cyberpunk AI music world with characters and lore." />
      </Helmet>
      <HeroSection />
      <HighlightCards />
      <StayConnected />
    </>
  );
}