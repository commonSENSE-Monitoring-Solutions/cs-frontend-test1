import React, { useState } from 'react'
import Button from './components/button'
import Modal from './components/modal'
import styles from './styles/App.module.css'

function App() {
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)

  const onClickModal1 = () => {
    setShowModal1(true)
  }

  const onClickModal2 = () => {
    setShowModal2(true)
  }

  const onClickModal3 = () => {
    setShowModal3(true)
  }

  // Could have tidied up the buttons and modals by extracting the data into arrays, but I believe in this instance leaving them as they are makes more sense
  return (
    <div className={styles.container}>
      <Button onClick={onClickModal1} text='Click me!' type='page' />
      <Button onClick={onClickModal2} text='No, Click me!' type='page' />
      <Button
        onClick={onClickModal3}
        text="Don't listen to them! Click me!"
        type='page'
      />

      {showModal1 && (
        <Modal
          setShowModal={setShowModal1}
          title='Title'
          content={
            <>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                officiis distinctio voluptate numquam. Expedita, veritatis?
                Accusantium amet aut explicabo cumque soluta, ipsa nobis,
                consequatur quos neque, enim impedit! Amet, animi! Eius
                aspernatur error molestias excepturi. Nemo at magnam a, autem
                delectus dolore nostrum, sapiente amet, esse nobis culpa. Qui
                corrupti, ullam quo fuga ea sit cupiditate tenetur nihil magnam
                tempore! Impedit voluptas voluptatibus recusandae repellendus
                expedita mollitia unde omnis minus, itaque delectus blanditiis
                in sint, nisi molestias vitae vero necessitatibus cumque
                quaerat, nam reprehenderit aliquam sed provident quae rerum.
                Unde.
              </p>
            </>
          }
          buttonsArray={['Homepage', 'About', 'Contact']}
        />
      )}
      {showModal2 && (
        <Modal
          setShowModal={setShowModal2}
          title='Title'
          content={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                dolor ipsa incidunt, repudiandae fugiat omnis tempora error,
                ratione rerum doloribus ipsum voluptas adipisci. Aliquid
                corrupti asperiores inventore amet et mollitia! Id praesentium
                asperiores odio voluptas possimus, ea tempora dolorum doloremque
                culpa! Ex tempore voluptatem laboriosam, optio veniam omnis iure
                corrupti beatae dolorum asperiores itaque nobis doloremque eius
                id, odio aspernatur.
              </p>
              <img
                src='https://picsum.photos/350/250'
                alt='Random from lorem picsum'
              />
            </div>
          }
          buttonsArray={['Homepage', 'About', 'Contact']}
        />
      )}
      {showModal3 && (
        <Modal
          setShowModal={setShowModal3}
          title='Title'
          content={
            <>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, iure? Nisi consequuntur asperiores illum quia
                dignissimos, illo quibusdam, quo rem sit ad eum soluta neque.
                Pariatur illum ex animi excepturi. Numquam, excepturi ipsum
                possimus recusandae non ullam voluptates sapiente similique
                aliquam cum quisquam ea odio doloremque explicabo! Facilis vero
                veniam laudantium, non accusamus aliquid sunt expedita optio
                tempore sequi nisi! Possimus corrupti modi blanditiis,
                architecto harum illo nemo velit quisquam vel, hic dignissimos
                nihil id? Dolorum quam, praesentium maxime iusto culpa inventore
                dolore doloribus totam sapiente quaerat cumque adipisci eum.
                Asperiores aut omnis, quo repellendus vero sed voluptate id cum
                ut repellat mollitia iusto ex fugit tempora facilis, officiis
                ratione. Vero, quaerat optio? Placeat provident odio accusamus
                sunt, recusandae beatae. Illo tempore eligendi placeat enim
                explicabo sequi cum id hic odio, neque illum earum voluptatem
                modi non minima temporibus laboriosam debitis facilis in
                delectus quae dolores! Distinctio ipsam laudantium natus?
              </p>
            </>
          }
          buttonsArray={['Homepage', 'About', 'Contact']}
        />
      )}
    </div>
  )
}

export default App
