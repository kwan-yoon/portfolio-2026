import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-scroll md:snap-y md:snap-mandatory">
        {children}
        <Footer />
      </main>
    </div>
  );
}
export default Layout;
