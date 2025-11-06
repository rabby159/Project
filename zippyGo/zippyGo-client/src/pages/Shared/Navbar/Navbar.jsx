import React from "react";

import { CircleCheck, CircleHelp, Circle } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../../components/ui/navigation-menu";
import logo from "../../../assets/logo/zippyGoLogo.png";

const components = [
  {
    title: "Alert Dialog",
    href: "/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll Area",
    href: "/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 bg-neutral-100 rounded-2xl mt-2">
      <div className="flex justify-between items-center">
        <div>
          <img className="w-13 h-13 rounded-l-sm" src={logo} alt="" />
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
              {/* Home Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline transition-all duration-200 select-none focus:shadow-md md:p-6"
                          href="/"
                        >
                          <div className="mb-2 text-lg font-medium sm:mt-4">
                            Shadcn/UI
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Reusable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists, etc.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Components Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
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

              {/* Docs Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="/docs">Docs</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Simple Menu */}
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#">Components</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#">Documentation</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#">Blocks</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* With Icons */}
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex items-center gap-2">
                          <CircleHelp className="w-4 h-4" />
                          Backlog
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex items-center gap-2">
                          <Circle className="w-4 h-4" />
                          To Do
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex items-center gap-2">
                          <CircleCheck className="w-4 h-4" />
                          Done
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <button>start</button>
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
