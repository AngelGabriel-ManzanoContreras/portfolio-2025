import Image from 'next/image'

import { IContactIcon } from './Icontact-icon'

export default function index({ link, image, name } : IContactIcon) {
  return (
    <article>
      <figure>
        <a href={ link } target='_blank'>
          <Image src={ image } alt={ name } height={100} width={100} />
        </a>
      </figure>

      {/* <p>{ name }</p> */}

    </article>
  )
}
