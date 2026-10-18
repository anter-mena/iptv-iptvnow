"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { MonitorPlay, Clock, Plus, Camera, Wifi } from"lucide-react"
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


export function InstallationRoku() {

 const faqs = [
 {
 q:"Where do I find the MAC Address on my Roku?",
 a:"The MAC Address is displayed directly on your TV screen as soon as you launch the Hot Player application on your Roku device.",
 },
 {
 q:"What if Hot Player isn't available in my region or Roku device?",
 a:"App availability can vary. Try searching again, or use a computer to add the channel from the Roku website directly to your account.",
 },
 {
 q:"How much does Hot Player cost?",
 a:"Hot Player offers a 7-day free trial. After that, a one-time activation fee is required to keep using the player. Check their website for the exact pricing.",
 },
 {
 q:"Can I use multiple playlists on one Roku device?",
 a:"Yes, you can upload and manage multiple playlists using the hotplayer.app portal.",
 },
 {
 q:"Why are my channels not loading?",
 a:"Ensure you entered the MAC address and Xtream Code credentials perfectly. If they still don't load, try restarting the Hot Player app or checking your Wi-Fi.",
 },
 {
 q:"Which Roku devices support Hot Player?",
 a:"Hot Player is supported on almost all Roku devices, including Roku TV, Roku Ultra, Roku Streaming Stick, and Roku Express.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Roku Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Roku Device <span className="text-primary">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: All Roku devices including Roku TV, Roku Ultra, Roku Streaming Stick, and Roku Express
 </p>
 </div>

 {/* Setup Info */}
 <div className="mb-16">
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
 <p className="text-sm text-muted-foreground font-medium">Hot Player app from Roku Channel Store</p>
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
 title:"On your Roku device, open the Roku Channel Store",
 desc:"Navigate to the Channel Store from your Roku home screen"
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
 title:"Click \"Add Channel\" to install the app on your Roku device",
 desc:"Install the Hot Player app to your Roku device"
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
 title:"Open the Hot Player app on your Roku device",
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
 title:"Enter the MAC Address from your Roku device, then click \"Next\"",
 desc:"Input the MAC Address you noted from your Roku device",
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
 title:"Return to your Roku device click Refresh or restart the Hot Player app",
 desc:"Go back to your Roku and refresh the Hot Player application"
 },
 {
 title:"Your IPTV channels should now load. You're ready to start watching!",
 desc:"Setup complete! Enjoy streaming your IPTV content on Roku"
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
 <p className="text-sm text-muted-foreground leading-relaxed font-medium">For best streaming quality on Roku, ensure your device is connected to a stable internet connection with at least 25 Mbps for HD content and 50+ Mbps for 4K content.</p>
 </div>
 </div>
 </div>
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




