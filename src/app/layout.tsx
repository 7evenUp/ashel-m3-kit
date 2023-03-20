import NavigationRail from "@/components/NavigationRail";
import Providers from "@/components/Providers";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Ashel | UI kit",
  description: "Ashel's implementation of material design V3",
};

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"bg-white antialiased " + roboto.className}>
      <body className="min-h-screen w-full bg-white dark:bg-slate-900">
        <Providers>
          <NavigationRail />
          <main className="pl-[80px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
