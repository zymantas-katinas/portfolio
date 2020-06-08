import React from "react"

function AboutMe(props) {
  return (
    <div className="about__info">
      <div className={`about__info-left ${props.ifShow ? "fromLeft" : null}`}>
        <div class="left"></div>
        <div class="right"></div>
        <h1>Something About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
