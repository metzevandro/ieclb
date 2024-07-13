"use client";
import {
  AppShell,
  BreadcrumbRoot,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Header,
  HeaderProfile,
  Image,
  Page,
} from "design-system-zeroz";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "design-system-zeroz/src/app/components/DropdownMenu/DropdownMenu";
import Sidebar, {
  SidebarItem,
  SidebarTitle,
} from "design-system-zeroz/src/app/components/Sidebar/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const pathname = usePathname();

  return (
    <AppShell>
      <Sidebar
        brandSize="lg"
        setToggleSidebar={toggleSidebar}
        brand="/ie.svg"
        toggle={isOpenSidebar}
      >
        <SidebarTitle title="Páginas" />
        <SidebarItem
          fillIcon={true}
          isActive={pathname === "/"}
          icon="home"
          title="Página inicial"
          onClick={() => navigateTo("/")}
        />
        <SidebarItem
          fillIcon={true}
          isActive={pathname === "/noticias"}
          icon="newspaper"
          title="Notícias"
          onClick={() => navigateTo("/noticias")}
        />
        <SidebarItem
          fillIcon={true}
          isActive={pathname === "/eventos"}
          icon="event"
          title="Eventos"
          onClick={() => navigateTo("/eventos")}
        />
        <SidebarItem
          fillIcon={true}
          isActive={pathname === "/doacoes"}
          icon="volunteer_activism"
          title="Doações"
          onClick={() => navigateTo("/doacoes")}
        />
        <SidebarItem
          fillIcon={true}
          isActive={pathname === "/voluntarios"}
          icon="groups"
          title="Voluntários"
          onClick={() => navigateTo("/voluntarios")}
        />
      </Sidebar>
      <Header
        breadcrumb={
          <>
            <BreadcrumbRoot href="" pageName="Página-inicial"></BreadcrumbRoot>
          </>
        }
        onClick={toggleSidebar}
      >
        <HeaderProfile name="Visitante">
          <DropDownMenu dropDownMenu>
            <DropDownMenuTitle content="Conta" />
            <DropDownMenuItem content="Conta" typeIcon="account_circle" />
          </DropDownMenu>
        </HeaderProfile>{" "}
      </Header>
      {children}
    </AppShell>
  );
}
