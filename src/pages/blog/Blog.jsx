import React from 'react'
import Banner from '../../components/Banner'
import blog from "../../assets/blog.png"

function Blog() {
  return (
    <div>
        <Banner   title="Новости" 
        backgroundImage={blog}/>
    </div>
  )
}

export default Blog