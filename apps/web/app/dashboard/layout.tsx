export const metadata = {
  title: "Dashboard",
  description:
    "Your personal dashboard for managing your account and settings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children} </>;
}
