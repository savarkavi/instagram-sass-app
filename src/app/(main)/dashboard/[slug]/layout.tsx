import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const Layout = async ({ children, params }: Props) => {
  const { slug } = await params;

  return (
    <div className="p-3">
      <Sidebar slug={slug} />
      <Navbar slug={slug} />
      <div className="p-8 lg:ml-[250px]">{children}</div>
    </div>
  );
};

export default Layout;
