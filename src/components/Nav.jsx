import { NavLink } from "react-router-dom";
import PageLogo from "./PageLogo";
import SocialLinks from "./SocialLinks";

const linkClass = (isActive) =>
  `nav-link inline-flex min-h-11 items-center justify-self-start font-display text-[min(1.25rem,7vw)] tracking-wide transition-opacity duration-200 sm:text-[1.6875rem] md:text-3xl ${
    isActive
      ? "text-white opacity-100 underline decoration-1 underline-offset-8"
      : "text-ivory/80 hover:text-white hover:opacity-100"
  }`;

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -bottom-4 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.5),#000_22%,#000_78%,rgba(0,0,0,0.5))] [-webkit-mask-image:linear-gradient(to_bottom,#000_calc(100%-1rem),transparent)] [mask-image:linear-gradient(to_bottom,#000_calc(100%-1rem),transparent)]"
      />
      <nav className="relative grid h-[4.5rem] w-full grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-24 sm:px-6 md:h-[6.5rem] md:px-8 lg:px-10">
        <NavLink to="/music" className={({ isActive }) => linkClass(isActive)}>
          Listen
        </NavLink>

        <PageLogo variant="light" compact />

        {/* Below sm the centred logo leaves no room, so socials sit under the hero and in the footer. */}
        <SocialLinks
          className="-mr-2 hidden gap-1 justify-self-end sm:flex md:gap-2"
          iconClassName="h-6 w-6 md:h-7 md:w-7"
        />
      </nav>
    </header>
  );
}
