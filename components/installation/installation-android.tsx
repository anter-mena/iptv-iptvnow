"use client"

import { InstallationFaq } from"./installation-faq"

import * as React from"react"
import { Smartphone, Clock, Plus, Camera, AlertCircle, Wifi, Battery } from"lucide-react"
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


export function InstallationAndroid() {

 const faqs = [
 {
 q:"Does TiviMate include channels or an IPTV service?",
 a:"No, TiviMate is just an advanced player app. You need an active subscription with us to get the channels.",
 },
 {
 q:"Why do I see \"invalid\" when logging into TiviMate?",
 a:"This usually means a typo in the URL or credentials. Check for extra spaces and ensure the URL exactly matches what we provided.",
 },
 {
 q:"Free vs Premium - do I need TiviMate Premium?",
 a:"The free version is great for live TV. However, VOD (movies/series) and advanced recording features require TiviMate Premium.",
 },
 {
 q:"Best practices to reduce buffering on mobile?",
 a:"Connect to a 5GHz Wi-Fi network instead of mobile data when possible, and clear background apps to free up memory.",
 },
 {
 q:"Can I cast to TV from my phone?",
 a:"Yes! Many Android apps like iMPlayer and VLC allow you to cast directly to a Chromecast or Smart TV.",
 },
 {
 q:"What internet speed is recommended?",
 a:"We recommend at least 15 Mbps for standard HD and 30 Mbps+ for 4K streaming.",
 }
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Mobile Ecosystem</p>
 <h3 className="font-display text-2xl font-medium tracking-tight text-foreground uppercase md:text-3xl">
 Android Phone <span className="text-primary">& Tablet Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-muted-foreground font-bold leading-relaxed">
 Compatible with: Android 5.0 or higher devices - phones and tablets
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
 <Wifi className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0" />
 <p className="text-sm text-muted-foreground font-medium">Requirements: Android 5.0 or higher, stable WiFi or 4G/5G connection</p>
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
 <p className="text-sm text-muted-foreground font-medium">The most user-friendly IPTV app for Android phones and tablets.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Download iMPlayer - IPTV Player from Google Play Store",
 desc:"Search for \"iMPlayer\" in the Google Play Store and download the official mobile app",
 tag:"Step 1 - Download iMPlayer",
 img:"/assets/installationGuide/android/01.png"
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

 {/* Method 2: TiviMate */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 02</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">TiviMate Mobile Setup (Google Play)</h4>
 </div>
 <p className="text-sm text-muted-foreground font-medium">Advanced IPTV player with professional features for Android users.</p>
 </div>
 
 <div className="installation-inline-note">
 <div className="flex space-x-3">
 <AlertCircle className="h-5 w-5 text-primary shrink-0" />
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground mb-1">Very Important</h5>
 <p className="text-sm leading-relaxed text-muted-foreground">
 VOD on TiviMate only works with their Premium. Our service (trial & subscription) already has VOD built in.
 </p>
 </div>
 </div>
 </div>

 <StepList steps={[
 {
 title:"Open Google Play Store and search for TiviMate IPTV Player",
 desc:"Find and locate the official TiviMate IPTV Player application"
 },
 {
 title:"Tap Install and wait for completion",
 desc:"Download and install the TiviMate application to your device",
 tag:"Step 2 - Install TiviMate",
 img:"/assets/installationGuide/android/02.png"
 },
 {
 title:"Open TiviMate, tap Add Playlist",
 desc:"Launch TiviMate and select the option to add a new playlist"
 },
 {
 title:"Select Xtream Codes or M3U Playlist based on what your provider gave you",
 desc:"Choose the appropriate playlist format for your IPTV service"
 },
 {
 title:"Enter IPTV credentials",
 desc:"Then tap Next",
 bullets: [
"Server: Your provider's server URL",
"Username: Your username",
"Password: Your password"
 ]
 },
 {
 title:"Wait for channels to load, then start watching!",
 desc:"Setup complete! Your channels will load and you can start streaming"
 }
 ]} />

 
 </div>

 {/* Method 3: Official APK */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">METHOD 03</span>
 <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">Official APK Installation</h4>
 </div>
 <p className="text-sm text-muted-foreground font-medium">Use this if TiviMate doesn't appear in Play Store on your device.</p>
 </div>

 <StepList steps={[
 {
 title:"Go to the official site: tivimate.com and download the APK",
 desc:"Visit the official TiviMate website to download the APK file",
 tag:"Step 1 - Download APK",
 img:"/assets/installationGuide/android/03.png"
 },
 {
 title:"Allow installs from unknown sources if prompted (Settings > Security)",
 desc:"Enable installation from unknown sources in your Android settings"
 },
 {
 title:"Open the file to install TiviMate, then launch the app",
 desc:"Install the APK file and open the TiviMate application"
 },
 {
 title:"Follow the same steps as above to add your IPTV playlist",
 desc:"Use the same configuration steps from Method 2 to set up your IPTV service"
 }
 ]} />

 
 </div>

 {/* Tips */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
 <Wifi className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground mb-2">Data Usage Tip</h5>
 <p className="text-sm text-muted-foreground leading-relaxed font-medium">Use WiFi when possible. Streaming uses approximately 1GB per hour at standard quality, 3GB per hour at HD quality.</p>
 </div>
 </div>
 </div>
 <div className="installation-inline-note">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
 <Battery className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-foreground mb-2">Battery Optimization</h5>
 <p className="text-sm text-muted-foreground leading-relaxed font-medium">Streaming drains battery quickly. Consider disabling battery optimization for your IPTV app in Settings &gt; Battery &gt; App battery management.</p>
 </div>
 </div>
 </div>
 </div>

 {/* FAQs */}
 <InstallationFaq items={faqs} />
 </div>
 )
}




