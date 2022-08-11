import classes from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className={classes.container} id="Contact">
      <div className={classes.wrapper}>
        <h2>CONTACT</h2>

        <div className={classes.contents}>
          <p>
            You can reach out to me on Linkedin and check out my work on Github.
          </p>

          <div className={classes.icons}>
            <a
              href="https://github.com/gbdude917"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className={classes.icon} />
            </a>

            <a
              href="https://www.linkedin.com/in/gbleong"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
