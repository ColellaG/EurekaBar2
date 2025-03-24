import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <h5>Ubicación</h5>
            <a 
              href="https://www.google.com.ar/maps/@-26.8075008,-65.2916562,14z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapLink}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Salas y Valdez 1021, Yerba Buena
            </a>
            <p className={styles.address}>T4000 Tucumán, Argentina</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5><FontAwesomeIcon icon={faClock} /> Horarios</h5>
            <p>Lunes a Viernes: 8:00 - 20:00</p>
            <p>Sábados y Domingos: 9:00 - 21:00</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Síguenos</h5>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/casa.eureka/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faInstagram} /> @casa.eureka
              </a>
              <a 
                href="https://wa.me/+573243241800" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faWhatsapp} /> +57 324 324 1800
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 