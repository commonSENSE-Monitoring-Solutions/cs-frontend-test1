import React from 'react'
import styles from '../styles/modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import Button from './button'

interface props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  content: any
  buttonsArray: any
}

const Modal: React.FC<props> = ({
  setShowModal,
  title,
  content,
  buttonsArray,
}) => {
  const onClick = () => {
    setShowModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <div className={styles.titleCross}>
            <h1 className={styles.title}>{title}</h1>

            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.crossIcon}
              onClick={onClick}
            />
          </div>

          <div>{content}</div>

          <div className={styles.buttonContainer}>
            {buttonsArray.map((text: string) => (
              <Button text={text} onClick={() => {}} type='modal' />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
