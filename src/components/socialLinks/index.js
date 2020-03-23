import React from "react"
import Styles from "./socialLinks.module.scss"

const SocialLinks = ({ links }) => (
  <div className={Styles.socialLinks}>
    <div class="wrapper">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url} target="_blank">
                {link.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default SocialLinks
