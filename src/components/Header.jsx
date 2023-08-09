import { SectionWrapper } from "../hoc";

const Header = () => {
  return (
    <div className="mx-10 h-screen flex flex-col justify-center items-center">
      <p className="text-9xl text-white neue tracking-wide ">
        Imam <span className="text-brand">Affandi</span>
      </p>
      <p className="text-2xl text-slate-400 neue tracking-widest ">
        A passionate frontend developer from Indonesia
      </p>
    </div>
  );
};

export default SectionWrapper(Header, "header");
