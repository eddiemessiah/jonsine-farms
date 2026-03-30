"use client";

import Link from "next/link";
import { 
  IconMeat, 
  IconFish, 
  IconTruckDelivery, 
  IconDiscountCheckFilled, 
  IconSnowflake, 
  IconMapPin, 
  IconPhone, 
  IconBrandWhatsapp,
  IconClock,
  IconChefHat
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream selection:bg-brand-green selection:text-white pb-24 md:pb-0">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-sm">
                <IconMeat className="text-white w-5 h-5" stroke={2} />
             </div>
             <div className="text-2xl font-black text-brand-dark tracking-tight font-serif">
                Jonsine<span className="text-brand-orange">.</span>
             </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <Link href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green border-b border-brand-green pb-1">Home</Link>
            <Link href="#products" className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A7471] hover:text-brand-green transition-colors">Products</Link>
            <Link href="#wholesale" className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A7471] hover:text-brand-green transition-colors">Wholesale</Link>
          </div>

          <a href="https://wa.me/2348026893672" className="hidden md:flex btn-primary bg-brand-green text-sm px-6 py-2.5">
            <IconBrandWhatsapp className="w-4 h-4" /> Order via WhatsApp
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2940&auto=format&fit=crop" 
            alt="Professional butcher cutting fresh premium meats" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
               <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
               <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Premium Foods in Isolo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight font-serif">
              Fresh, Clean &<br/>
              <span className="text-brand-orange italic">Premium</span> Cuts.
            </h1>
            
            <p className="text-lg md:text-xl text-[#A39C98] leading-relaxed font-light max-w-xl">
              Your trusted neighborhood plug. From family dinners to massive event catering, we supply top-quality poultry and deep-sea freshness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/2348026893672" className="btn-secondary w-full sm:w-auto text-base">
                <IconBrandWhatsapp className="w-5 h-5" /> Order Now
              </a>
              <a href="#location" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-3.5 rounded-full font-bold tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-base">
                <IconMapPin className="w-5 h-5" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Social Proof --- */}
      <section className="py-10 bg-white border-b border-black/5">
         <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-[#A39C98] mb-8">Trusted by Local Isolo Parishes & Caterers</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
               <div className="flex items-center gap-2 text-brand-dark font-bold font-serif text-xl"><IconChefHat stroke={1.5} /> Leilas Events</div>
               <div className="flex items-center gap-2 text-brand-dark font-bold font-serif text-xl"><IconDiscountCheckFilled /> Premium Catering</div>
               <div className="flex items-center gap-2 text-brand-dark font-bold font-serif text-xl"><IconMapPin stroke={1.5} /> Local Parishes</div>
            </div>
         </div>
      </section>

      {/* --- Products --- */}
      <section id="products" className="py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight font-serif">What's in Our Freezers?</h2>
             <p className="text-[#7A7471] text-lg font-medium">100% fresh. Neatly packaged. Ready for your pot.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Poultry */}
            <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden flex flex-col">
               <div className="flex justify-between items-start mb-10 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-brand-dark font-serif mb-2">Poultry & Cuts</h3>
                    <p className="text-[#7A7471]">The gold standard in Nigerian poultry.</p>
                  </div>
                  <div className="bg-brand-surface text-brand-orange w-14 h-14 rounded-full flex items-center justify-center">
                     <IconMeat className="w-7 h-7" stroke={1.5} />
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-14 relative z-10">
                  {['Whole Chicken', 'Turkey & Fryer', 'Gizzard', 'Value Cuts (Cut 4)', 'Chicken Legs', 'Chicken Neck'].map((item) => (
                     <div key={item} className="flex items-center gap-3 font-semibold text-[#4A4542]">
                        <IconDiscountCheckFilled className="w-5 h-5 text-brand-light-green shrink-0" /> {item}
                     </div>
                  ))}
               </div>

               <div className="relative h-64 rounded-2xl overflow-hidden mt-auto">
                  <img src="https://images.unsplash.com/photo-1604503468373-2573ca00bbdb?q=80&w=2940&auto=format&fit=crop" alt="Fresh Chicken Cuts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
               </div>
            </div>

            {/* Seafood */}
            <div className="bg-brand-green p-10 md:p-14 rounded-[2rem] shadow-xl group relative overflow-hidden text-white flex flex-col">
               <div className="flex justify-between items-start mb-10 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black font-serif mb-2">Fresh Seafood</h3>
                    <p className="text-brand-light-green text-[#A39C98]">Deep-sea freshness delivered.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center border border-white/10">
                     <IconFish className="w-7 h-7" stroke={1.5} />
                  </div>
               </div>
               
               <div className="space-y-4 mb-14 relative z-10">
                  <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <span className="font-bold text-lg">Fresh Fish</span>
                     <span className="text-brand-orange text-xs font-bold tracking-widest uppercase bg-brand-orange/10 px-3 py-1 rounded-full">In Stock</span>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <span className="font-bold text-lg">Prawns & Shrimp</span>
                     <span className="text-brand-orange text-xs font-bold tracking-widest uppercase bg-brand-orange/10 px-3 py-1 rounded-full">In Stock</span>
                  </div>
               </div>

               <div className="relative h-64 rounded-2xl overflow-hidden mt-auto">
                  <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=2874&auto=format&fit=crop" alt="Fresh Seafood" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mix-blend-luminosity" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Standards --- */}
      <section className="py-24 bg-white border-y border-black/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mb-6 text-brand-green border border-black/5">
                     <IconSnowflake className="w-8 h-8" stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">Unbroken Cold Chain</h3>
                  <p className="text-[#7A7471] leading-relaxed">Strict temperature controls from farm to your freezer to ensure zero spoilage.</p>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mb-6 text-brand-orange border border-black/5">
                     <IconTruckDelivery className="w-8 h-8" stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">Wholesale & Retail</h3>
                  <p className="text-[#7A7471] leading-relaxed">Whether you need 1kg or 100 cartons, we serve you with the same premium care.</p>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mb-6 text-brand-light-green border border-black/5">
                     <IconDiscountCheckFilled className="w-8 h-8" stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">Strict Hygiene</h3>
                  <p className="text-[#7A7471] leading-relaxed">Our facilities are cleaned hourly. Packaging meets the highest food safety standards.</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- Footer --- */}
      <footer id="location" className="bg-brand-dark text-white pt-24 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white font-serif">Visit Our Store.</h2>
               <div className="space-y-6">
                  <div className="flex items-start gap-4 text-[#A39C98]">
                     <IconMapPin className="text-brand-orange mt-1 w-6 h-6 shrink-0" />
                     <p className="text-lg">Plot 343, Okeho Street, Ire Akari Estate, Isolo, Lagos<br/><span className="text-sm opacity-60">(Beside Leilas Event Centre)</span></p>
                  </div>
                  <div className="flex items-center gap-4 text-[#A39C98]">
                     <IconPhone className="text-brand-orange w-6 h-6" />
                     <p className="text-lg">+234 802 689 3672</p>
                  </div>
               </div>
            </div>

            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-md">
               <h4 className="text-2xl font-black text-white mb-8 font-serif">Operating Hours</h4>
               <div className="space-y-5 text-[#A39C98] text-lg">
                  <div className="flex justify-between items-center pb-5 border-b border-white/10">
                     <span className="flex items-center gap-3"><IconClock className="w-5 h-5 text-brand-light-green"/> Mon - Sat</span> 
                     <span className="font-bold text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center opacity-60">
                     <span>Sunday</span> 
                     <span className="font-bold">Closed</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#7A7471] text-sm font-medium">
             <div className="text-brand-orange">Jonsine Farms Ltd.</div>
             <div>© 2026. All Rights Reserved.</div>
             <div>Designed by Havens Point Technologies.</div>
          </div>
        </div>
      </footer>

      {/* --- Sticky Mobile CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-xl border-t border-black/5 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
         <a href="https://wa.me/2348026893672" className="btn-secondary w-full justify-center text-lg py-4">
            <IconBrandWhatsapp className="w-6 h-6" /> Order Now via WhatsApp
         </a>
      </div>

    </main>
  );
}
