import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Toaster } from "@/components/ui/toaster";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { firstName: "Adrian", email: "test@test.com", lastName: "Doe" };
  const cookieStore = await cookies();
  const defaultOpen = true;

  // if (!loggedIn) redirect("/sign-in");

  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar user={user} />
        <main className="flex-1 flex flex-col bg-background overflow-hidden">
          <div className="">
            <SidebarTrigger />
            <SidebarInset className="flex-1 overflow-y-auto w-full px-4">{children}</SidebarInset>
          </div>
        </main>
      </SidebarProvider>
      <Toaster />
    </>
  );
}
