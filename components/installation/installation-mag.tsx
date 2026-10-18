"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Ban, AlertCircle, Tv, Router, Plus } from"lucide-react"
import { cn } from"@/lib/utils"

const ALTERNATIVE_CARDS = [
 { icon: Tv, title:"Fire TV Stick", description:"Most popular choice" },
 { icon: Router, title:"Formuler Z Series", description:"Professional grade" },
 { icon: Router, title:"BuzzTV Boxes", description:"Reliable & Fast" },
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

export function InstallationMag() {

 const faqs = [
 {
 q:"Why don't you support MAG Box devices?",
 a:"MAG Boxes use Stalker Portal middleware, which is incompatible with our Xtream Codes platform. They require different server configurations.",
 },
 {
 q:"What's the best alternative to a MAG Box?",
 a:"Amazon Fire TV Stick is the most popular alternative. For premium features, consider Formuler Z series or BuzzTV boxes.",
 },
 {
 q:"Can I get a refund if I have a MAG Box?",
 a:"Yes! If you purchased our service for a MAG Box, contact our support team for a full refund or help choosing an alternative.",
 },
 {
 q:"Will MAG Box support be added in the future?",
 a:"Currently, there are no plans to add MAG Box support due to technical limitations. We recommend upgrading to a supported device.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Legacy Hardware</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 MAG Box <span className="text-primary">Not Supported</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 MAG Box Models: MAG 250, MAG 254, MAG 256, MAG 322, MAG 324, MAG 349, MAG 351, MAG 410, MAG 420, and other MAG devices
 </p>
 </div>

 {/* Notice Banner */}
 <div className="mb-16">
 <p className="mb-8 text-xs leading-5 font-medium text-primary">
 <AlertCircle className="mr-1 inline size-3.5 align-[-2px] text-primary" aria-hidden />
 <strong className="font-bold text-primary">Compatibility Notice:</strong>{" "}
 MAG Box devices use the Stalker Portal system, which is incompatible with our high-speed Xtream Codes infrastructure.
 </p>
 
 <div className="grid gap-2.5 sm:grid-cols-2">
 {[
"MAG devices use Stalker Portal protocol",
"Our service uses Xtream Codes API",
"Different authentication methods",
"MAC address-based authentication required",
"Server middleware incompatibility",
"No cross-platform support available"
 ].map((reason, i) => (
 <div key={i} className="rounded-xl border border-primary/20 bg-card p-4">
 <p className="text-[10px] font-black uppercase tracking-widest text-primary">{reason}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Alternatives Grid */}
 <div className="mb-16">
 <div className="mb-10 text-center">
 <p className="page-eyebrow">Upgrade Path</p>
 <h4 className="text-2xl font-bold text-foreground md:text-3xl uppercase tracking-tight">
 Recommended <span className="text-primary">Alternatives</span>
 </h4>
 </div>
 <div className="mx-auto grid max-w-[28rem] grid-cols-1 justify-items-center gap-2.5 sm:grid-cols-3">
 {ALTERNATIVE_CARDS.map((device) => (
 <div
 key={device.title}
 className="group relative flex aspect-square w-full max-w-36 items-center justify-center rounded-xl border bg-card p-4 text-center shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)]"
 >
 {CARD_DOTS.map((dot) => (
 <span
 key={dot.at}
 aria-hidden
 className={`absolute size-1 scale-50 rounded-full bg-border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none ${dot.at} ${dot.from} ${dot.delay} ${DOT_SHADOW}`}
 />
 ))}
 <div className="flex flex-col items-center transition-opacity duration-300 ease-out group-hover:opacity-0 motion-reduce:transition-none">
 <span className="relative flex size-11 items-center justify-center rounded-lg bg-muted text-primary shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
 <device.icon className="size-5" aria-hidden />
 {TILE_DOTS.map((position) => (
 <span key={position} aria-hidden className={`absolute size-1 rounded-full bg-border ${position} ${DOT_SHADOW}`} />
 ))}
 </span>
 <h5 className="mt-3 text-[0.7rem] leading-4 font-bold tracking-tight uppercase">{device.title}</h5>
 </div>
 <div className="absolute inset-0 flex flex-col items-center justify-center px-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none">
 <p aria-hidden className="text-[0.7rem] leading-4 font-bold tracking-tight uppercase">{device.title}</p>
 <p className="mt-1.5 text-[0.65rem] leading-3.5 text-muted-foreground">{device.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




