import Link from 'next/link'
import { INavbarItem } from './INavbarItem'

export default function index( { customClassName, onClick, text, href } : INavbarItem ) {
  return (
    <li>
      <Link className={ customClassName } href={ href } onClick={ onClick }>{ text }</Link>
    </li>
  )
}
