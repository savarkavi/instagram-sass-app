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
      {children}
    </div>
  );
};

export default Layout;
