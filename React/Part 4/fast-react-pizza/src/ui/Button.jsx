import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 ring-yellow-300 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 text-xs py-2 md:px-5 md:py-2.5",
    secondary:
      " text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-300  font-semibold uppercase tracking-wide hover:text-stone-800 text-stone-400 ring-yellow-300 transition-colors duration-300 hover:bg-stone-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
