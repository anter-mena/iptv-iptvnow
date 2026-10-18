"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Router, Clock, Plus, Camera, Info, Star } from"lucide-react"
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


export function InstallationFormuler() {

 const faqs = [
 {
 q:"What's the difference between MyTVOnline 1 and 2?",
 a:"MyTVOnline 2 is the newer version with improved interface and better Xtream Codes support. We recommend using MyTVOnline 2 for better performance.",
 },
 {
 q:"Do I need to register MAC address for Formuler?",
 a:"No, Formuler boxes use Xtream Codes login method, so you only need username and password from your IPTV provider.",
 },
 {
 q:"Why won't my channels load?",
 a:"Check that \"Login Required\" is enabled, verify your credentials are correct, ensure stable internet connection, and try restarting the app.",
 },
 {
 q:"Can I use multiple IPTV services on Formuler?",
 a:"Yes, you can configure multiple portals in MyTVOnline and switch between different IPTV providers easily.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Android Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Formuler Z/<span className="text-primary">Dreamlink Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: All Formuler Z series and Dreamlink T series devices
 </p>
 </div>

 {/* Info Banner */}
 <div className="mb-16">
 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted shadow-sm ring-1 ring-border">
 <Info className="h-5 w-5 text-muted-foreground" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground">Two Setup Methods Available</h4>
 <p className="text-sm font-bold text-foreground/75 mt-0.5 leading-relaxed">Choose the method based on your device type - Formuler or Dreamlink</p>
 </div>
 </div>
 </div>
 </div>

 {/* Method 1 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 01</span>
 <h4 className="text-2xl font-bold text-foreground uppercase tracking-tight">Formuler Z: MyTVOnline 2 & 3</h4>
 </div>
 <p className="text-muted-foreground mb-6 text-sm">For all Formuler Z series devices using MyTVOnline application.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Open MyTVOnline 2 or 3 from your Formuler home screen",
 desc:"Navigate to your apps and launch MyTVOnline 2 or 3 application"
 },
 {
 title:"Navigate to Menu → Connections → Add Portal",
 desc:"Access the main menu, go to Connections, then select Add Portal",
 tag:"Step 2 - Add Portal",
 img:"/assets/installationGuide/formulerDreamlink/01.png"
 },
 {
 title:"Configure your Xtream Codes connection",
 desc:"Enter your server details and login information",
 bullets: [
"Portal Name: Enter any name (e.g., \"My IPTV\")",
"Portal URL: Enter your server URL",
"Login Required: Enable this option",
"Username: Enter your IPTV username",
"Password: Enter your IPTV password"
 ]
 },
 {
 title:"Press \"Connect\" to establish the connection",
 desc:"Click the Connect button to test your credentials and establish connection"
 },
 {
 title:"Your channels should now load and you're ready to watch!",
 desc:"Setup complete! Start enjoying your IPTV service on your Formuler device"
 }
 ]} />

 
 </div>

 {/* Method 2 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 02</span>
 <h4 className="text-2xl font-bold text-foreground uppercase tracking-tight">Dreamlink: DOL2 App</h4>
 </div>
 <p className="text-muted-foreground mb-6 text-sm">For all Dreamlink T series devices using DOL2 application.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Open DOL2 App from your Dreamlink home screen",
 desc:"Navigate to your apps and launch the DOL2 application"
 },
 {
 title:"Go to Menu → Portals → Edit Portal",
 desc:"Access the main menu, navigate to Portals, then select Edit Portal",
 tag:"Step 2 - Edit Portal",
 img:"/assets/installationGuide/formulerDreamlink/02.png"
 },
 {
 title:"Enter your portal configuration",
 desc:"Input your server details and login information",
 tag:"Step 3 - Portal Configuration",
 bullets: [
"Portal Title: Any name you prefer",
"Portal URL: Your IPTV server URL",
"Login Required: Yes, activate this",
"Username: Your credentials",
"Password: Your credentials"
 ],
 img:"/assets/installationGuide/formulerDreamlink/03.png"
 },
 {
 title:"Save the configuration and restart the app to connect",
 desc:"Save your settings and restart the DOL2 app to complete the setup"
 }
 ]} />

 
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




