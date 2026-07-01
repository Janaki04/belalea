import React from 'react'
import Banner from '../../components/Banner'
import blog from "../../assets/blog.png"
import BlogGrid from './BlogGrid'

function Blog() {
  return (
    <div>
        <Banner   title="Новости" 
        backgroundImage={blog}/>
        <BlogGrid/>
    </div>
  )
}

export default Blog