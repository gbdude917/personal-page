import Image from "next/image";

import classes from "./Projects.module.css";

function Projects() {
  return (
    <section className={classes.container} id="Projects">
      <div className={classes.wrapper}>
        <h2>PROJECTS</h2>

        <div className={classes.workList}>
          <section className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                src="/images/boardgame-site.png"
                height={200}
                width={400}
                objectFit="contain"
                alt="image of boardgame ecommerce site"
              />
            </div>

            <div className={classes.description}>
              <h3>Boardgame Ecommerce Site</h3>
              <br />
              <p>
                A boardgame ecommerce site for a fictional boardgame company.
              </p>
              <a
                href="https://github.com/gbdude917/boardgame-ecommerce-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Repo
              </a>
            </div>
          </section>

          <section className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                src="/images/recipe-manager.png"
                height={200}
                width={400}
                objectFit="contain"
                alt="image of recipe manager website"
              />
            </div>

            <div className={classes.description}>
              <h3>Recipe Manager</h3>
              <br />
              <p>
                A website to search for your favorite recipes and save them to
                your &quot;Cookbook&quot;.
              </p>
              <a
                href="https://github.com/cse110-fa21-group24/cse110-fa21-group24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Repo
              </a>
            </div>
          </section>

          <section className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                src="/images/musical-bpm.png"
                height={200}
                width={400}
                objectFit="contain"
                alt="image of musical bpm calculator"
              />
            </div>

            <div className={classes.description}>
              <h3>Musical BPM Calculator</h3>
              <br />
              <p>
                Tap to the rhythm of your favorite song to find its beats per
                minute (BPM).
              </p>
              <a
                href="https://github.com/gbdude917/musical-bpm-calc-ts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Repo
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Projects;
