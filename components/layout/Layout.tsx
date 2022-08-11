import Nav from "../nav/Nav";

function Layout(props: any) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
