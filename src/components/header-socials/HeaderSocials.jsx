import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"


export default function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithubSquare/></a>
        <a href="https://twitter.com" target="_blank"><FaTwitterSquare/></a>
    </div>
  )
}
