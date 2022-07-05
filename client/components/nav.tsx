import User from "./user";

function Nav() {
  return (
    <nav className="w-11/12 flex justify-center m-auto h-14 sticky">
      <section className="w-3/6 m-auto text-left">
        <h1 className="text-xl text-slate-50">GameDive</h1>
      </section>
      <section className="w-3/6 m-auto">
        <User />
      </section>
    </nav>
  );
}

export default Nav;
