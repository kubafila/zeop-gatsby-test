import React, { useState } from 'react'

const About = () => {

  const [fullText, setFullText] = useState(false)

  const hadleClick = () => {
    setFullText(!fullText)
  }


  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam veritatis incidunt assumenda autem facilis perferendis magni quam, ipsa sed sunt, soluta nesciunt, corporis commodi reiciendis consequuntur nostrum reprehenderit ducimus.
  Itaque voluptatum cum placeat reiciendis molestiae modi tenetur in illo ducimus dolore voluptas, omnis sapiente sed quis nulla.Ipsum consequuntur ratione, deleniti totam veniam voluptas doloremque modi iure minima eligendi!
  Vel, minus recusandae libero veniam fugit suscipit temporibus perspiciatis enim laborum rerum quisquam facilis sapiente corporis culpa quibusdam explicabo incidunt ? Ut, aliquam numquam.Ad, laudantium praesentium.Amet asperiores molestiae sequi.
  Sapiente aliquam reprehenderit praesentium ? Neque, recusandae accusamus.Consequatur totam nulla molestias beatae alias! Veniam quas quibusdam labore eius sequi, alias necessitatibus est nostrum explicabo repudiandae eligendi possimus dicta perferendis quia.
  Minima doloremque molestiae, debitis iste distinctio neque illo voluptatibus ipsa voluptas laudantium cupiditate nobis suscipit veniam placeat incidunt quos temporibus! Vitae aliquid dolores sapiente voluptates ut laborum quo, neque minus!
  Nam alias error et hic assumenda aspernatur ? Recusandae nobis, quisquam reprehenderit ducimus tempora quis ? Consequuntur accusamus aut quo.Magni, animi! Amet adipisci eveniet exercitationem nam ? Voluptatibus error delectus accusantium dolores.
    Voluptatum, delectus.Atque doloremque repudiandae cumque doloribus dolorum in tenetur eum qui deleniti ? Tempora, adipisci exercitationem.Ad unde vel qui deserunt eos dicta quae rerum delectus sequi.Error, deleniti architecto.
      Adipisci, at molestiae alias maiores tenetur molestias minus accusamus aperiam eius sint quos sed.Porro, reiciendis consequuntur eveniet vitae id perspiciatis sequi.Officia perferendis repudiandae ea ? Asperiores repellendus nostrum est.
  Voluptatibus voluptas tempora qui placeat consectetur optio recusandae soluta sunt corporis nisi adipisci explicabo beatae quia aliquid, nostrum assumenda nobis sequi blanditiis velit perferendis ut quae minima nesciunt voluptate.Possimus ?
    Ad necessitatibus distinctio nemo vel eveniet et maiores temporibus, quibusdam similique laboriosam placeat quos ea reiciendis repellendus quisquam optio suscipit aliquid expedita nulla.Minima porro recusandae dolorem fugiat dignissimos doloribus.`

  return (
    <div>
      {fullText ? text : text.slice(0, 75)}
      <br />
      <br />
      <button onClick={hadleClick}>Pokaż więce</button>
    </div>
  )
}

export default About
