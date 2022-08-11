import Link from "next/link";
import classes from "./Nav.module.css";

function Nav(props: any) {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="#About">
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href="#Experience">
              <a>Experience</a>
            </Link>
          </li>

          <li>
            <Link href="#Projects">
              <a>Projects</a>
            </Link>
          </li>

          <li>
            <Link href="#Contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </>
  );
}

export default Nav;
