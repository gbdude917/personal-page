import Image from "next/image";

import classes from "./Experience.module.css";

function Experience() {
  return (
    <section className={classes.container} id="Experience">
      <div className={classes.wrapper}>
        <h2>EXPERIENCE</h2>

        <div className={classes.workList}>
          <section className={classes.item}>
            <Image
              src="/images/bps.png"
              height={200}
              width={400}
              objectFit="contain"
              alt="bass pro shops"
            />
            <div className={classes.description}>
              <h3>Bass Pro Shops - Web Developer Intern</h3>
              <br />
              <p>
                Worked closely with the ecommerce team to update features in
                their online store.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Experience;
