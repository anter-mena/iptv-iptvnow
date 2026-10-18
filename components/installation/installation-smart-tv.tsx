"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { MonitorPlay, Clock, Plus, Camera, Wifi, Info } from"lucide-react"
import { cn } from"@/lib/utils"
import { ImageZoom } from"@/components/ui/image-zoom"

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


export function InstallationSmartTv() {

 const faqs = [
 {
 q:"Where do I find the MAC Address on my Smart TV?",
 a:"The MAC Address is displayed directly on your TV screen as soon as you launch the Hot Player application.",
 },
 {
 q:"What if Hot Player isn't available in my region or TV brand?",
 a:"If Hot Player isn't available, you can try alternative IPTV apps like Smart IPTV, GSE Smart IPTV, or IBO Player which are usually available in most TV App Stores.",
 },
 {
 q:"How much does Hot Player cost?",
 a:"Hot Player offers a 7-day free trial. After that, a one-time activation fee is required. The app itself doesn't include channels — you need your own IPTV subscription.",
 },
 {
 q:"Can I use multiple playlists on one Smart TV?",
 a:"Yes, you can upload and manage multiple playlists using the hotplayer.app portal.",
 },
 {
 q:"Why are my channels not loading?",
 a:"Ensure you entered the MAC address and Xtream Code credentials perfectly. If they still don't load, try restarting the Hot Player app or checking your Wi-Fi connection.",
 },
 {
 q:"Which Smart TV brands support Hot Player?",
 a:"Hot Player is supported on LG WebOS, Samsung Tizen OS, Sony Android TV, TCL, Hisense, Vizio, and other major Smart TV platforms.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">TV Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Smart TV <span className="text-primary">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: All Smart TV brands including LG WebOS, Samsung Tizen, Sony Android TV, TCL, Hisense, Vizio, and other major brands
 </p>
 </div>

 {/* Info Banners */}
 <div className="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2">
 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 shadow-sm ring-1 ring-primary/25">
 <Info className="h-5 w-5 text-primary" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Important Notice</h4>
 <p className="text-sm font-bold text-primary mt-0.5 leading-relaxed">If your Smart TV has the Google Play Store, please follow the Android TV tutorial instead of this one.</p>
 </div>
 </div>
 </div>

 <div className="installation-inline-note">
 <div className="flex items-center space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card shadow-sm ring-1 ring-border">
 <Clock className="h-5 w-5 text-muted-foreground" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground">Setup Time</h4>
 <p className="text-sm font-bold text-muted-foreground mt-0.5">Quick Setup - 5-7 minutes</p>
 </div>
 </div>
 <div className="mt-4 pt-4 border-t border-border flex items-start space-x-3">
 <MonitorPlay className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0" />
 <p className="text-sm text-muted-foreground font-medium">Hot Player app from your TV's App Store</p>
 </div>
 </div>
 </div>

 {/* Part 1: Search for Hot Player */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-3 mb-4">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">STEP 01</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight">
 Search for Hot Player
 </h4>
 </div>
 </div>
 
 <StepList steps={[
 {
 title:"On your Smart TV, open your App Store (LG Content Store, Samsung Apps, etc.)",
 desc:"Navigate to your TV's app store - each brand has a different name for their store"
 },
 {
 title:"In the search bar, type \"Hot IPTV\" or \"Hot Player\"",
 desc:"Use the search function to find the Hot Player application",
 tag:"Step 2 - Search Hot Player",
 img:"/assets/installationGuide/roku/01.png"
 },
 {
 title:"Select Hot Player from the search results",
 desc:"Choose the official Hot Player app from the list of search results"
 },
 {
 title:"Click \"Install\" or \"Download\" to install the app on your Smart TV",
 desc:"Install the Hot Player app to your Smart TV device"
 }
 ]} />

 
 </div>

 {/* Part 2: Get Your Device Credentials */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-3 mb-4">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">STEP 02</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight">
 Get Your Device Credentials
 </h4>
 </div>
 </div>
 
 <StepList steps={[
 {
 title:"Open the Hot Player app on your Smart TV",
 desc:"Launch the Hot Player application you just installed",
 tag:"Step 1 - Open Hot Player",
 img:"/assets/installationGuide/roku/02.png"
 },
 {
 title:"You will see your MAC Address displayed on the screen. Write this down or take a photo - you'll need it for the next step",
 desc:"Note your device's MAC Address as it's required for configuration"
 }
 ]} />

 
 </div>

 {/* Part 3: Configure Your Playlist Online */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-3 mb-4">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">STEP 03</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight">
 Configure Your Playlist Online
 </h4>
 </div>
 </div>
 
 <StepList steps={[
 {
 title:"On your phone, tablet, or computer, visit: https://hotplayer.app",
 desc:"Access the Hot Player configuration website"
 },
 {
 title:"Click on \"Upload List\" in the menu",
 desc:"Navigate to the playlist upload section"
 },
 {
 title:"Enter the MAC Address from your Smart TV, then click \"Next\"",
 desc:"Input the MAC Address you noted from your Smart TV device",
 tag:"Step 3 - Enter MAC Address",
 img:"/assets/installationGuide/roku/03.png"
 },
 {
 title:"Change Source to \"Xtream Code\"",
 desc:"Select Xtream Code as your configuration method",
 tag:"Step 4 - Select Xtream Code",
 img:"/assets/installationGuide/roku/04.png"
 },
 {
 title:"Fill in your IPTV playlist details",
 desc:"Then click \"Save\"",
 tag:"Step 5 - Enter IPTV Details",
 bullets: [
"Playlist Name: Enter any name you want (e.g., \"My IPTV\")",
"Host: Your Server Address",
"Username: Your IPTV username",
"Password: Your IPTV password"
 ],
 img:"/assets/installationGuide/roku/05.png"
 },
 {
 title:"Return to your Smart TV click Refresh or restart the Hot Player app",
 desc:"Go back to your Smart TV and refresh the Hot Player application"
 },
 {
 title:"Your IPTV channels should now load. You're ready to start watching!",
 desc:"Setup complete! Enjoy streaming your IPTV content on your Smart TV"
 }
 ]} />

 
 </div>

 {/* Tips */}
 <div className="mb-16">
 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
 <Wifi className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground mb-2">Streaming Quality Tip</h5>
 <p className="text-sm text-muted-foreground leading-relaxed font-medium">For best streaming quality on Smart TV, ensure your device is connected to a stable internet connection with at least 25 Mbps for HD content and 50+ Mbps for 4K content.</p>
 </div>
 </div>
 </div>
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




