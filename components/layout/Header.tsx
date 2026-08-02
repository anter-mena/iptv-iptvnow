"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Apple,
  HardDrive,
  LayoutGrid,
  MonitorPlay,
  Newspaper,
  Router,
  Rss,
  Smartphone,
  Tv,
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

// Each guide anchors into the single /installation-guides page. Give a device
// its own route later and only this href needs to change.
const GUIDES_ROUTE = "/installation-guides"

const INSTALL_GUIDES = [
  {
    label: "Amazon Firestick",
    href: `${GUIDES_ROUTE}#amazon-firestick`,
    icon: Zap,
    description: "Fire TV Stick and Fire TV Cube",
  },
  {
    label: "IPTV Smarters Pro",
    href: `${GUIDES_ROUTE}#iptv-smarters-pro`,
    icon: MonitorPlay,
    description: "Load your playlist in the Smarters app",
  },
  {
    label: "Apple Devices",
    href: `${GUIDES_ROUTE}#apple-devices`,
    icon: Apple,
    description: "iPhone, iPad and Apple TV",
  },
  {
    label: "Android Devices",
    href: `${GUIDES_ROUTE}#android-devices`,
    icon: Smartphone,
    description: "Phones, tablets and Android TV boxes",
  },
  {
    label: "Smart TV / Not Android",
    href: `${GUIDES_ROUTE}#smart-tv`,
    icon: Tv,
    description: "Samsung Tizen and LG webOS sets",
  },
  {
    label: "Buzz TV Box",
    href: `${GUIDES_ROUTE}#buzz-tv-box`,
    icon: Router,
    description: "Configure a Buzz TV set-top box",
  },
  {
    label: "Formuler Z / Dreamlink",
    href: `${GUIDES_ROUTE}#formuler-dreamlink`,
    icon: HardDrive,
    description: "MyTVOnline setup, start to finish",
  },
  {
    label: "Roku Device",
    href: `${GUIDES_ROUTE}#roku`,
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-6 py-4.5 lg:px-18">
      <div
        className={cn(
          "mx-auto grid h-14 w-full grid-cols-[1fr_auto_1fr] items-center rounded-xl border border-transparent transition-all duration-300 ease-out",
          isScrolled
            ? // Frosted glass: translucent card over a blurred, saturated
              // backdrop, so what scrolls beneath stays faintly visible.
              "max-w-[960px] translate-y-2 border-border bg-card/70 px-8 shadow-sm backdrop-blur-md backdrop-saturate-150"
            : // At rest the hero artwork shows straight through, so the
              // contents invert to white to stay legible on it.
              "max-w-[1088px] translate-y-0 px-0 text-white"
        )}
      >
        <Link
          href="/"
          className="col-start-1 flex items-center gap-2.5 justify-self-start"
        >
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-lg transition-colors",
              isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white text-black"
            )}
          >
            <Zap className="size-4" />
          </span>
          <span className="text-lg font-bold tracking-tight">IPTV NOW</span>
        </Link>

        <NavigationMenu className="col-start-2 hidden justify-self-center md:flex">
          <NavigationMenuList>
            <NavigationMenuItem value="guides">
              <NavigationMenuTrigger>Installation Guides</NavigationMenuTrigger>
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
              <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
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
            "col-start-3 flex h-9 items-center justify-center justify-self-end rounded-full px-4 text-sm font-semibold transition-colors",
            isScrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : // Over the hero artwork the glass has something to blur; on the
                // solid header bar it would have nothing to work with.
                "liquid-glass text-white"
          )}
        >
          Try for free
        </Link>
      </div>
    </header>
  )
}
