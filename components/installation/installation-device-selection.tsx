import Link from "next/link"
import { 
 Tv, 
 Monitor, 
 MonitorPlay, 
 LayoutGrid, 
 Smartphone,
 HardDrive,
 Router,
 Ban
} from"lucide-react"
import { deviceGuideHref } from "@/lib/installation-guides"
import { cn } from"@/lib/utils"

const devices = [
 { id:"fire-tv", icon: Tv, title:"Fire TV Stick", subtitle:"Firestick, Fire Cube", color:"green", tag:"01 / Amazon" },
 { id:"android-tv", icon: MonitorPlay, title:"Android TV/Box", subtitle:"Chromecast, Nvidia Shield", color:"green", tag:"02 / Google" },
 { id:"formuler", icon: HardDrive, title:"Formuler Z", subtitle:"Formuler & Dreamlink", color:"green", tag:"03 / Box" },
 { id:"smart-tv", icon: Tv, title:"Smart TV", subtitle:"Samsung, LG, Vizio", color:"green", tag:"04 / TV" },
 { id:"roku", icon: LayoutGrid, title:"Roku Device", subtitle:"Roku TV, Ultra", color:"green", tag:"05 / Roku" },
 { id:"apple", icon: Smartphone, title:"Apple/iOS", subtitle:"iPhone, iPad, Apple TV", color:"green", tag:"06 / Apple" },
 { id:"windows", icon: Monitor, title:"Windows/Mac", subtitle:"PC & Laptops", color:"green", tag:"07 / Desktop" },
 { id:"android-phone", icon: Smartphone, title:"Android Phone", subtitle:"Samsung, Pixel, etc.", color:"green", tag:"08 / Mobile" },
 { id:"buzztv", icon: Router, title:"BuzzTV Box", subtitle:"All models", color:"green", tag:"09 / Box" },
 { id:"mag", icon: Ban, title:"MAG Box", subtitle:"Not Supported", color:"red", tag:"10 / Legacy" },
]

const TILE_DOTS = [
 "top-1.5 left-1.5",
 "top-1.5 right-1.5",
 "bottom-1.5 left-1.5",
 "bottom-1.5 right-1.5",
]

const CARD_DOTS = [
 { at:"top-3 left-3", from:"translate-x-1.5 translate-y-1.5", delay:"" },
 { at:"top-3 right-3", from:"-translate-x-1.5 translate-y-1.5", delay:"group-hover:delay-75" },
 { at:"bottom-3 right-3", from:"-translate-x-1.5 -translate-y-1.5", delay:"group-hover:delay-150" },
 { at:"bottom-3 left-3", from:"translate-x-1.5 -translate-y-1.5", delay:"group-hover:delay-200" },
]

const DOT_SHADOW =
 "shadow-[inset_0_1px_1px_0_rgb(0_0_0/0.35),0_1px_0_0_rgb(255_255_255/0.7)]"

interface DeviceSelectionProps {
 /** The guide being viewed, highlighted in the grid. Omit on the hub page. */
 selectedId?: string
}

export function InstallationDeviceSelection({ selectedId }: DeviceSelectionProps) {
 return (
 <section id="devices" className="py-16">
 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
 <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end mb-12">
 <div className="text-center lg:text-left">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Device Ecosystem</p>
 <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-foreground md:text-4xl uppercase">
 Select your <span className="text-primary">Device</span>
 </h2>
 </div>
 <p className="text-sm leading-relaxed text-muted-foreground lg:max-w-md lg:justify-self-end text-center lg:text-left">
 Choose your device below to get started with the installation process. 
 All guides include step-by-step tutorials and troubleshooting tips.
 </p>
 </div>

 <div className="mx-auto grid w-fit grid-cols-[repeat(2,8.5rem)] gap-2 md:grid-cols-[repeat(3,9rem)] lg:grid-cols-[repeat(5,9rem)]">
 {devices.map((device) => (
 <Link
 key={device.id}
 href={deviceGuideHref(device.id)}
 aria-current={selectedId === device.id ? "page" : undefined}
 className={cn(
"group relative flex aspect-square w-full max-w-36 items-center justify-center justify-self-center rounded-xl border bg-card p-4 text-center shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
 selectedId === device.id && "border-primary bg-primary/10",
 device.color ==="red" && "border-primary/35"
 )}
 >
 {CARD_DOTS.map((dot) => (
 <span
 key={dot.at}
 aria-hidden
 className={`absolute size-1 scale-50 rounded-full bg-border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none ${dot.at} ${dot.from} ${dot.delay} ${DOT_SHADOW}`}
 />
 ))}

 <div className="flex flex-col items-center transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">
 <span className={cn(
 "relative flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]",
 (selectedId === device.id || device.color ==="red") && "text-primary"
 )}>
 <device.icon className="size-5" strokeWidth={2.2} aria-hidden />
 {TILE_DOTS.map((position) => (
 <span
 key={position}
 aria-hidden
 className={`absolute ${position} size-1 rounded-full bg-muted-foreground/50 ${DOT_SHADOW}`}
 />
 ))}
 </span>

 <h3 className={cn(
 "mt-3 text-[0.7rem] leading-4 font-bold tracking-tight uppercase",
 (selectedId === device.id || device.color ==="red") && "text-primary"
 )}>
 {device.title}
 </h3>
 </div>

 <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
 <p
 aria-hidden
 className={cn(
 "text-[0.7rem] leading-4 font-bold tracking-tight uppercase",
 (selectedId === device.id || device.color ==="red") && "text-primary"
 )}
 >
 {device.title}
 </p>
 <p className="mt-1.5 text-[0.65rem] leading-3.5 text-muted-foreground">
 {device.subtitle}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 )
}


