interface SectionProps {
  id: string;
  children: React.ReactNode;
}

function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="md:h-full md:snap-start flex items-center justify-center px-6 overflow-hidden py-20 md:py-0"
      style={{ backgroundColor: "#FDE0BC" }}
    >
      {children}
    </section>
  );
}

export default Section;
