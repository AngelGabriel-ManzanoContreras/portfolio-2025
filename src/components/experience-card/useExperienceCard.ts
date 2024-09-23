import { useState, useEffect } from 'react';

export default function useExperienceCard( badge: string ) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const cardStyle = !isLargeScreen ? { cursor: 'pointer' } : {};

  const goToCertificate = () => {
    window.open(badge, '_blank');
  }

  const onCardClick = (event: React.MouseEvent<HTMLElement>) => {
    const details = event.currentTarget.querySelector('details');
    if (!details) return;
    if (!details.hasAttribute('open')) details.setAttribute('open', true);
    else details.open = !details.open;
  }

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth > 579);
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return {
    isLargeScreen,
    cardStyle,
    goToCertificate,
    onCardClick
  }
}
