import { useEffect } from "react";

export default function useNavbar( menuOpen: boolean ) {
  useEffect(() => {
    if ( menuOpen ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return {}
}
