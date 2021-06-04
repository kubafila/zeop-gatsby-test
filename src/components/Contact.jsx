import React from 'react'

const Contact = () => {
  return (
    <section>
      <div>
        <h2>Kontakt</h2>
        <p>Serdecznie zapraszamy do kontaktu drogą mailową, telefonicznie lub za pośrednictwem naszych profili w mediach społecznościowych.</p>
      </div>
      <h3>
        Stowarzyszenie <br />
        Z energią o prawie
      </h3>
      <p>ul. Reja 19/1</p>
      <p>87-100 Toruń</p>
      <p>woj. kujawsko-pomorskie</p>

      <div class="contact__links">
        <div>
          <p class="contact__text contact__text--bold">email:
            <a href="mailto:kontakt@zeop.pl" class="contact__link">kontakt@zeop.pl</a>
          </p>
          <p class="contact__text contact__text--bold">tel: 
            <a href="tel:+48730025149" class="contact__link">730 025 149 </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
