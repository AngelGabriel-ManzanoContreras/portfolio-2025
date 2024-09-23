import { useState } from "react"

export default function useHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(!menuOpen);

  return {
    menuOpen,
    handleMenu
  }
}
