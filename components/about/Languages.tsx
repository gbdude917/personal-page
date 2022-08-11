import classes from "./Languages.module.css";

function Languages() {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <h2>LANGUAGES</h2>

        <div className={classes.outer}>
          <div className={classes.row}>
            <div className={classes.item}>
              <b>Programming Languages</b>
            </div>
            <div className={classes.item}>
              HTML, CSS, JavaScript, React, TypeScript, Java, Python
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.item}>
              <b>Frameworks</b>
            </div>
            <div className={classes.item}>ReactJS, NextJS</div>
          </div>

          <div className={classes.row}>
            <div className={classes.item}>
              <b>Tools</b>
            </div>
            <div className={classes.item}>Git, Visual Studio Code</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
