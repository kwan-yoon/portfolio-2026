import { Home, User, Laptop, Mail } from "lucide-react";

function Header() {
  return (
    <header
      className=" top-0 w-full z-50 px-6 py-4"
      style={{ backgroundColor: "#FDE0BC" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="font-bold text-black tracking-widest text-xl"
          style={{ fontFamily: "'Share Tech Mono'" }}
        >
          YOON KWAN
        </a>
        <nav className="flex gap-3">
          {[
            { icon: <Home size={20} color="black" />, href: "#home" },
            { icon: <User size={20} color="black" />, href: "#about" },
            { icon: <Laptop size={20} color="black" />, href: "#projects" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="w-9 h-9 flex items-center justify-center"
            >
              <span className="text-[#FDE0BC]">{item.icon}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
