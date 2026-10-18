"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Tv, Clock, Plus, Camera } from"lucide-react"
import { cn } from"@/lib/utils"
import { ImageZoom } from"@/components/ui/image-zoom"

export function InstallationBuzzTv() {

 const faqs = [
 {
 q:"What's the difference between XC API Login and MAC Server?",
 a:"XC API Login uses username/password (Xtream Codes), while MAC Server uses your device's MAC address. XC API Login is more flexible and recommended.",
 },
 {
 q:"Which method should I use?",
 a:"Use XC API Login if your provider gave you a username and password. Use MAC Server only if specifically required.",
 },
 {
 q:"Why won't my channels load?",
 a:"Verify your credentials, ensure stable internet, check the connection method, and try restarting the BuzzTV app.",
 },
 {
 q:"Can I use multiple IPTV services on BuzzTV?",
 a:"Yes, you can configure multiple connections in Server Settings and switch between them easily.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Box Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 BuzzTV <span className="text-primary">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 BuzzTV XPL 3000, XRS 4000, XRS 4500, E2000, and all BuzzTV Android boxes
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
 <p className="mt-0.5 text-sm font-bold text-muted-foreground">5-8 Minutes · Xtream Codes Login</p>
 </div>
 </div>
 </div>
 </div>

 {/* Technical Workflow */}
 <div className="space-y-12 mb-16">
 {/* Method 1 */}
 <div className="space-y-4">
 <div className="flex items-center space-x-3 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 01</span>
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground">XC API Login</h5>
 </div>
 <div className="divide-y divide-border">
 {[
 {
 title:"From your BuzzTV home screen, navigate to Server Settings",
 desc:"Access the main settings menu and locate Server Settings option",
 tag:"Step 1 - Server Settings",
 img:"/assets/installationGuide/buzzTVBox/01.png"
 },
 {
 title:"Select XC API Login → Add XC API Login",
 desc:"Choose the XC API Login option and then select Add XC API Login to create a new connection",
 tag:"Step 2 - Add XC API Login",
 img:"/assets/installationGuide/buzzTVBox/02.png"
 },
 {
 title:"Configure your Xtream Codes connection",
 desc:"",
 tag:"Step 3 - Configure Connection",
 img:"/assets/installationGuide/buzzTVBox/03.png",
 bullets: [
"Portal Name: Enter any name (e.g., \"My IPTV\")",
"Portal URL: Enter your server URL",
"User name: Enter your IPTV username",
"Password: Enter your IPTV password"
 ]
 },
 {
 title:"Press \"Connect\" or \"Save\" to establish the connection",
 desc:"Save your configuration and test the connection to your IPTV service"
 },
 {
 title:"Return to home screen and select Live TV to start watching!",
 desc:"Setup complete! Go back to the main screen and enjoy your IPTV service"
 }
 ].map((step, i) => (
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
 {step.bullets.map((bullet, idx) => {
 const [label, text] = bullet.split(":");
 return (
 <li key={idx} className="text-[11px] text-muted-foreground">
 <strong className="text-foreground">{label}:</strong> {text}
 </li>
 );
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
 </div>


 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




