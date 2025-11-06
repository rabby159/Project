import React from "react";
import { CircleCheck, CircleHelp, Circle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu";
import logo from "../../../assets/logo/zippyGoLogo.png";
import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { Telescope } from "lucide-react";

// drawer
import { Logs } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const components = [
  {
    title: "Express  & Standard Delivery",
    href: "/express",
    description: "Fast or scheduled delivery, your choice.",
  },
  {
    title: "Nationwide Delivery",
    href: "/nationwide",
    description: "Safe delivery across Bangladesh.",
  },
  {
    title: "Fulfillment Solution",
    href: "/fulfillment",
    description: "We store, pack, and ship for you.",
  },
  {
    title: "Cash on Home Delivery",
    href: "/cash",
    description: "Easy doorstep payment.",
  },
  {
    title: "Corporate Service",
    href: "/corporate",
    description: "Smart delivery for business needs.",
  },
  {
    title: "Parcel Return",
    href: "/return",
    description: "Quick and simple return handling.",
  },
];

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 bg-white rounded-2xl mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center">
        {/* logo & drawer-menu */}
        <div className="flex items-center gap-2">
          <div className="block lg:hidden">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" aria-label="Open menu" size="icon-lg">
                  <Logs />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuLabel>
                  <NavLink to="/pricing">Pricing</NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <NavLink to="/services">Services</NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <NavLink to="/coverage">Coverage</NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <NavLink to="/about">About Us</NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <NavLink to="/rider">Be a Rider</NavLink>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <img
            className="w-10 h-10 lg:w-13 lg:h-13 rounded-l-sm"
            src={logo}
            alt=""
          />
        </div>
        {/* menu */}
        <div className="lg:col-span-3">
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex">
              {/* Pricing Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <h3 className=" hover:text-[#EE4E32] font-medium text-[1.2em]">
                    Pricing
                  </h3>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline transition-all duration-200 select-none focus:shadow-md md:p-6"
                          href="/"
                        >
                          <div className="mb-2 text-lg font-medium sm:mt-4">
                            ZippyGo
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            ZippyGo - Where Every Second Counts.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/calculation" title="Calculation">
                      You can easily calculate your delivery charge here.
                    </ListItem>
                    <ListItem href="/policy" title="Pricing Policy">
                      Know about the rules of pricing.
                    </ListItem>
                    <ListItem href="/offers" title="Offers">
                      Your offers are here.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <h3 className=" hover:text-[#EE4E32] font-medium text-[1.2em]">
                    Services
                  </h3>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Coverage Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className=" hover:text-[#EE4E32] font-medium text-[1em]"
                >
                  <NavLink to="/coverage">Coverage</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Menu */}
              <NavigationMenuItem className="">
                <NavigationMenuLink
                  asChild
                  className=" hover:text-[#EE4E32] font-medium text-[1em]"
                >
                  <NavLink to="/about">About Us</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Rider */}
              <NavigationMenuItem className="">
                <NavigationMenuLink
                  asChild
                  className=" hover:text-[#EE4E32] font-medium text-[1em]"
                >
                  <NavLink to="/rider">Be a Rider</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* button */}
        <div className="flex gap-2 mt-4 lg:mt-0 justify-center items-center lg:justify-end lg:col-span-2">
          <div className="flex gap-1 mr-4">
            <Telescope className="text-[#EE4E32]" />
            <h2 className="text-[#EE4E32] font-medium">Track Parcel</h2>
          </div>
          <Button variant="outline">SignIn</Button>
          <Button className="bg-[#EE4E32] text-white" variant="none">
            Be a Rider
          </Button>
          <Button
            className="rounded-3xl border-[#EE4E32]"
            size="icon"
            aria-label="Submit"
            variant="outline"
          >
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href} className="block">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
