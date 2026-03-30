const fs = require('fs');

let html = fs.readFileSync('../jonsine-initial.html', 'utf8');

// Extract the body content
let bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : html;

// Handle basic JSX conversions
let jsx = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
  .replace(/<img([^>]*[^/])>/g, (match, p1) => {
    let inner = p1;
    // The html seems to use data-alt, let's convert it to alt if alt is missing
    if (inner.includes('data-alt=') && !inner.includes(' alt=')) {
      inner = inner.replace(/data-alt=/, 'alt=');
    } else if (!inner.includes(' alt=')) {
      inner += ' alt=""';
    }
    return '<img' + inner + ' />';
  })
  .replace(/<input([^>]*[^/])>/g, '<input$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />');

// Fix text entities:
// Line 71: Request Today's Price List
jsx = jsx.replace(/Today's/g, "Today&apos;s");
// Line 191: "The most reliable source for our weekend events at Leila's."
jsx = jsx.replace(/"The most reliable source for our weekend events at Leila's."/g, "&quot;The most reliable source for our weekend events at Leila&apos;s.&quot;");
// Also any other bare ' in text
jsx = jsx.replace(/Leila's/g, "Leila&apos;s");
jsx = jsx.replace(/St. Mary's/g, "St. Mary&apos;s");

const trustedSection = `
{/* NEW SECTION: Trusted by Local Parishes & Restaurants */}
<section className="py-12 bg-surface-container-highest border-t border-b border-outline-variant/10">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-8 opacity-80">Trusted by Local Parishes &amp; Restaurants</p>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      <div className="flex items-center gap-2 font-black text-xl text-primary"><span className="material-symbols-outlined text-3xl">church</span>St. Mary&apos;s Parish</div>
      <div className="flex items-center gap-2 font-black text-xl text-primary"><span className="material-symbols-outlined text-3xl">restaurant</span>Leila&apos;s Kitchen</div>
      <div className="flex items-center gap-2 font-black text-xl text-primary"><span className="material-symbols-outlined text-3xl">celebration</span>Royal Events Co.</div>
      <div className="flex items-center gap-2 font-black text-xl text-primary"><span className="material-symbols-outlined text-3xl">local_cafe</span>The Morning Brew</div>
    </div>
  </div>
</section>
`;

jsx = jsx.replace('{/* Section 2: Our Premium Products */}', trustedSection + '\n{/* Section 2: Our Premium Products */}');

const fabPattern = /\{\/\* Contextual FAB[\s\S]*?<\/a>/i;
const newFab = `
{/* Contextual FAB (Hidden on Mobile, Sticky for conversion) */}
<a className="hidden md:flex fixed bottom-8 right-8 z-[60] bg-secondary text-white w-16 h-16 rounded-full shadow-2xl items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group" href="https://wa.me/2348026893672">
  <span className="material-symbols-outlined text-3xl">chat</span>
  <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">Chat with Us</span>
</a>

{/* Mobile Sticky CTA */}
<div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-lg border-t border-outline-variant/20 z-[60]">
  <a href="https://wa.me/2348026893672" className="w-full flex justify-center items-center gap-2 primary-gradient text-on-primary px-6 py-4 rounded-xl font-bold text-base tracking-tight shadow-xl active:scale-95 transition-transform">
    <span className="material-symbols-outlined">shopping_cart</span>
    Order on WhatsApp
  </a>
</div>
`;
jsx = jsx.replace(fabPattern, newFab);

const pageTsx = `export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      ${jsx}
    </main>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageTsx);
console.log('Conversion successful.');
