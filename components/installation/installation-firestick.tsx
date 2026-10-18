"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Clock, Star, Plus, Camera, AlertTriangle, ShieldCheck, Info, PlayCircle, Download, Settings, Smartphone, Video } from"lucide-react"
import { cn } from"@/lib/utils"
import { ImageZoom } from"@/components/ui/image-zoom"
import { VideoZoom } from"@/components/ui/video-zoom"

const GUIDE_CARDS = [
 { icon: Download, title:"Downloader App", description:"Install the Downloader app from Fire TV App Store" },
 { icon: Settings, title:"Enable Settings", description:"Allow unknown sources and developer options" },
 { icon: Video, title:"Install V12Mate", description:"Set up V12Mate and configure your IPTV service" },
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


export function InstallationFirestick() {

 const faqs = [
 {
 q:"What is V12Mate, and how does it work on Firestick?",
 a:"V12Mate is a media player app for IPTV on Firestick, organizing channels/playlists with an EPG (Electronic Program Guide). It requires a subscription from us.",
 },
 {
 q:"Is V12Mate compatible with all Firestick models?",
 a:"Yes, V12Mate works with most Firestick models. Ensure you have enough storage space and a solid Wi-Fi connection for optimal performance.",
 },
 {
 q:"How do I add IPTV services to V12Mate?",
 a:"Add your provider's M3U URL or Xtream Codes details in V12Mate's playlist section. You'll need username, and password from IPTV NOW.",
 },
 {
 q:"No content showing on V12Mate?",
 a:"Delete or edit the playlist and re-add it — it may have been entered incorrectly. Please check your credentials.",
 },
 {
 q:"Troubleshooting tips?",
 a:"Re-enable unknown sources/ADB if needed, clear cache if app is slow, reinstall for major issues, or use a VPN if your ISP blocks streaming.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Amazon Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Fire TV Stick <span className="text-primary">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: Amazon Fire TV Stick, Fire TV Stick 4K, Fire TV Cube, Fire TV devices
 </p>
 </div>

 {/* Setup Info & Important Notice */}
 <div className="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2">
 <div className="installation-inline-note">
 <div className="flex items-center space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/100 shadow-sm">
 <Clock className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-300">Setup Time - 5-10 minutes</h4>
 <p className="text-sm font-bold text-orange-400 mt-0.5 leading-relaxed">Our V12Mate Player - Beginner friendly</p>
 </div>
 </div>
 </div>

 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/100 shadow-sm">
 <AlertTriangle className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Very Important</h4>
 <p className="text-sm font-bold text-primary mt-0.5 leading-relaxed">If you already have TiviMate installed, please uninstall it first — otherwise V12Mate will not install.</p>
 </div>
 </div>
 </div>
 </div>

 {/* Method 1: Video Guide */}
 <div className="mb-16">
 <div className="mb-8 text-center">
 <div className="liquid-glass mb-4 inline-flex h-8 items-center space-x-2 rounded-full px-3 text-[10px] font-semibold tracking-widest text-white">
 <PlayCircle className="h-3 w-3" />
 <span>VIDEO TUTORIAL</span>
 </div>
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 01</span>
 <h4 className="text-2xl font-bold text-foreground mb-2">Watch Video Guide</h4>
 </div>
 <p className="text-muted-foreground mb-6 text-sm">Follow along with our complete video tutorial for Fire TV Stick setup.</p>
 </div>

 <div className="mb-8 overflow-hidden rounded-2xl bg-black shadow-2xl border-4 border-black ring-4 ring-black/5">
 <VideoZoom 
 sources={[
 { src:"https://cdn.jsdelivr.net/gh/anter-mena/antermena-assets@main/Iptv/assets/video.webm", type:"video/webm" },
 { src:"https://cdn.jsdelivr.net/gh/anter-mena/antermena-assets@main/Iptv/assets/video.mp4", type:"video/mp4" }
 ]}
 />
 </div>

 <div className="mx-auto grid max-w-[28rem] grid-cols-1 justify-items-center gap-2.5 sm:grid-cols-3">
 {GUIDE_CARDS.map((guide) => (
 <div
 key={guide.title}
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
 <guide.icon className="size-5" aria-hidden />
 {TILE_DOTS.map((position) => (
 <span
 key={position}
 aria-hidden
 className={`absolute size-1 rounded-full bg-border ${position} ${DOT_SHADOW}`}
 />
 ))}
 </span>
 <h5 className="mt-3 text-[0.7rem] leading-4 font-bold tracking-tight uppercase">
 {guide.title}
 </h5>
 </div>

 <div className="absolute inset-0 flex flex-col items-center justify-center px-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none">
 <p aria-hidden className="text-[0.7rem] leading-4 font-bold tracking-tight uppercase">
 {guide.title}
 </p>
 <p className="mt-1.5 text-[0.65rem] leading-3.5 text-muted-foreground">
 {guide.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Method 2: Written Guide */}
 <div className="mb-16">
 <div className="text-center mb-12">
 
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 02</span>
 <h4 className="text-2xl font-bold text-foreground mb-2">Step-by-Step Instructions</h4>
 </div>
 <p className="text-muted-foreground mb-6 text-sm">Detailed written instructions with screenshots for each step.</p>
 </div>

 {/* Part 1 */}
 <div className="space-y-6 mb-12">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">PART 1</span>
 <h5 className="text-xl font-bold text-foreground uppercase tracking-tight">Install Downloader App</h5>
 </div>
 </div>
 <StepList steps={[
 { title:"Go to My Apps from Fire TV home screen", desc:"Navigate to the My Apps section on your Fire TV main menu" },
 { title:"Select Get more apps", desc:"Choose the option to browse and download additional applications" },
 { title:"Choose Search, press Down, then OK. Type Downloader", desc:"Use the search function to find the Downloader application" },
 { title:"When results show, select Downloader and press OK", desc:"Choose the official Downloader app from the search results" },
 { title:"Choose Downloader → Download", desc:"Proceed to download the Downloader application" },
 { title:"Wait for it to download and install", desc:"Allow the Fire TV to complete the download and installation process" },
 { title:"Do not open it yet. Press Back to the Home screen", desc:"Return to the home screen without launching Downloader yet" }
 ]} />
 </div>

 {/* Part 2 */}
 <div className="space-y-6 mb-12">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">PART 2</span>
 <h5 className="text-xl font-bold text-foreground uppercase tracking-tight">Enable Developer Options & Unknown Sources</h5>
 </div>
 </div>
 <StepList steps={[
 { title:"Go to Settings → My Fire TV", desc:"Navigate to the Fire TV settings and select the My Fire TV option" },
 { title:"Open About and click Fire TV Stick 7 times to enable Developer Options", desc:"Tap the Fire TV Stick option repeatedly to unlock developer settings" },
 { title:"Press Back → Developer Options → enable ADB debugging", desc:"Access the developer options and turn on ADB debugging" },
 { title:"Confirm ADB debugging is On", desc:"Verify that ADB debugging has been successfully enabled" },
 { title:"Select Install Unknown Apps → give Downloader permission (press OK)", desc:"Allow the Downloader app to install applications from unknown sources" },
 { title:"Press the Home button to return home", desc:"Go back to the Fire TV home screen to proceed with installation" }
 ]} />
 </div>

 {/* Part 3 */}
 <div className="space-y-6">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">PART 3</span>
 <h5 className="text-xl font-bold text-foreground uppercase tracking-tight">Install V12Mate via Downloader</h5>
 </div>
 </div>
 <StepList steps={[
 { title:"Open Downloader", desc:"Launch the Downloader application you installed earlier" },
 { title:"Press Allow to grant file access", desc:"Grant necessary permissions for Downloader to access files" },
 { title:"Dismiss the welcome message (press OK)", desc:"Close any welcome or introductory messages" },
 { 
 title:"Enter the Downloader code for V12Mate: 2494311 → press GO", 
 desc:"Type the code exactly as shown and press GO to download V12Mate",
 tag:"Step 4 - Enter Code",
 img:"/assets/installationGuide/androidTV/01.png"
 },
 { 
 title:"Accept Privacy Policy → Install → confirm Install again if asked", 
 desc:"Accept the privacy policy and proceed with installation",
 tag:"Step 5 - Accept Policy",
 img:"/assets/installationGuide/androidTV/02.png"
 },
 { 
 title:"Press Install → wait until installed", 
 desc:"Complete the installation process and wait for it to finish",
 tag:"Step 6 - Installing",
 img:"/assets/installationGuide/androidTV/03.png"
 },
 { 
 title:"When complete, press OPEN", 
 desc:"Launch V12Mate for the first time",
 tag:"Step 7 - Press Open",
 alert:"If you already have TiviMate installed, please uninstall it first — otherwise V12Mate will not install.",
 img:"/assets/installationGuide/androidTV/04.png"
 },
 { 
 title:"Press Add playlist", 
 desc:"Start the setup process by adding your IPTV playlist",
 tag:"Step 8 - Add Playlist",
 img:"/assets/installationGuide/androidTV/05.png"
 },
 { 
 title:"Press V12MATE", 
 desc:"Select the V12MATE option for automatic configuration",
 tag:"Step 9 - Press V12MATE",
 img:"/assets/installationGuide/androidTV/06.png"
 },
 { 
 title:"Enter your Credentials - (No Server Address is needed since it's our player.)", 
 desc:"Input your username and password - no server URL required for V12Mate",
 tag:"Step 10 - Enter Credentials",
 img:"/assets/installationGuide/androidTV/07.png"
 },
 { 
 title:"Press Next, Make sure to keep VOD and TV channels selected", 
 desc:"Ensure both live TV and video-on-demand options are enabled",
 tag:"Step 11 - VOD and TV Selection",
 img:"/assets/installationGuide/androidTV/08.png"
 },
 { 
 title:"Wait for it to process, (about 1 minute)", 
 desc:"Allow the app to configure your IPTV settings",
 tag:"Step 12 - Processing",
 img:"/assets/installationGuide/androidTV/09.png"
 },
 { 
 title:"Press Done, wait few seconds. You're ready to watch!", 
 desc:"Setup complete! Start enjoying your IPTV service on Fire TV Stick",
 tag:"Step 13 - Setup Complete",
 img:"/assets/installationGuide/androidTV/10.png"
 }
 ]} />

 
 </div>
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
 <strong className="font-bold text-yellow-200">Developer Options Tip:</strong>{" "}
 If Developer Options is hidden, go to About and click Fire TV Stick 7 times to enable it.
 </p>
 </div>
 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




