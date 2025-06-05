import React from 'react'
// import { Icon } from '@iconify/react'; // No longer needed for default icons

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? <span className='cs-accent_color'>+ </span> : ''}
          07448429748
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'>+ </span> : ''}
          contact@remlyx.com
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'>+ </span> : ''}
          38 Highfield Crescent, <br/>Leeds, LS12 4SDA, UK
        </li>
      </ul>
    </>
  )
}
