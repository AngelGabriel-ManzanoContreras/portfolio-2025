'use client';

import { IMainButton } from './Imainbutton';

import styles from './main-button.module.css';

export default function index({ onClick, text } : IMainButton) {
  return (
    <button className={ styles[`main-button`] } onClick={ onClick }>{ text }</button>
  )
}
