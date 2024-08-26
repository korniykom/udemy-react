import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-400 px-4 py-3 font-sans uppercase sm:px-6">
      <Link className="tracking-[5px]" to={"/"}>
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
