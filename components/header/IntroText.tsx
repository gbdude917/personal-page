import Image from "next/image";
import classes from "./IntroText.module.css";

function IntroText() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text} id="About">
        <div>
          <div className={classes.portrait}>
            <Image
              src="/images/gabriel-leong.jpg"
              alt="Picture of Gabriel Leong"
              height={1200}
              width={800}
            />
          </div>
        </div>

        <h1>My name is Gabriel Leong</h1>

        <p>
          I am an aspiring <b>Frontend Developer</b>. I am currently in my
          fourth year of my Computer Engineering degree at the University of
          California San Diego. I primarily work with HTML, CSS, JavaScript, and
          React. I have some experience with NextJS and TypeScript. In my free
          time I enjoy playing video games, working out, and cooking.
        </p>
      </div>
    </div>
  );
}

export default IntroText;
