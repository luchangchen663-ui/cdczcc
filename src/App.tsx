import React from 'react';
import { motion } from 'motion/react';
import { Zap, Trash2, BarChart3, Info, Map as MapIcon, ArrowRight, AlertTriangle, FileText, Globe } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-acid-green selection:text-black font-sans leading-relaxed">
      {/* 00. Navigation Overlay (Static) */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="font-mono text-sm tracking-tighter text-white">UK_BATTERY_LOOP // 2025-26</div>
        <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          <a href="#production" className="hover:text-acid-green transition-colors">Production</a>
          <a href="#fieldwork" className="hover:text-acid-green transition-colors">Fieldwork</a>
          <a href="#data" className="hover:text-acid-green transition-colors">Data</a>
          <a href="#conclusion" className="hover:text-acid-green transition-colors">Verdict</a>
        </div>
      </nav>

      {/* 01. Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden border-b border-acid-green bg-bg-dark pt-32 p-8 md:p-12 mb-24">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1594814171200-fe79b439d070?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 grayscale saturate-0 contrast-150" />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="massive-heading text-acid-green"
              id="main-title"
            >
              Green<br />Capitalism
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-sm font-mono tracking-widest uppercase opacity-60"
            >
              UK Battery Governance Loop // 2025-2026 Investigation
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-right max-w-md"
          >
            <p className="text-[10px] font-mono uppercase text-acid-green mb-3 tracking-[0.3em]">Project Abstract</p>
            <p className="text-xl md:text-2xl leading-snug font-light italic opacity-80 text-white/90">
              A socio-technical investigation into the friction between infinite economic growth and the material reality of physical waste.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24 max-w-5xl space-y-48">
        
        {/* 00. Visualisation Logic */}
        <section className="border-y border-acid-green/20 py-16 relative overflow-hidden" id="visualisation-logic">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 grayscale pointer-events-none">
            <img src="https://i.postimg.cc/sXtJyhjQ/Wechat-IMG26415.jpg" className="object-cover h-full" referrerPolicy="no-referrer" alt="Decorative extract backdrop" />
          </div>
          <FadeIn>
            <div className="max-w-3xl relative z-10">
              <p className="mono-label !text-acid-green mb-4">Methodological Brief</p>
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic">
                This visualisation translates theoretical concepts into data-driven structures. It shows that battery recycling operates within a broader extractive system, where material flows, global inequalities, and governance mechanisms remain unchanged.
              </p>
              <p className="text-lg text-gray-400 mt-6">
                Rather than solving ecological problems, recycling functions as a form of management within green capitalism.
              </p>
            </div>
          </FadeIn>
        </section>
        
        {/* 01. Production Spine */}
        <section id="production" className="relative group">
          <FadeIn>
            <div className="flex items-end gap-3 mb-12">
              <span className="text-[50px] font-serif italic text-acid-green leading-none">01.</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border-dark flex-1">Production Spine</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-16 items-start text-white/70">
            <FadeIn delay={0.2}>
              <div className="space-y-8 text-white/70 text-lg leading-relaxed">
                <p>
                  The UK battery landscape is defined by the <span className="text-acid-green font-bold underline decoration-acid-green/50 underline-offset-4 cursor-help">Sunderland Axis</span>. 
                  With over <span className="text-white font-medium">£6.6 billion</span> in investment, the State has moved to 'de-risk' capital expansion under the guise of green sovereignty.
                </p>
                
                <div className="pt-8 border-t border-border-dark space-y-4">
                  <h3 className="mono-label !text-white text-xs">Racial Capitalism in the Anthropic Scene</h3>
                  <p className="text-sm opacity-80 italic">
                    "Following Yusoff (2018), this project defines the ‘Anthropic scene’ of the battery economy as one rooted in racialized power structures. We critique the stark contrast between the ‘clean’ aesthetics of a UK supermarket and the toxic extraction zones in the Global South."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-acid-green/60">Ref: Yusoff (2018) / Robinson (2020)</p>
                </div>

                <a 
                  href="https://felt.com/map/Battery-JwhgMVLvR19BJ2vNKXY9C8DB?share=1&loc=52.721,-1.948,6.82z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/btn cursor-pointer w-fit pt-4"
                >
                  <div className="w-12 h-12 rounded-full border border-acid-green flex items-center justify-center group-hover/btn:bg-acid-green transition-colors">
                    <ArrowRight className="w-5 h-5 text-acid-green group-hover/btn:text-black transition-colors" />
                  </div>
                  <span className="mono-label !text-acid-green">Logistics Map // Access Node</span>
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <div className="relative group/map aspect-video bg-panel-dark border border-border-accent overflow-hidden flex items-center justify-center">
                  <iframe 
                    src="https://felt.com/embed/map/Battery-JwhgMVLvR19BJ2vNKXY9C8DB?loc=52.721,-1.948,6.82z"
                    width="100%"
                    height="100%"
                    title="UK Battery Logistics Map"
                    className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 contrast-125 saturate-50"
                  />
                  <div className="absolute top-4 left-4 p-2 border border-acid-green/30 bg-black/40 backdrop-blur-sm pointer-events-none">
                    <p className="mono-label !text-[8px] !text-acid-green">Interactive_Map: Sunderland_Giga_Axis</p>
                  </div>
                </div>

                <div className="aspect-video bg-panel-dark border border-border-accent relative overflow-hidden group">
                  <img 
                    src="https://i.postimg.cc/d1MYM7Kh/IMG-8483.jpg" 
                    alt="Socio-technical landscape evidence" 
                    className="w-full h-full object-cover grayscale-[0.3] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 mono-label !text-[8px]">Site_Archive: Industrial_Boundary</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <blockquote className="mt-20 border-l-[3px] border-acid-green bg-panel-dark/50 p-8 md:p-12 text-xl md:text-2xl italic text-gray-300 font-light leading-relaxed relative">
              <span className="absolute top-0 left-4 text-6xl text-acid-green/20 font-serif">"</span>
              The State absorbs the risk, while the Corporation extracts the value. The battery becomes a vessel for economic survival rather than ecological repair.
            </blockquote>
          </FadeIn>
        </section>

        {/* 02. Fieldwork */}
        <section id="fieldwork">
          <FadeIn>
            <div className="flex items-end gap-3 mb-16">
              <span className="text-[50px] font-serif italic text-acid-green leading-none">02.</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border-dark flex-1">Retail Friction</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16">
             <FadeIn delay={0.2}>
               <div className="aspect-[4/5] bg-panel-dark border border-border-accent overflow-hidden relative group">
                 <img 
                   src="https://i.postimg.cc/FRt4tfQs/IMG-8469.jpg" 
                   alt="Spatially marginalized battery recycling bin" 
                   className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-x-0 bottom-0 bg-acid-green text-black font-bold text-xs uppercase p-4 italic z-10">
                   "The aesthetics of neglect ensure the primary logic of space remains consumption, not circularity."
                 </div>
               </div>
             </FadeIn>

             <FadeIn delay={0.4}>
               <div className="h-full flex flex-col justify-center gap-12">
                 <div className="space-y-6">
                    <h3 className="text-acid-green font-mono text-[11px] uppercase tracking-[0.3em] font-bold">Governmentality and the Dispositif of the Bin</h3>
                    <p className="text-white/80 text-xl leading-snug italic">
                      “Our spatial analysis of supermarkets in Southampton utilizes Foucault’s (1991) concept of ‘Governmentality’ to interpret the recycling bin not merely as a container, but as a dispositif (apparatus).”
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Through the regulatory requirements imposed on retailers, power operates by shifting environmental responsibility away from the industrial production system and onto the micro-behaviours of individual consumers.
                    </p>
                 </div>
                 
                 <div className="p-6 bg-industrial-red/5 border border-industrial-red/20 flex gap-6 items-start">
                    <AlertTriangle className="w-12 h-12 text-industrial-red shrink-0 mt-1" />
                    <div>
                        <p className="font-mono text-xs text-industrial-red uppercase tracking-widest mb-2 font-bold">Technical Friction</p>
                        <p className="text-sm text-gray-400">The consumer must actively "disrupt" the shopping flow to act ecologically. The architecture actively discourages this disruption.</p>
                    </div>
                 </div>
               </div>
            </FadeIn>
          </div>

          {/* Large Scale Video POV */}
          <FadeIn delay={0.1}>
            <div className="mt-32 mb-16">
              <div className="aspect-video w-full bg-panel-dark border border-border-accent relative overflow-hidden group/vid shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/KHslVLzB8uk"
                  title="Field POV Investigation"
                  className="w-full h-full grayscale-[0.2] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
                <div className="absolute top-6 left-6 p-3 border border-acid-green/30 bg-black/60 backdrop-blur-md pointer-events-none z-10 transition-opacity group-hover/vid:opacity-0">
                   <p className="mono-label !text-[10px] !text-acid-green">Investigation_Feed: Video_Evidence_POV_S01</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12">
              <p className="mono-label !text-white text-[9px] mb-4">Spatial_Archive: Consistent_Neglect</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "https://i.postimg.cc/FRt4tfQ9/IMG-8470.jpg",
                  "https://i.postimg.cc/pTNHN9tL/IMG-8471.jpg",
                  "https://i.postimg.cc/C1ygyZVh/IMG-8472.jpg",
                  "https://i.postimg.cc/cHqSqKNC/IMG-8473.jpg",
                  "https://i.postimg.cc/j5VbVWrL/IMG-8477.jpg",
                  "https://i.postimg.cc/d1MYM7Kh/IMG-8483.jpg",
                  "/regenerated_image_1777334591465.jpg",
                  "/regenerated_image_1777334593090.jpg",
                  "/regenerated_image_1777334594908.jpg"
                ].map((url, i) => (
                  <div key={i} className="aspect-square bg-panel-dark border border-border-accent overflow-hidden group/thumb relative">
                     <img 
                       src={url} 
                       alt={`Fieldwork evidence ${i}`} 
                       className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all cursor-crosshair" 
                       referrerPolicy="no-referrer"
                     />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 03. Data Dashboard */}
        <section id="data">
          <FadeIn>
            <div className="flex items-end gap-3 mb-16">
              <span className="text-[50px] font-serif italic text-acid-green leading-none">03.</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border-dark flex-1">Physics of Failure</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
               <div className="bg-panel-dark border border-border-accent p-6 space-y-4">
                 <img src="https://i.postimg.cc/j5VbVWrL/IMG-8477.jpg" alt="Field evidence loop" className="w-full grayscale-[0.3] opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                 <p className="mono-label !text-[8px]">Visual_Evidence: Circular_Myth</p>
               </div>
            </FadeIn>
            <FadeIn delay={0.2}>
               <div className="bg-panel-dark border border-border-accent p-6 space-y-4">
                 <img src="https://i.postimg.cc/76vkvCyz/IMG-8488.jpg" alt="Field evidence extraction" className="w-full grayscale-[0.3] opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                 <p className="mono-label !text-[8px]">Visual_Evidence: Extraction_Scale</p>
               </div>
            </FadeIn>
            <FadeIn delay={0.3}>
               <div className="bg-panel-dark border border-border-accent p-6 space-y-4">
                 <img src="https://i.postimg.cc/Y9cHc4wW/IMG-8489.jpg" alt="Governance Evidence" className="w-full grayscale-[0.3] opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                 <p className="mono-label !text-[8px]">Visual_Evidence: Governance_Residual</p>
               </div>
            </FadeIn>
          </div>

          {/* Physical Data Verification Grid */}
          <div className="mt-8 mb-16">
            <p className="mono-label !text-white text-[9px] mb-4">Data_Validation: Physical_Residual_Archive</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { url: "https://i.postimg.cc/sXtJyhjQ/Wechat-IMG26415.jpg", label: "Trace_01: Extraction_Logic" },
                { url: "https://i.postimg.cc/Jn9Qmkrs/Wechat-IMG26418.jpg", label: "Trace_02: Material_Friction" },
                { url: "https://i.postimg.cc/0QLCxwk6/Wechat-IMG26422.jpg", label: "Trace_03: Logistical_Void" },
                { url: "https://i.postimg.cc/63DhwvWT/Wechat-IMG26424.jpg", label: "Trace_04: Systemic_Residual" }
              ].map((img, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="group relative aspect-square bg-panel-dark border border-border-accent overflow-hidden">
                    <img 
                      src={img.url} 
                      alt={img.label}
                      className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="mono-label !text-[8px] !text-acid-green">{img.label}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-acid-green/5 border-l-4 border-acid-green p-8 mb-16 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="mono-label !text-white text-xs mb-4">The Extractive Zone: Managing Consequences</h3>
                <p className="text-xl text-gray-300 italic">
                  “The data visualization of the 45% recycling bottleneck reveals a ‘Logic of Extraction’ described by Gómez-Barris (2017). In this zone, recycling serves as a technique to 'manage consequences' rather than causes.”
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  By creating a performance of circularity, the extractive logic ensures that capitalist expansion can continue unchecked, prioritizing resource removal over genuine ecological restoration.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 grayscale pointer-events-none">
                <img src="https://i.postimg.cc/76vkvCyz/IMG-8488.jpg" className="object-cover h-full" referrerPolicy="no-referrer" alt="Decorative extraction grid" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="border border-border-accent bg-panel-dark">
              <table className="w-full text-left font-mono border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-bg-dark border-b border-acid-green/30">
                    <th className="p-6 text-[10px] uppercase tracking-[0.3em] text-acid-green font-bold">Metric</th>
                    <th className="p-6 text-[10px] uppercase tracking-[0.3em] text-acid-green font-bold">Status</th>
                    <th className="p-6 text-[10px] uppercase tracking-[0.3em] text-acid-green font-bold">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white/60">Market Placement</td>
                    <td className="p-6"><span className="text-industrial-red font-bold">+12% YoY</span></td>
                    <td className="p-6 text-white/40 italic">Infinite expansion of commodity production.</td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white/60">Collection Rate</td>
                    <td className="p-6 text-white">45.11%</td>
                    <td className="p-6 text-white/40 italic">The physical bottleneck of individualized responsibility.</td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white/60">Energy Gap</td>
                    <td className="p-6 text-industrial-red font-bold">55 GWh</td>
                    <td className="p-6 text-white/40 italic">Production speed exceeds the circular loop's capacity.</td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white/60">Governance Void</td>
                    <td className="p-6 text-acid-green font-bold">CRITICAL</td>
                    <td className="p-6 text-white/40 italic">Systemic blindspot in the 2026 data stream.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </section>

        {/* 05. Conclusion */}
        <section id="conclusion" className="pb-32">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 bg-white/10 rounded-full">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">04. Beyond the Map</h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl space-y-12">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <p className="text-2xl font-light text-gray-300 leading-relaxed">
                  The <span className="text-industrial-red font-medium italic underline decoration-industrial-red/30 underline-offset-8">55% of batteries</span> that vanish from the data stream are not truly 'gone.' 
                  They represent the externalized costs of Green Capitalism.
                </p>
                <div className="grid grid-cols-2 gap-4 aspect-[2/1]">
                   <img src="https://i.postimg.cc/Y9cHc4wW/IMG-8489.jpg" className="w-full h-full object-cover grayscale-[0.3] opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" alt="Archive A" />
                   <img src="https://i.postimg.cc/fL4N43hm/IMG-8509.jpg" className="w-full h-full object-cover grayscale-[0.3] opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" alt="Archive B" />
                </div>
                <p className="text-lg text-gray-400">
                  Whether they end up in the Southampton Port for export or in domestic landfills, they constitute a 'governance blind spot.'
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* Verdict Bar */}
      <div className="fixed bottom-0 left-0 w-full h-16 bg-acid-green text-black z-50 flex items-center px-8 justify-between">
        <span className="font-black uppercase tracking-widest text-xs md:text-sm">Verdict 2026: Externalized Costs of Expansion</span>
        <div className="hidden md:flex gap-4">
          <span className="border border-black px-2 py-1 text-[10px] font-mono font-bold">55% DATA BLINDSPOT</span>
          <span className="bg-black text-acid-green px-2 py-1 text-[10px] font-mono font-bold italic">S-M AXIS: ALERT</span>
        </div>
      </div>

      {/* 06. Footer & References */}
      <footer className="border-t border-border-dark bg-black py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <Zap className="w-64 h-64 text-acid-green" />
        </div>
        
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-12" id="references">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-500" />
                <h3 className="mono-label text-gray-300">Bibliography & Theoretical Framework</h3>
              </div>
              <ul className="space-y-6 text-sm text-gray-500 font-light max-w-xl">
                <li>
                  <span className="block text-gray-300 mb-1 font-normal uppercase tracking-wider text-[10px]">Governmentality</span>
                  Foucault, M. (1991) 'Governmentality', in Burchell, G., Gordon, C. and Miller, P. (eds.) <i>The Foucault Effect: Studies in Governmentality</i>. Chicago: University of Chicago Press, pp. 87–104.
                </li>
                <li>
                  <span className="block text-gray-300 mb-1 font-normal uppercase tracking-wider text-[10px]">The Anthropic Scene</span>
                  Yusoff, K. (2018) <i>A Billion Black Anthropocenes or None</i>. Minneapolis: University of Minnesota Press.
                </li>
                <li>
                  <span className="block text-gray-300 mb-1 font-normal uppercase tracking-wider text-[10px]">Racial Capitalism</span>
                  Robinson, C. J. (2020) <i>Black Marxism: The Making of the Black Radical Tradition</i>. 3rd edn. Chapel Hill: University of North Carolina Press.
                </li>
                <li>
                  <span className="block text-gray-300 mb-1 font-normal uppercase tracking-wider text-[10px]">The Extractive Zone</span>
                  Gómez-Barris, M. (2017) <i>The Extractive Zone: Social Ecologies and Decolonial Perspectives</i>. Durham: Duke University Press.
                </li>
                <li className="pt-4 opacity-50">
                  <span className="block text-gray-400 mb-1 font-normal uppercase tracking-wider text-[10px]">Data Sources</span>
                  Department for Environment, Food & Rural Affairs (DEFRA) (2025) <i>UK Battery Waste Statistics 2024-2025</i>. London: HMSO.
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div className="pt-2">
                <div className="text-acid-green font-mono text-3xl tracking-tighter mb-4">MATERIALIZING_GC</div>
                <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-12">All rights reserved // London-Southampton 2026</p>
              </div>
              
              <div className="flex gap-4">
                 <div className="w-10 h-[1px] bg-border-dark mt-3" />
                 <p className="text-[10px] font-mono text-gray-600 leading-relaxed uppercase tracking-widest">
                   The production of this investigation was funded by independent socio-technical grants. No industrial capital was used to de-risk the research.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
