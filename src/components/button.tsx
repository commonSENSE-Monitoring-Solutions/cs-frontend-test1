import React from 'react'
import styles from '../styles/button.module.css'

interface props {
  onClick: () => void
  text: string
  type: 'page' | 'modal'
}

const Button: React.FC<props> = ({ onClick, text, type }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
