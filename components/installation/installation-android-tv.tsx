"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { MonitorPlay, Clock, Star, Plus, Camera, AlertTriangle, ShieldCheck, Info } from"lucide-react"
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

 {step.alert && (
 <p className="mt-4 text-xs leading-5 font-medium text-orange-300">
 <AlertTriangle className="mr-1 inline size-3.5 align-[-2px] text-orange-400" aria-hidden />
 <strong className="font-bold text-orange-400">Very Important:</strong>{" "}
 {step.alert}
 </p>
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


export function InstallationAndroidTv() {

 const faqs = [
 {
 q:"What is V12Mate and how does it work?",
 a:"V12Mate is an IPTV player that enables users to stream live TV channels and on-demand content. It connects to an IPTV provider's servers and displays content on your Android TV device.",
 },
 {
 q:"Is V12Mate compatible with my Android TV device?",
 a:"V12Mate is compatible with most Android TV devices running Android 5.0 or higher. Check your system version in Settings → About.",
 },
 {
 q:"Benefits of upgrading to TiviMate Premium?",
 a:"TiviMate Premium unlocks features like Catch-up, manual recording, VOD, and playlist management. However, our V12Mate app already includes VOD and Catch-up for free without any additional license fees.",
 },
 {
 q:"Can I use V12Mate with any IPTV provider?",
 a:"V12Mate only works with our service because it is our own dedicated player, and it's completely free with your subscription.",
 },
 {
 q:"Is TiviMate owned by IPTV NOW?",
 a:"No, TiviMate is not owned by us. We support our own player, V12Mate. TiviMate is a popular third-party player which requires a premium license to unlock all features.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Google Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Android TV/Box <span className="text-primary">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible devices: Sony, TCL, Hisense, Philips, Nvidia Shield, Chromecast with Google TV, Mi Box, and most Android TV boxes
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
 <p className="text-sm font-bold text-muted-foreground mt-0.5">Quick Setup - 3-5 minutes</p>
 </div>
 </div>
 <div className="mt-4 pt-4 border-t border-border flex items-start space-x-3">
 <MonitorPlay className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0" />
 <p className="text-sm text-muted-foreground font-medium">Using our custom V12Mate Player for easy setup</p>
 </div>
 </div>
 </div>

 {/* Method 1 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 01</span>
 <h4 className="text-2xl font-bold text-foreground mb-2">Using Downloader App</h4>
 </div>
 <p className="text-muted-foreground mb-6 text-sm">The easiest way to install V12Mate on your Android TV device.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Search for Downloader in the Play Store and tap Install",
 desc:"Open Google Play Store on your Android TV and search for \"Downloader\" app"
 },
 {
 title:"Press Allow when prompted",
 desc:"Grant necessary permissions for the Downloader app to function properly"
 },
 {
 title:"Click OK to confirm and proceed",
 desc:"Confirm the installation and setup process"
 },
 {
 title:"Downloader is ready — now install V12Mate",
 desc:"Launch the Downloader app to begin installing V12Mate"
 },
 {
 title:"Enter the Downloader code for V12Mate: 2494311 → press GO",
 desc:"Type the code exactly as shown and press GO to download V12Mate",
 tag:"Step 5 - Enter Code",
 img:"/assets/installationGuide/androidTV/01.png"
 },
 {
 title:"Accept Privacy Policy → Install → confirm Install again if asked",
 desc:"Accept the privacy policy and proceed with installation",
 tag:"Step 6 - Accept Policy",
 img:"/assets/installationGuide/androidTV/02.png"
 },
 {
 title:"Press Install → wait until installed",
 desc:"Complete the installation process and wait for it to finish",
 tag:"Step 7 - Installing",
 img:"/assets/installationGuide/androidTV/03.png"
 },
 {
 title:"When complete, press OPEN",
 desc:"Launch V12Mate for the first time",
 tag:"Step 8 - Press Open",
 alert:"If you already have TiviMate installed, please uninstall it first — otherwise V12Mate will not install.",
 img:"/assets/installationGuide/androidTV/04.png"
 },
 {
 title:"Press Add playlist",
 desc:"Start the setup process by adding your IPTV playlist",
 tag:"Step 9 - Add Playlist",
 img:"/assets/installationGuide/androidTV/05.png"
 },
 {
 title:"Press V12MATE",
 desc:"Select the V12MATE option for automatic configuration. If you only see \"Cancel\", click it to fix it.",
 tag:"Step 10 - Press V12MATE",
 img:"/assets/installationGuide/androidTV/06.png"
 },
 {
 title:"Enter your Credentials - (No server URL is needed since it's our player.)",
 desc:"Input your username and password - no server URL required for V12Mate",
 tag:"Step 11 - Enter Credentials",
 img:"/assets/installationGuide/androidTV/07.png"
 },
 {
 title:"Press Next, Make sure to keep VOD and TV channels selected",
 desc:"Ensure both live TV and video-on-demand options are enabled",
 tag:"Step 12 - VOD and TV Selection",
 img:"/assets/installationGuide/androidTV/08.png"
 },
 {
 title:"Wait for it to process, (about 1 minute)",
 desc:"Allow the app to configure your IPTV settings",
 tag:"Step 13 - Processing",
 img:"/assets/installationGuide/androidTV/09.png"
 },
 {
 title:"Press Done, wait few seconds. You're ready to watch!",
 desc:"Setup complete! Start enjoying your IPTV service on Android TV",
 tag:"Step 14 - Setup Complete",
 img:"/assets/installationGuide/androidTV/10.png"
 }
 ]} />

 
 </div>

 {/* Troubleshooting Notes */}
 <div className="mb-16 space-y-3">
 <p className="text-xs leading-5 font-medium text-primary">
 <AlertTriangle className="mr-1 inline size-3.5 align-[-2px] text-primary" aria-hidden />
 <strong className="font-bold text-primary">Troubleshooting Login Issues:</strong>{" "}
 If no channels load and the content count does not appear, your login details are incorrect. Go to Settings → Playlists → V12Mate → Xtream Codes Parameters and verify your username, password, and capital letters.
 </p>
 <p className="text-xs leading-5 font-medium text-foreground/85">
 <Clock className="mr-1 inline size-3.5 align-[-2px] text-foreground" aria-hidden />
 <strong className="font-bold text-foreground">EPG Information:</strong>{" "}
 The program guide loads in the background. Give it some time, then view it in Settings → EPG.
 </p>
 <p className="text-xs leading-5 font-medium text-yellow-300">
 <ShieldCheck className="mr-1 inline size-3.5 align-[-2px] text-yellow-400" aria-hidden />
 <strong className="font-bold text-yellow-200">Security Settings Note:</strong>{" "}
 Go to Settings → Security &amp; Restrictions, select the app, and enable Allow unknown apps when installing outside the Play Store.
 </p>
 </div>
 {/* Method 2 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 02</span>
 <h4 className="text-2xl font-bold text-foreground uppercase tracking-tight">Google Play Store (If V12Mate doesn't work)</h4>
 </div>
 <p className="text-muted-foreground mb-6 text-sm">Alternative setup using TiviMate from Google Play Store.</p>
 </div>

 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted shadow-sm ring-1 ring-border">
 <Info className="h-5 w-5 text-muted-foreground" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground">Very Important</h4>
 <p className="text-sm font-bold text-foreground/75 mt-0.5 leading-relaxed">VOD on TiviMate only works with their Premium. Our service (trial & subscription) already has VOD built in using V12Mate.</p>
 </div>
 </div>
 </div>
 
 <StepList steps={[
 {
 title:"Open Google Play Store on your Android TV",
 desc:"Access the Play Store from your Android TV home screen"
 },
 {
 title:"Search for TiviMate IPTV Player and click Install",
 desc:"Find and install the official TiviMate application"
 },
 {
 title:"Open TiviMate, select Add Playlist, choose Xtream Codes",
 desc:"Launch TiviMate and configure it for Xtream Codes authentication"
 },
 {
 title:"Enter your IPTV NOW credentials (Server URL, Username, Password)",
 desc:"Input your complete IPTV credentials to connect to the service"
 }
 ]} />
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




