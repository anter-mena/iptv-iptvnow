"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Smartphone, Clock, Plus, Camera, Wifi } from"lucide-react"
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


export function InstallationApple() {

 const faqs = [
 {
 q:"Which app is best for iOS devices?",
 a:"iMPlayer is our recommended choice for its simplicity and reliability. Smarters Player Lite is also excellent for beginners. Both work perfectly with IPTV subscriptions.",
 },
 {
 q:"Do I need to jailbreak my Apple TV?",
 a:"No, all recommended apps are available directly from the App Store. No jailbreak required.",
 },
 {
 q:"Can I use these apps on Apple TV?",
 a:"Yes! iMPlayer and other IPTV apps support Apple TV. You can also use AirPlay to stream from your iPhone/iPad to Apple TV.",
 },
 {
 q:"Why is EPG not loading?",
 a:"Make sure \"Auto-update EPG\" is enabled in app settings. Some providers may take a few minutes to load the full guide.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Apple Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 iPhone <span className="text-primary">& iPad Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: All iPhone and iPad devices running iOS 12.0 or later
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
 <p className="text-sm font-bold text-muted-foreground mt-0.5">Quick Setup - 3 minutes</p>
 </div>
 </div>
 <div className="mt-4 pt-4 border-t border-border flex items-start space-x-3">
 <Smartphone className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0" />
 <p className="text-sm text-muted-foreground font-medium">Available from App Store - No jailbreak required</p>
 </div>
 </div>
 </div>

 {/* Method 1: iMPlayer */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-2 mb-2">
 <span className="liquid-glass flex h-7 items-center justify-center rounded-full px-3 text-[9px] font-semibold uppercase tracking-widest text-white">RECOMMENDED METHOD</span>
 </div>
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 01</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">iMPlayer Setup</h4>
 </div>
 <p className="text-sm text-muted-foreground font-medium">The most reliable and user-friendly IPTV app for iPhone and iPad devices.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Download iMPlayer - IPTV Player from App Store",
 desc:"Search for \"iMPlayer\" in the App Store and download the official app",
 tag:"Step 1 - Download iMPlayer",
 img:"/assets/installationGuide/apple/01.png"
 },
 {
 title:"Open the app and click on \"Add a Playlist\"",
 desc:"Launch the iMPlayer app and select the option to add a new playlist"
 },
 {
 title:"Select playlist type \"XC API\"",
 desc:"Choose XC API as your playlist type for Xtream Codes compatibility"
 },
 {
 title:"Fill in your details",
 desc:"",
 bullets: [
"Playlist Name: Choose any name you want",
"Portal URL: Enter the server URL we sent you by email",
"Username & Password: Use the credentials provided in the email"
 ]
 },
 {
 title:"Click \"Add Playlist\" wait until contents finish downloading and enjoy streaming!",
 desc:"Setup complete! Wait for the content to load and start watching your favorite channels"
 }
 ]} />

 
 </div>

 {/* Method 2: Smarters Player Lite */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 02</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">Smarters Player Lite Setup</h4>
 </div>
 <p className="text-sm text-muted-foreground font-medium">Alternative IPTV app with excellent features for iPhone and iPad users.</p>
 </div>

 <StepList steps={[
 {
 title:"Open app and tap Add User, select Login with Xtream Codes API",
 desc:"Launch Smarters Player Lite and choose the Xtream Codes login option",
 tag:"Step 1 - Login with Xtream Codes",
 img:"/assets/installationGuide/apple/02.png"
 },
 {
 title:"Use the login details provided to you after subscribing. Then click on \"ADD USER\" to continue",
 desc:"Enter your IPTV credentials and add the user profile"
 },
 {
 title:"Wait a few seconds for the app to process your details",
 desc:"Allow the app time to connect to your IPTV service and load content"
 },
 {
 title:"Tap the \"Live TV\" icon to start watching",
 desc:"Navigate to the Live TV section to access your channels",
 tag:"Step 4 - Live TV Access",
 img:"/assets/installationGuide/apple/03.png"
 },
 {
 title:"Select the channel category you want to browse and tap a channel name to play it",
 desc:"Browse categories and start streaming your favorite content!"
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
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground mb-2">Performance Tip</h5>
 <p className="text-sm text-muted-foreground leading-relaxed font-medium">For better performance on iOS devices, ensure you're connected to a stable WiFi network. Cellular data may cause buffering issues.</p>
 </div>
 </div>
 </div>
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




