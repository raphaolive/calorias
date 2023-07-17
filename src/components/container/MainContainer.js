import React from 'react'
// import { styled } from 'styled-components'
import styles from './main.module.css'

const MainContainer = (props) => {

  // const Container = styled.div`
  //   background: black
  // `


  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default MainContainer