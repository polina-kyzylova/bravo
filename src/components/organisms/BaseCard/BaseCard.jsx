import React from 'react';
import './BaseCard.css'


export default function BaseCard({ cardColor, children }) {
  return (
    <div className={`card_container ${cardColor}`}>
      {children}
    </div>
  )
}
