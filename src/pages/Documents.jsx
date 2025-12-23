import Navbar from "../components/layout/Navbar";
import Docs from "../sections/docs/Docs";

const Documents = () => {
  return (
    <>
      <div className="h-screen w-full bg-black flex flex-col">
        <Navbar />
        <main className="flex-1 flex overflow-hidden">
          <Docs />
        </main>
      </div>
    </>
  );
};

export default Documents;
