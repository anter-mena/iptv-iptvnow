// Every device guide has its own URL (/installation-guides/<slug>) so each one can
// rank for its own search ("install IPTV on Firestick"). Slugs match the old
// #hash anchors, which the hub page still redirects for old links.

export const GUIDES_PATH = "/installation-guides"

export interface DeviceGuide {
  slug: string
  /** Short device name for menus, breadcrumbs and cards. */
  name: string
  /** The page's H1. */
  heading: string
  /** Page title before " | IPTV NOW" — keep it under ~55 characters. */
  title: string
  /** Search snippet, 120–160 characters. */
  description: string
}

export const DEVICE_GUIDES: readonly DeviceGuide[] = [
  {
    slug: "fire-tv",
    name: "Fire TV Stick",
    heading: "How to Install IPTV on Fire TV Stick",
    title: "How to Install IPTV on Firestick & Fire TV Cube",
    description:
      "Install IPTV on any Amazon Fire TV Stick or Fire TV Cube in about 10 minutes: Downloader, unknown sources and V12Mate, step by step with screenshots.",
  },
  {
    slug: "android-tv",
    name: "Android TV / Box",
    heading: "How to Install IPTV on Android TV",
    title: "How to Install IPTV on Android TV & Google TV",
    description:
      "Set up IPTV on Android TV, Google TV, Chromecast, Nvidia Shield and Android boxes with Downloader and V12Mate. Step-by-step guide with screenshots.",
  },
  {
    slug: "formuler",
    name: "Formuler / Dreamlink",
    heading: "How to Set Up IPTV on Formuler & Dreamlink",
    title: "Set Up IPTV on Formuler Z & Dreamlink (MyTVOnline)",
    description:
      "Add your IPTV subscription to a Formuler Z or Dreamlink box with MyTVOnline 2 or 3 and an Xtream Codes login. Clear steps for every model.",
  },
  {
    slug: "smart-tv",
    name: "Smart TV",
    heading: "How to Watch IPTV on a Samsung or LG Smart TV",
    title: "How to Watch IPTV on Samsung & LG Smart TVs",
    description:
      "Watch IPTV on Samsung Tizen, LG webOS and other smart TVs with the Hot Player app. Install it, add your playlist and start streaming in minutes.",
  },
  {
    slug: "roku",
    name: "Roku",
    heading: "How to Watch IPTV on Roku",
    title: "How to Watch IPTV on Roku TV & Roku Players",
    description:
      "Stream IPTV on a Roku TV, Roku Ultra or Roku Streaming Stick with the Hot Player channel. Step-by-step setup, activation and troubleshooting.",
  },
  {
    slug: "apple",
    name: "iPhone, iPad & Apple TV",
    heading: "How to Set Up IPTV on iPhone, iPad & Apple TV",
    title: "Set Up IPTV on iPhone, iPad & Apple TV",
    description:
      "Watch IPTV on iPhone, iPad and Apple TV with iMPlayer from the App Store. Add your playlist with Xtream Codes details in a few taps.",
  },
  {
    slug: "windows",
    name: "Windows & Mac",
    heading: "How to Watch IPTV on Windows & Mac",
    title: "How to Watch IPTV on Windows PC & Mac",
    description:
      "Watch IPTV on a Windows PC or Mac with IPTV Smarters Pro, MyIPTV Player or VLC. Compare the options and follow the setup steps for each.",
  },
  {
    slug: "android-phone",
    name: "Android Phone & Tablet",
    heading: "How to Set Up IPTV on Android Phones & Tablets",
    title: "Set Up IPTV on Android Phones & Tablets",
    description:
      "Install iMPlayer from Google Play and stream IPTV on any Android phone or tablet. Add your Xtream Codes login and watch live TV on the go.",
  },
  {
    slug: "buzztv",
    name: "BuzzTV",
    heading: "How to Set Up IPTV on a BuzzTV Box",
    title: "How to Set Up IPTV on a BuzzTV Box",
    description:
      "Add your IPTV subscription to any BuzzTV box with an XC API login in Server Settings. Step-by-step setup for every BuzzTV model.",
  },
  {
    slug: "mag",
    name: "MAG Box",
    heading: "IPTV on MAG Boxes: Not Supported",
    title: "MAG Box IPTV: Not Supported (Best Alternatives)",
    description:
      "MAG boxes are not supported. See why, and which devices to use instead — Fire TV Stick, Formuler Z or BuzzTV — for a reliable IPTV setup.",
  },
]

export function getDeviceGuide(slug: string): DeviceGuide | undefined {
  return DEVICE_GUIDES.find((guide) => guide.slug === slug)
}

export function deviceGuideHref(slug: string): string {
  return `${GUIDES_PATH}/${slug}`
}
