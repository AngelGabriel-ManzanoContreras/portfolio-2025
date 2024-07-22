import Image from 'next/image'

import { IContactIcon } from './Icontact-icon'

import styles from './contact-icon.module.css'

export default function index({ link, image, name } : IContactIcon) {
  const messageToDisplay = name.split(' ')[0]
  return (
    <article className={ styles[`contact-icon`] }>
      <figure>
        <a href={ link } target='_blank'>
          <Image src={ image } alt={ name } height={100} width={100} />
        </a>
      </figure>

      <p className={ styles[`contact-icon__message`] }>{ messageToDisplay }</p>

    </article>
  )
}
