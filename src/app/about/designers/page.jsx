import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const DesignersPage = () => {
  return (
    <div className={`${roboto.className} text-4xl`}>
      This is the designers page. You can edit this page at
      src/app/about/designers/page.jsx
    </div>
  );
};

export default DesignersPage;
