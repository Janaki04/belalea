import React from 'react'
import Banner from '../../components/Banner'
import contact from "../../assets/contact.jpg"

function Contact() {
  return (
    <div>
        <Banner   title="Контакты" 
        backgroundImage={contact}/>
    </div>
  )
}

export default Contact