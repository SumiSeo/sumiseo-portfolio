import { ChildrenProps } from "@/types/ChildrenProps";
import Footer from "./Footer";

const Layout = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
