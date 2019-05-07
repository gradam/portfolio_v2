import React from 'react'

const Section = ({ children, sectionId, className }) => (
  <section id={sectionId} className={className}>
    {children}
  </section>
)

export default Section
