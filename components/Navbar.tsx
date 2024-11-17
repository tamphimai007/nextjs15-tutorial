import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between text-2xl">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href="/info">Info</Link>
        </div>

        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
      <hr className="mb-4"/>
    </>
  );
};
export default Navbar;
