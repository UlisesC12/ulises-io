import Header from '../../components/layout/header';

export default function BlogLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-18"> {/* pt-20 para compensar el header fixed */}
        {children}
      </main>
    </>
  );
}
