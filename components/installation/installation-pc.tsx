"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Monitor, Star, Plus, Camera, PlayCircle, Video, Store, Zap } from"lucide-react"
import { cn } from"@/lib/utils"
import { ImageZoom } from"@/components/ui/image-zoom"

const APP_CARDS = [
 { icon: Star, title:"IPTV Smarters Pro", description:"Most popular choice" },
 { icon: PlayCircle, title:"MyIPTV Player", description:"Windows 10/11 optimized" },
 { icon: Video, title:"VLC Player", description:"Universal compatibility" },
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

const StepList = ({ steps }: { steps: any[] }) => (
 <div className="divide-y divide-border">
 {steps.map((step, i) => (
 <div key={i} className="flex items-start space-x-4 py-5">
 <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-black text-primary">
 {i + 1}
 </span>
 <div className="flex-1">
 {step.tag && (
 <span className="liquid-glass mb-2 inline-flex h-7 items-center rounded-full px-3 text-[9px] font-semibold uppercase tracking-widest text-white">
 {step.tag}
 </span>
 )}
 <h6 className="text-sm font-bold text-foreground">{step.title}</h6>
 {step.desc && <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{step.desc}</p>}
 
 {step.bullets && (
 <ul className="mt-3 space-y-1.5 border-l-2 border-primary/20 pl-4">
 {step.bullets.map((bullet: string, idx: number) => {
 const parts = bullet.split(":");
 if (parts.length > 1) {
 const label = parts.shift();
 const text = parts.join(":");
 return (
 <li key={idx} className="text-[11px] text-muted-foreground">
 <strong className="text-foreground">{label}:</strong> {text}
 </li>
 );
 }
 return <li key={idx} className="text-[11px] text-muted-foreground">{bullet}</li>;
 })}
 </ul>
 )}

 {step.img && (
 <div className="mt-6 flex justify-center">
 <ImageZoom 
 src={step.img} 
 alt={step.title}
className="w-full max-w-md mx-auto rounded-sm border border-border shadow-sm mt-4"
 />
 </div>
 )}
 </div>
 </div>
 ))}
 </div>
)


export function InstallationPc() {

 const faqs = [
 {
 q:"Which app works best on Windows/Mac?",
 a:"IPTV Smarters Pro offers the most features and works on both Windows and Mac. MyIPTV Player is great for Windows 10/11 users who prefer Microsoft Store apps.",
 },
 {
 q:"Can I use VLC Player for IPTV?",
 a:"Yes, VLC can play M3U playlists. Go to Media > Open Network Stream and paste your M3U URL. However, dedicated IPTV apps offer better features.",
 },
 {
 q:"System requirements for IPTV apps?",
 a:"Windows 7 or newer, Mac OS X 10.10 or newer. At least 4GB RAM and a stable internet connection (25+ Mbps recommended).",
 },
 {
 q:"Can I record shows on PC/Mac?",
 a:"Some apps like IPTV Smarters Pro support recording features. Check your IPTV provider's terms of service regarding recording content.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Desktop Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Windows <span className="text-primary">& Mac Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: Windows PC & Mac computers - all versions
 </p>
 </div>

 {/* Recommended Apps Grid */}
 <div className="mb-16">
 <div className="mb-10 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground/70 mb-3">Software Choice</p>
 <h4 className="text-2xl font-bold text-foreground md:text-3xl uppercase tracking-tight">
 Recommended <span className="text-primary">Applications</span>
 </h4>
 <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
 Choose from these top-rated IPTV applications for the best streaming experience on your computer.
 </p>
 </div>
 <div className="mx-auto grid max-w-[28rem] grid-cols-1 justify-items-center gap-2.5 sm:grid-cols-3">
 {APP_CARDS.map((app) => (
 <div
 key={app.title}
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
 <app.icon className="size-5" aria-hidden />
 {TILE_DOTS.map((position) => (
 <span key={position} aria-hidden className={`absolute size-1 rounded-full bg-border ${position} ${DOT_SHADOW}`} />
 ))}
 </span>
 <h5 className="mt-3 text-[0.7rem] leading-4 font-bold tracking-tight uppercase">{app.title}</h5>
 </div>
 <div className="absolute inset-0 flex flex-col items-center justify-center px-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none">
 <p aria-hidden className="text-[0.7rem] leading-4 font-bold tracking-tight uppercase">{app.title}</p>
 <p className="mt-1.5 text-[0.65rem] leading-3.5 text-muted-foreground">{app.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Method 1: Smarters Pro */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-2 mb-2">
 <span className="liquid-glass flex h-7 items-center justify-center rounded-full px-3 text-[9px] font-semibold uppercase tracking-widest text-white">RECOMMENDED METHOD</span>
 </div>
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 01</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">IPTV Smarters Pro Setup</h4>
 </div>
 <p className="text-sm text-muted-foreground font-medium">The most popular and feature-rich IPTV application for Windows and Mac.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Open your web browser",
 desc:"Open a browser and type \"IPTV Smarters Pro\" into the search bar"
 },
 {
 title:"Visit the official website",
 desc:"Go to the official website: https://www.iptvsmarters.com"
 },
 {
 title:"Navigate to Downloads",
 desc:"Click on the \"Downloads\" section in the website menu",
 tag:"Step 3 - Downloads section",
 img:"/assets/installationGuide/windows/01.png"
 },
 {
 title:"Download the application",
 desc:"Download the Windows or Mac version of IPTV Smarters Pro",
 tag:"Step 4 - Download application",
 img:"/assets/installationGuide/windows/02.png"
 },
 {
 title:"Run the installer",
 desc:"Once the download completes, open the installer by clicking on the downloaded file"
 },
 {
 title:"Grant permissions",
 desc:"If Windows asks for permission, click \"Yes\" to allow the app to install"
 },
 {
 title:"Complete installation",
 desc:"The installation will now begin. It typically takes under 2 minutes"
 },
 {
 title:"Launch the application",
 desc:"Once installed, launch the IPTV Smarters app. Click Add New User, then choose \"Login with Xtream Codes API\""
 },
 {
 title:"Enter your account details",
 desc:"Enter your IPTV account details: Username, Password, and Portal URL"
 },
 {
 title:"Start streaming!",
 desc:"That's it! You're ready to start streaming with IPTV Smarters Pro"
 }
 ]} />

 
 </div>

 {/* Method 2: MyIPTV Player */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 02</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">MyIPTV Player (Windows 10/11)</h4>
 </div>
 <p className="text-sm text-muted-foreground font-medium mb-4">A powerful media player with built-in EPG support for Windows 10, Windows Phone, and Xbox One.</p>
 <p className="text-xs leading-5 font-medium text-primary">
 <Store className="mr-1 inline size-3.5 align-[-2px] text-muted-foreground" aria-hidden />
 <strong className="font-bold text-foreground/75">Microsoft Store:</strong>{" "}
 Available directly from the Windows Store for the best compatibility.
 </p>
 </div>

 <StepList steps={[
 {
 title:"Access Settings",
 desc:"Go to the Settings tab, then click on \"Add new playlist and EPG source\"",
 tag:"MyIPTV Settings",
 img:"/assets/installationGuide/windows/03.png"
 },
 {
 title:"Add your M3U playlist",
 desc:"Configure your playlist with these details:",
 tag:"Add M3U playlist",
 bullets: [
"Name: Give your playlist a name (e.g. \"IPTV\")",
"URL: Paste the M3U link you received from your IPTV provider",
"Click on \"Add remote list\""
 ],
 img:"/assets/installationGuide/windows/04.png"
 },
 {
 title:"Select your playlist",
 desc:"Go back to Settings and choose your playlist from the Select Channel Playlist dropdown",
 tag:"Select playlist",
 img:"/assets/installationGuide/windows/05.png"
 },
 {
 title:"Start watching",
 desc:"Done! Go to the Channels tab, choose your country, and start watching your favorite TV and VOD content",
 tag:"Start watching",
 img:"/assets/installationGuide/windows/06.png"
 }
 ]} />

 
 </div>

 {/* Tips */}
 <div className="mb-16">
 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
 <Zap className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground mb-2">Performance Tip</h5>
 <p className="text-sm text-muted-foreground leading-relaxed font-medium">For best performance on PC/Mac, use a wired ethernet connection when possible. WiFi may cause buffering during HD/4K streams.</p>
 </div>
 </div>
 </div>
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




