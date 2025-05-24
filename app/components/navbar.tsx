import { Link } from "@remix-run/react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "About This",
    href: "/about",
  },
  {
    title: "Workouts",
    href: "/workouts",
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 mr-6">
            <span className="hidden font-bold sm:inline-block">
              MedMan Sports
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex">
          <ModeToggle />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={cn(
                      "text-foreground/70 transition-colors hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo-light.png" 
                alt="Logo" 
                className="h-8 w-8 dark:hidden"
              />
              <img 
                src="/logo-dark.png" 
                alt="Logo" 
                className="hidden h-8 w-8 dark:block"
              />
              <span className="font-bold">MedMan Sports</span>
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}