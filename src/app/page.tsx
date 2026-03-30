export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      
{/*  Header / Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-xl font-black text-emerald-900 dark:text-emerald-50 tracking-tight flex items-center gap-2">
<span className="text-secondary">Jonsine</span> <span>Farms</span>
</div>
{/*  Desktop Nav  */}
<div className="hidden md:flex items-center gap-8">
<a className="font-manrope text-sm font-bold tracking-wide uppercase text-orange-700 dark:text-orange-500 border-b-2 border-orange-600 pb-1" href="#">Home</a>
<a className="font-manrope text-sm font-semibold tracking-wide uppercase text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors" href="#">Our Products</a>
<a className="font-manrope text-sm font-semibold tracking-wide uppercase text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors" href="#">Wholesale Deals</a>
<a className="font-manrope text-sm font-semibold tracking-wide uppercase text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors" href="#">Contact Us</a>
</div>
<a className="primary-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight active:scale-95 transition-transform duration-200 shadow-sm" href="https://wa.me/2348026893672">
 Order on WhatsApp
 </a>
</div>
</nav>
{/*  Section 1: Hero  */}
<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-cover" data-alt="Modern cold storage facility with stainless steel shelves and stacks of neatly packaged frozen poultry under bright clinical lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIr24R768InN79_-P_AZXnfmDCkFLcVMJ4N_8ofiIi-dSIyWBBeGxRkOAOJjbmmJRQS1PyMl_o5DaAlcPpx2-hZjDzaCPuG1h-JyZ3-xSKNNQFv42XdDKN8Wu7NStnnJcm-nQGo4PQceNN_hbdSNLdKTwac_RHbWYML2kxZWOsGg3gRGwLkgyWnSSCyrPE0dLZXR-QeRzm__21H6bGIV4ETCLUd8G_WZm0276_9iX5GnVfq2oDRfdtRJZGUwmw1UQx61vmJz-SH7R"/>
<div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-on-secondary text-xs font-bold tracking-widest uppercase">Premium Frozen Foods</span>
<h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
 Fresh, Clean &amp; Premium <span className="text-secondary-fixed-dim">Frozen Foods</span> in Isolo.
 </h1>
<p className="text-lg md:text-xl text-surface-container leading-relaxed max-w-xl font-light">
 Your trusted neighborhood plug for the finest poultry and seafood. Whether you are cooking for the family or catering a massive event, we supply top-quality frozen foods at unbeatable prices.
 </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-extrabold text-base flex items-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-lg" href="https://wa.me/2348026893672">
<span className="material-symbols-outlined">shopping_cart</span>
 Order Now via WhatsApp
 </a><a className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-extrabold text-base flex items-center gap-2 hover:bg-white/20 transition-all active:scale-95" href="#">
<span className="material-symbols-outlined">location_on</span>
 Get Directions
 </a>
</div>
</div>
{/*  Asymmetric Decorative Element  */}
<div className="hidden lg:block relative">
<div className="w-[500px] h-[600px] bg-surface-container-lowest/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 rotate-3 overflow-hidden shadow-2xl">
<img alt="" className="w-full h-full object-cover -rotate-3 scale-110 opacity-90" data-alt="Close up shot of fresh frozen whole chicken professionally packaged in clear plastic wrap on a clean white surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAj3YvziB-jC5dYcIsIFbkBsnS-tJit6E0Q9c14fkwzMSei2p6t9wdBijc1PiW-uEM7eab98VD9LWxGDN_W68kSRQNVt_f7FjiPgD1D-E9q7xHldpVFl3JOJEObYz5BmJq08vXW9XiIoNUswZYhXmp4sQx8CNrSYfDHxFlbYQI1cNkrt4Nn66CPNrmppaFACJ8yDFATcoUC2_wJxbD2PxDK5R6_Qe7iOcmeBuL4t817Hlxjqwh0HE3TWnpyRUrgsjoiREs6DgavSu3"/>
</div>
<div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-3xl shadow-2xl animate-bounce-slow">
<p className="text-white font-black text-4xl">100%</p>
<p className="text-secondary-fixed text-xs font-bold uppercase tracking-widest">Hygiene Certified</p>
</div>
</div>
</div>
</section>
{/*  Section 2: Our Premium Products  */}
<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-4">What’s in Our Freezers?</h2>
<p className="text-on-surface-variant text-lg font-medium">100% fresh. Neatly packaged. Ready for your pot.</p>
</div>
<button className="flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all group">
 Request Today&apos;s Price List
 <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
{/*  Bento Grid Layout for Products  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/*  Category 1: Poultry  */}
<div className="md:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10 group overflow-hidden">
<div className="flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-2xl font-bold text-primary mb-2">Poultry &amp; Chicken Cuts</h3>
<p className="text-on-surface-variant">The gold standard in premium Nigerian poultry.</p>
</div>
<span className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase">Best Sellers</span>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-12">
<ul className="space-y-3">
<li className="font-bold text-primary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Whole Chicken
 </li>
<li className="font-bold text-primary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Turkey &amp; Fryer
 </li>
<li className="font-bold text-primary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Gizzard
 </li>
</ul>
<ul className="space-y-3">
<li className="font-bold text-primary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Value Cuts (Cut 4)
 </li>
<li className="font-bold text-primary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Chicken Legs
 </li>
<li className="font-bold text-primary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Chicken Neck
 </li>
</ul>
</div>
<div className="mt-auto relative h-48 rounded-2xl overflow-hidden"><img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Array of raw frozen chicken cuts and drumsticks arranged neatly on a dark wooden board with herbs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9LKjWxuTnt7aTU8i-mKAGd6Bxjoa408A3iaf3Ty1izl0h62cMZbBSelYijmhP9gK_Ajca6-veoYhUtGTwCHCrTq2C7f4qO5s0SK9EGowk3YWiRzr2F3xiHAm6C8xbduN1fxCrPneofpP3MwmDgDyYolaGN_CFBUwfsamZNk-3TIm-80dwlb4W25AQidazFuampPdqMCJLxkjyKj37LcXJjN8lkOEMNSNG5K0eFFTNEPZy8BzV0tNxe0NjfC9FyIGvd2W1LpDYxtb"/>
</div>
</div>
</div>
{/*  Category 2: Seafood  */}
<div className="md:col-span-5 bg-primary p-8 md:p-12 rounded-[2rem] shadow-sm flex flex-col justify-between text-white overflow-hidden relative">
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-2">Fresh Seafood</h3>
<p className="text-surface-container/60 mb-8">Deep-sea freshness delivered to your doorstep.</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<span className="font-bold">Fresh Fish</span>
<span className="material-symbols-outlined text-secondary-fixed">set_meal</span>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<span className="font-bold">Prawns &amp; Shrimp</span>
<span className="material-symbols-outlined text-secondary-fixed">restaurant</span>
</div>
</div>
</div>
<div className="mt-12 relative h-64 -mx-12 -mb-12">
<img alt="" className="w-full h-full object-cover opacity-80" data-alt="Close up of large fresh prawns and shellfish on a bed of crushed ice under bright supermarket display lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcqqcojvhKVRgxjS7xIG3oZbCAN2moeMtLQp60i5qmdvp1PHL5MwclvtWlnEffaK5KBRAHwvajBDIGr41DB8cWlDMQJHgyrsXGvJdUxUK9Hm6bKguLOBu7XSs0LbwWtRuhrv9f_SmyIJ1KImR2hCkuAVtzV0jEJLQKQ9EzXi9CvnzspCxuIzyKli_w9zI55bHR_3NtxLrxKf9SwpcrCbeR28zlUNH0lRAj_jAVUlbnAoA-iDT7Z9PwWuo1FclLQRmQZiyJvAi69zaw"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 3: Wholesale & B2B  */}
<section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-surface-container-lowest rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-sm relative">
{/*  Decorative Circle  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
<div className="lg:w-1/2 space-y-8 relative z-10">
<div className="space-y-2">
<span className="text-secondary font-black tracking-widest uppercase text-xs">B2B Supply Partner</span>
<h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">Are You a Caterer, Restaurant, or Event Planner?</h2>
</div>
<p className="text-on-surface-variant text-lg leading-relaxed">
 Situated right beside <span className="text-primary font-bold">Leilas Event Centre</span>, Jonsine Farms is strategically positioned to be your ultimate supply partner. We understand the pressure of bulk catering and offer streamlined solutions.
 </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary" data-weight="fill">verified</span>
</div>
<div>
<h4 className="font-bold text-primary">Bulk Discounts</h4>
<p className="text-sm text-on-surface-variant">Unbeatable rates for volume orders.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary" data-weight="fill">speed</span>
</div>
<div>
<h4 className="font-bold text-primary">Emergency Restocking</h4>
<p className="text-sm text-on-surface-variant">Last-minute needs handled quickly.</p>
</div>
</div>
<div className="flex items-start gap-4"><div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary" data-weight="fill">inventory_2</span>
</div>
<div>
<h4 className="font-bold text-primary">Consistent Quality</h4>
<p className="text-sm text-on-surface-variant">Batch-to-batch excellence guaranteed.</p>
</div>
</div>
</div>
<button className="primary-gradient text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl active:scale-95 transition-all">
 Partner With Us
 </button>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="aspect-square rounded-[2rem] overflow-hidden rotate-2 shadow-2xl">
<img alt="" className="w-full h-full object-cover" data-alt="Busy commercial kitchen scene with professional chefs preparing poultry for a large scale event with focus on clean workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ddayu7n-iIZFCfGz_vs3MZTKzVL27OD48zRjCzuHKzs4DHp3tQOmel6iIadwpYeThqcKops3YyHBfHcoQJlKpMYRn30yjyE8qmtqdUlEBLHnRSaqwoYWJThTATIzrBZQpZwHb6kp80iMz5XxXQUM9NoryMnS23oOPo9o4B5GNqxhyMdaIPl-ThcB7K_FgmJoD9KCEQDb3nbnoDj16kpVx63AaU11eSZgL6G16Pz2jreYfJNPfti_a1RRN3vSM_0yyksXPy60kdvn"/>
</div>
{/*  Overlapping card  */}
<div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-2xl shadow-xl max-w-[240px] -rotate-3">
<p className="text-on-secondary-container font-medium text-sm">&quot;The most reliable source for our weekend events at Leila&apos;s.&quot;</p>
<p className="text-on-secondary-container/80 text-xs mt-3 font-bold">— Local Event Caterer</p>
</div>
</div>
</div>
</div>
</section>
{/*  Section 4: The Jonsine Standard  */}
<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-20">Why Choose Jonsine Farms?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group">
<div className="w-20 h-20 bg-surface-container-high rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transition-colors duration-500">ac_unit</span>
</div>
<h3 className="text-xl font-bold text-primary mb-4">Unbroken Cold Chain</h3>
<p className="text-on-surface-variant leading-relaxed px-4">From farm to your freezer, we maintain strict temperature controls to ensure zero spoilage.</p>
</div>
<div className="group">
<div className="w-20 h-20 bg-surface-container-high rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transition-colors duration-500">storefront</span>
</div>
<h3 className="text-xl font-bold text-primary mb-4">Wholesale &amp; Retail</h3>
<p className="text-on-surface-variant leading-relaxed px-4">Whether you need one kilogram or one hundred cartons, we serve you with the same premium care.</p>
</div>
<div className="group">
<div className="w-20 h-20 bg-surface-container-high rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transition-colors duration-500">health_and_safety</span>
</div>
<h3 className="text-xl font-bold text-primary mb-4">Strict Hygiene</h3>
<p className="text-on-surface-variant leading-relaxed px-4">Our facilities are cleaned hourly and our packaging process meets the highest food safety standards.</p>
</div>
</div>
</div>
</section>
{/*  Section 5: Footer & Contact  */}
<footer className="bg-emerald-900 dark:bg-emerald-950 text-white pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
<div className="md:col-span-5 space-y-8">
<h2 className="text-4xl font-bold text-orange-500 leading-tight">Stop By Or Let Us Deliver to You.</h2>
<div className="space-y-4">
<div className="flex items-center gap-4 text-emerald-100/80"><span className="material-symbols-outlined text-orange-400">location_on</span>
<p>Plot 343, Okeho Street, Ire Akari Estate, Isolo, Lagos (Beside Leilas Event Centre).</p>
</div>
<div className="flex items-center gap-4 text-emerald-100/80">
<span className="material-symbols-outlined text-orange-400">call</span>
<p>+234 802 689 3672</p>
</div>
<div className="flex items-center gap-4 text-emerald-100/80">
<span className="material-symbols-outlined text-orange-400">mail</span>
<p>Jonsinefarms@gmail.com</p>
</div>
</div>
</div>
<div className="md:col-span-3 space-y-8">
<h4 className="text-xl font-bold text-white">Operating Hours</h4>
<div className="space-y-2 text-emerald-100/80">
<p className="flex justify-between"><span>Mon - Sat</span> <span>8:00 AM - 6:00 PM</span></p>
<p className="flex justify-between opacity-50"><span>Sunday</span> <span>Closed</span></p>
</div>
</div>
<div className="md:col-span-4 h-64 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="" className="w-full h-full object-cover" data-alt="Abstract aerial view of an urban estate layout in Lagos with green trees and residential buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMPM2FQeT8r4B52UN6bF8kiT-U84JXpLPk08YkNeTyN9f0JaC5WQfOhGARgAJV_NO4KEFHgPWaSMFqU7XNCRsTOKFb0G1Qy11yhamfrv9mn_IDqnKQmYdebrjczfJBWWnQ1fXhTIw9mBBPomxx9CL87qpb6uQozImeyULILFa1QEMTTwvunZ2Z8a-HwZuKA1eUAsSN_6qcXMe6s03C6Qevaw_q7ldBK22004ZpTjmlWBxiSXjSdJL-YHcehR9UEpCXCvMnpjw4PgRe"/>
</div>
</div>
<div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-bold text-orange-500">Jonsine Farms</div>
<div className="font-manrope text-sm font-light text-emerald-100/60 text-center">
 © 2026 Jonsine Farms Ltd. All Rights Reserved. | Designed &amp; Managed by Havens Point Technologies.
 </div>
<div className="flex gap-6">
<a className="text-emerald-200/60 hover:text-white transition-colors underline-offset-4 hover:underline decoration-orange-500" href="#">Instagram</a>
<a className="text-emerald-200/60 hover:text-white transition-colors underline-offset-4 hover:underline decoration-orange-500" href="#">Facebook</a>
</div>
</div>
</div>
</footer>
{/*  Contextual FAB (Hidden on Mobile, Sticky for conversion)  */}
<a className="fixed bottom-8 right-8 z-[60] bg-secondary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group" href="https://wa.me/2348026893672">
<span className="material-symbols-outlined text-3xl">chat</span>
<span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">Chat with Us</span>
</a>

    </main>
  );
}
