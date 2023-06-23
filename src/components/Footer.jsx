import React from 'react'
import { AiFillLinkedin , AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>TechyStar</h1>
            <p>@all right reserved</p>
        </div>

        <div>
            <h5>Follow Me</h5>

            <div>
                <a href="https://www.linkedin.com/in/srijan-verma-0407sv" target={"blank"} >
                    <AiFillLinkedin/>
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/SrijanVerma04" target={"blank"} >
                    <AiFillGithub/>
                    <span>Github</span>
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer