export default function Footer() {
  const navLinks = [
    { label: "MENTORSHIP", href: "#" },
    { label: "CURRICULUM", href: "#" },
    { label: "ALUMNI", href: "#" },
    { label: "CONTACT", href: "#" }
  ];

  return (
    <footer className="bg-surface w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">

        <nav className="flex gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-on-surface-variant font-body uppercase tracking-widest text-[10px] hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-on-surface-variant font-body uppercase tracking-widest text-[10px]">
          © 2024 OBSIDIAN DATA SCIENCE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
