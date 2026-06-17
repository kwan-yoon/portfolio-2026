const contacts = [
  {
    icon: "✉️",
    name: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: "📋",
    name: "Notion",
    value: "Notion 페이지",
    href: "https://notion.so",
  },
  {
    icon: "🐱",
    name: "GitHub",
    value: "github.com/yoonkwan",
    href: "https://github.com",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="pb-4 px-6"
      style={{ backgroundColor: "#FDE0BC" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white p-8 flex flex-col items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-4xl">{contact.icon}</span>
              <p className="font-bold text-gray-900">{contact.name}</p>
              <p className="text-xs text-gray-400">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
