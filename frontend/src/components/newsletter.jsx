import "../styles/newsletter.css";

function Newsletter(){

return(

<section className="newsletter">

<h2>

Recibí nuestras ofertas

</h2>

<p>

Suscribite y enterate primero de todas las promociones.

</p>

<div className="newsletter-form">

<input

type="email"

placeholder="Ingresá tu email"

/>

<button>

Suscribirme

</button>

</div>

</section>

)

}

export default Newsletter;