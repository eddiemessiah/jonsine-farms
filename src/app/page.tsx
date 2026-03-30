"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  IconMeat, 
  IconFish, 
  IconTruckDelivery, 
  IconDiscountCheckFilled, 
  IconSnowflake, 
  IconMapPin, 
  IconPhone, 
  IconMail, 
  IconBrandWhatsapp,
  IconClock,
  IconArrowRight,
  IconChefHat
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream selection:bg-brand-green selection:text-white pb-24 md:pb-0">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
                <IconMeat className="text-white w-6 h-6" stroke={2.5} />
             </div>
             <div className="text-xl md:text-2xl font-black text-brand-dark tracking-tight font-serif">
                Jonsine <span className="text-brand-orange">Farms</span>
             </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-bold uppercase tracking-widest text-brand-green border-b-2 border-brand-green pb-1">Home</Link>
            <Link href="#products" className="text-sm font-semibold uppercase tracking-widest text-stone-500 hover:text-brand-green transition-colors">Our Products</Link>
            <Link href="#wholesale" className="text-sm font-semibold uppercase tracking-widest text-stone-500 hover:text-brand-green transition-colors">Wholesale</Link>
          </div>

          <a href="https://wa.me/2348026893672" className="hidden md:flex btn-primary bg-brand-green text-sm px-6">
            <IconBrandWhatsapp className="w-4 h-4" /> Order via WhatsApp
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIr24R768InN79_-P_AZXnfmDCkFLcVMJ4N_8ofiIi-dSIyWBBeGxRkOAOJjbmmJRQS1PyMl_o5DaAlcPpx2-hZjDzaCPuG1h-JyZ3-xSKNNQFv42XdDKN8Wu7NStnnJcm-nQGo4PQceNN_hbdSNLdKTwac_RHbWYML2kxZWOsGg3gRGwLkgyWnSSCyrPE0dLZXR-QeRzm__21H6bGIV4ETCLUd8G_WZm0276_9iX5GnVfq2oDRfdtRJZGUwmw1UQx61vmJz-SH7R" 
            alt="Clean, premium butcher block" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
               <span className="text-white/90 text-xs font-bold tracking-widest uppercase">Premium Frozen Foods in Isolo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight font-serif">
              Fresh, Clean &<br/>
              <span className="text-brand-orange italic">Premium</span> Foods.
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light">
              Your trusted neighborhood plug. From family dinners to massive event catering, we supply top-quality poultry and deep-sea freshness at unbeatable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/2348026893672" className="btn-secondary w-full sm:w-auto justify-center text-lg">
                <IconBrandWhatsapp className="w-6 h-6" /> Order Now
              </a>
              <a href="#location" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-bold tracking-wide hover:bg-white/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg">
                <IconMapPin className="w-6 h-6" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Social Proof --- */}
      <section className="py-12 bg-white border-b border-stone-100">
         <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-bold tracking-widest uppercase text-stone-400 mb-8">Trusted by Local Isolo Parishes & Event Caterers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
               <div className="flex items-center gap-2 text-stone-800 font-bold font-serif text-xl"><IconChefHat /> Leilas Events</div>
               <div className="flex items-center gap-2 text-stone-800 font-bold font-serif text-xl"><IconDiscountCheckFilled /> Premium Catering</div>
               <div className="flex items-center gap-2 text-stone-800 font-bold font-serif text-xl"><IconMapPin /> Local Parishes</div>
            </div>
         </div>
      </section>

      {/* --- Products --- */}
      <section id="products" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight font-serif">What's in Our Freezers?</h2>
             <p className="text-stone-500 text-lg font-medium">100% fresh. Neatly packaged. Ready for your pot.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Poultry */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light-green/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
               <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-brand-dark font-serif mb-2">Poultry & Cuts</h3>
                    <p className="text-stone-500">The gold standard in Nigerian poultry.</p>
                  </div>
                  <div className="bg-brand-orange/10 text-brand-orange w-14 h-14 rounded-2xl flex items-center justify-center">
                     <IconMeat className="w-8 h-8" stroke={1.5} />
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-12 relative z-10">
                  {['Whole Chicken', 'Turkey & Fryer', 'Gizzard', 'Value Cuts (Cut 4)', 'Chicken Legs', 'Chicken Neck'].map((item) => (
                     <div key={item} className="flex items-center gap-3 font-semibold text-stone-700">
                        <IconDiscountCheckFilled className="w-5 h-5 text-brand-light-green" /> {item}
                     </div>
                  ))}
               </div>

               <div className="relative h-56 rounded-3xl overflow-hidden mt-auto">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9LKjWxuTnt7aTU8i-mKAGd6Bxjoa408A3iaf3Ty1izl0h62cMZbBSelYijmhP9gK_Ajca6-veoYhUtGTwCHCrTq2C7f4qO5s0SK9EGowk3YWiRzr2F3xiHAm6C8xbduN1fxCrPneofpP3MwmDgDyYolaGN_CFBUwfsamZNk-3TIm-80dwlb4W25AQidazFuampPdqMCJLxkjyKj37LcXJjN8lkOEMNSNG5K0eFFTNEPZy8BzV0tNxe0NjfC9FyIGvd2W1LpDYxtb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Fresh Chicken Cuts" className="object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
            </div>

            {/* Seafood */}
            <div className="bg-brand-green p-8 md:p-12 rounded-[2.5rem] shadow-xl group relative overflow-hidden text-white">
               <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black font-serif mb-2">Fresh Seafood</h3>
                    <p className="text-brand-light-green">Deep-sea freshness delivered.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center border border-white/20">
                     <IconFish className="w-8 h-8" stroke={1.5} />
                  </div>
               </div>
               
               <div className="space-y-4 mb-12 relative z-10">
                  <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                     <span className="font-bold text-lg">Fresh Fish</span>
                     <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">In Stock</span>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                     <span className="font-bold text-lg">Prawns & Shrimp</span>
                     <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">In Stock</span>
                  </div>
               </div>

               <div className="relative h-56 rounded-3xl overflow-hidden mt-auto">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcqqcojvhKVRgxjS7xIG3oZbCAN2moeMtLQp60i5qmdvp1PHL5MwclvtWlnEffaK5KBRAHwvajBDIGr41DB8cWlDMQJHgyrsXGvJdUxUK9Hm6bKguLOBu7XSs0LbwWtRuhrv9f_SmyIJ1KImR2hCkuAVtzV0jEJLQKQ9EzXi9CvnzspCxuIzyKli_w9zI55bHR_3NtxLrxKf9SwpcrCbeR28zlUNH0lRAj_jAVUlbnAoA-iDT7Z9PwWuo1FclLQRmQZiyJvAi69zaw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Fresh Seafood" className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Standards --- */}
      <section className="py-24 bg-white border-y border-stone-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-brand-cream rounded-[2rem] flex items-center justify-center mb-6 text-brand-green shadow-sm border border-stone-100">
                     <IconSnowflake className="w-10 h-10" stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">Unbroken Cold Chain</h3>
                  <p className="text-stone-500 leading-relaxed">Strict temperature controls from farm to your freezer to ensure zero spoilage.</p>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-brand-cream rounded-[2rem] flex items-center justify-center mb-6 text-brand-orange shadow-sm border border-stone-100">
                     <IconTruckDelivery className="w-10 h-10" stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">Wholesale & Retail</h3>
                  <p className="text-stone-500 leading-relaxed">Whether you need 1kg or 100 cartons, we serve you with the same premium care.</p>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-brand-cream rounded-[2rem] flex items-center justify-center mb-6 text-brand-light-green shadow-sm border border-stone-100">
                     <IconDiscountCheckFilled className="w-10 h-10" stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">Strict Hygiene</h3>
                  <p className="text-stone-500 leading-relaxed">Our facilities are cleaned hourly. Packaging meets the highest food safety standards.</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- Footer --- */}
      <footer id="location" className="bg-brand-dark text-white pt-24 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
               <h2 className="text-4xl font-black text-white font-serif">Visit Our Store.</h2>
               <div className="space-y-6">
                  <div className="flex items-start gap-4 text-stone-300">
                     <IconMapPin className="text-brand-orange mt-1 w-6 h-6 shrink-0" />
                     <p className="text-lg">Plot 343, Okeho Street, Ire Akari Estate, Isolo, Lagos<br/><span className="text-sm opacity-60">(Beside Leilas Event Centre)</span></p>
                  </div>
                  <div className="flex items-center gap-4 text-stone-300">
                     <IconPhone className="text-brand-orange w-6 h-6" />
                     <p className="text-lg">+234 802 689 3672</p>
                  </div>
               </div>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
               <h4 className="text-2xl font-black text-white mb-6 font-serif">Operating Hours</h4>
               <div className="space-y-4 text-stone-300 text-lg">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                     <span className="flex items-center gap-2"><IconClock className="w-5 h-5 text-brand-light-green"/> Mon - Sat</span> 
                     <span className="font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center opacity-50">
                     <span>Sunday</span> 
                     <span className="font-bold">Closed</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
             <div className="font-bold text-brand-orange">Jonsine Farms Ltd.</div>
             <div>© 2026. All Rights Reserved.</div>
             <div>Designed by Havens Point Technologies.</div>
          </div>
        </div>
      </footer>

      {/* --- Sticky Mobile CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-stone-200 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
         <a href="https://wa.me/2348026893672" className="btn-secondary w-full justify-center text-lg py-4">
            <IconBrandWhatsapp className="w-6 h-6" /> Order Now via WhatsApp
         </a>
      </div>

    </main>
  );
}
