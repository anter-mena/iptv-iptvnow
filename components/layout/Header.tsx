"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Apple,
  ChevronRight,
  HardDrive,
  LayoutGrid,
  Menu,
  MonitorPlay,
  Newspaper,
  Router,
  Rss,
  Smartphone,
  Tv,
  X,
  Zap,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Each device guide has its own page under /installation-guides.
const GUIDES_ROUTE = "/installation-guides"

const INSTALL_GUIDES = [
  {
    label: "Amazon Firestick",
    href: `${GUIDES_ROUTE}/fire-tv`,
    icon: Zap,
    description: "Fire TV Stick and Fire TV Cube",
  },
  {
    label: "IPTV Smarters Pro",
    href: `${GUIDES_ROUTE}/windows`,
    icon: MonitorPlay,
    description: "Load your playlist in the Smarters app",
  },
  {
    label: "Apple Devices",
    href: `${GUIDES_ROUTE}/apple`,
    icon: Apple,
    description: "iPhone, iPad and Apple TV",
  },
  {
    label: "Android Devices",
    href: `${GUIDES_ROUTE}/android-phone`,
    icon: Smartphone,
    description: "Phones, tablets and Android TV boxes",
  },
  {
    label: "Smart TV / Not Android",
    href: `${GUIDES_ROUTE}/smart-tv`,
    icon: Tv,
    description: "Samsung Tizen and LG webOS sets",
  },
  {
    label: "Buzz TV Box",
    href: `${GUIDES_ROUTE}/buzztv`,
    icon: Router,
    description: "Configure a Buzz TV set-top box",
  },
  {
    label: "Formuler Z / Dreamlink",
    href: `${GUIDES_ROUTE}/formuler`,
    icon: HardDrive,
    description: "MyTVOnline setup, start to finish",
  },
  {
    label: "Roku Device",
    href: `${GUIDES_ROUTE}/roku`,
    icon: LayoutGrid,
    description: "Any Roku player or Roku TV",
  },
]

const ASSETS = [
  {
    label: "News",
    href: "/news",
    icon: Newspaper,
    description: "Channel additions, outages and service updates",
  },
  {
    label: "Blog",
    href: "/blog",
    icon: Rss,
    description: "Guides, comparisons and streaming tips",
  },
]

const DIRECT_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInstallationOpen, setIsInstallationOpen] = useState(false)
  const [isAssetsOpen, setIsAssetsOpen] = useState(false)
  const pathname = usePathname()
  const isOverHero = pathname === "/" && !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsInstallationOpen(false)
    setIsAssetsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b px-0 py-0 transition-colors md:border-b-0 md:bg-transparent md:px-6 md:py-4.5 md:backdrop-blur-none lg:px-18",
        isMobileMenuOpen
          ? "border-border bg-background/95 backdrop-blur-xl"
          : isOverHero
            ? "border-transparent bg-transparent backdrop-blur-none"
            : "border-border bg-background/75 backdrop-blur-xl"
      )}
    >
      <div
        className={cn(
          "mx-auto grid h-14 w-full grid-cols-[1fr_auto_1fr] items-center rounded-none border border-transparent px-4 transition-all duration-300 ease-out md:rounded-xl md:px-0",
          !isOverHero || isMobileMenuOpen
            ? // Frosted glass: translucent card over a blurred, saturated
              // backdrop, so what scrolls beneath stays faintly visible.
              "max-w-[1088px] translate-y-0 md:max-w-[960px] md:translate-y-2 md:border-border md:bg-card/70 md:px-8 md:shadow-sm md:backdrop-blur-md md:backdrop-saturate-150"
            : // At rest the hero artwork shows straight through, so the
              // contents invert to white to stay legible on it.
              "max-w-[1088px] translate-y-0 text-white"
        )}
      >
        <Link
          href="/"
          className="relative col-start-1 h-8 w-16 justify-self-start md:h-9 md:w-18"
          aria-label="IPTV Now home"
        >
          <Image
            src="/logo-footer.svg"
            alt="IPTV Now"
            width={88}
            height={44}
            priority
            className="absolute inset-0 h-8 w-auto md:h-9"
          />
        </Link>

        <NavigationMenu className="col-start-2 hidden justify-self-center md:flex">
          <NavigationMenuList>
            <NavigationMenuItem value="guides">
              <NavigationMenuTrigger
                aria-current={pathname.startsWith(GUIDES_ROUTE) ? "page" : undefined}
              >
                Installation Guides
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* Two columns, so eight guides read as a compact block rather
                    than a long single-file list. */}
                <ul className="grid w-[37rem] grid-cols-2 gap-1">
                  {INSTALL_GUIDES.map((guide) => (
                    <li key={guide.label}>
                      {/* render, not href — Base UI then builds the link from
                          next/link, so navigation is client-side and prefetched
                          rather than a full document request. */}
                      <NavigationMenuLink
                        render={<Link href={guide.href} />}
                        className="flex-col items-start gap-1 p-3"
                      >
                        <span className="flex items-center gap-2 font-medium">
                          <guide.icon className="size-4" aria-hidden />
                          {guide.label}
                        </span>
                        <span className="text-xs leading-4 text-muted-foreground">
                          {guide.description}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem value="assets">
              <NavigationMenuTrigger
                aria-current={
                  pathname.startsWith("/news") || pathname.startsWith("/blog")
                    ? "page"
                    : undefined
                }
              >
                Assets
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[25rem] grid-cols-2 gap-1">
                  {ASSETS.map((asset) => (
                    <li key={asset.label}>
                      <NavigationMenuLink
                        render={<Link href={asset.href} />}
                        className="flex-col items-start gap-1 p-3"
                      >
                        <span className="flex items-center gap-2 font-medium">
                          <asset.icon className="size-4" aria-hidden />
                          {asset.label}
                        </span>
                        <span className="text-xs leading-4 text-muted-foreground">
                          {asset.description}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {DIRECT_LINKS.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={navigationMenuTriggerStyle()}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href="/#pricing"
          className={cn(
            "col-start-3 hidden h-9 items-center justify-center justify-self-end rounded-full px-4 text-sm font-semibold transition-colors md:flex",
            !isOverHero
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : // Over the hero artwork the glass has something to blur; on the
                // solid header bar it would have nothing to work with.
                "liquid-glass text-white"
          )}
        >
          Try for free
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="col-start-3 flex size-9 items-center justify-center justify-self-end rounded-lg text-current transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-x-0 top-14 bottom-0 z-[-1] bg-black/55 backdrop-blur-sm md:hidden"
        />
      ) : null}

      <div
        id="mobile-navigation"
        className={cn(
          "absolute top-full right-0 left-0 overflow-hidden border-x-0 border-t-0 border-b border-border bg-background/90 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out md:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto max-h-[calc(100vh-7rem)] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-4 opacity-0"
        )}
      >
        <nav className="max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain p-4">
          <div className="divide-y">
            <div>
              <button
                type="button"
                onClick={() => setIsInstallationOpen((open) => !open)}
                aria-expanded={isInstallationOpen}
                className={cn(
                  "flex w-full items-center justify-between px-2 py-3 text-left text-sm font-semibold transition-colors hover:text-primary",
                  pathname.startsWith(GUIDES_ROUTE) && "text-primary"
                )}
              >
                <span>Installation Guides</span>
                <ChevronRight
                  className={cn(
                    "size-4 transition-transform duration-300",
                    isInstallationOpen && "rotate-90"
                  )}
                  aria-hidden
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  isInstallationOpen
                    ? "max-h-[32rem] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="space-y-1 pb-3 pl-3">
                  {INSTALL_GUIDES.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <guide.icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium transition-colors group-hover:text-primary">
                          {guide.label}
                        </span>
                        <span className="block text-xs leading-4 text-muted-foreground">
                          {guide.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsAssetsOpen((open) => !open)}
                aria-expanded={isAssetsOpen}
                className={cn(
                  "flex w-full items-center justify-between px-2 py-3 text-left text-sm font-semibold transition-colors hover:text-primary",
                  (pathname.startsWith("/news") || pathname.startsWith("/blog")) &&
                    "text-primary"
                )}
              >
                <span>Assets</span>
                <ChevronRight
                  className={cn(
                    "size-4 transition-transform duration-300",
                    isAssetsOpen && "rotate-90"
                  )}
                  aria-hidden
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  isAssetsOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="space-y-1 pb-3 pl-3">
                  {ASSETS.map((asset) => (
                    <Link
                      key={asset.href}
                      href={asset.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <asset.icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-medium transition-colors group-hover:text-primary",
                            pathname.startsWith(asset.href) && "text-primary"
                          )}
                        >
                          {asset.label}
                        </span>
                        <span className="block text-xs leading-4 text-muted-foreground">
                          {asset.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {DIRECT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-2 py-3 text-sm font-semibold transition-colors hover:text-primary",
                  pathname === link.href && "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t pt-4">
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Try for free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
