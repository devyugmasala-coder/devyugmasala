import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream/40 pt-24 pb-12">
      <div className="container-luxury">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl tracking-[0.2em] uppercase font-semibold text-cream mb-6">
              Dehyug
            </div>
            <p className="text-xs leading-relaxed">
              The artisan's choice for premium spices and blends. Since 1980.
            </p>
          </div>
          <div>
            <h5 className="text-cream text-[10px] uppercase tracking-[0.2em] mb-6">Products</h5>
            <ul className="text-xs space-y-3">
              <li><Link to="/products" search={{ category: "pure-spices" }} className="hover:text-cream transition-colors">Pure Spices</Link></li>
              <li><Link to="/products" search={{ category: "blended-spices" }} className="hover:text-cream transition-colors">Blended Spices</Link></li>
              <li><Link to="/products" search={{ category: "seasoning" }} className="hover:text-cream transition-colors">Seasonings</Link></li>
              <li><Link to="/products" className="hover:text-cream transition-colors">View All</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-cream text-[10px] uppercase tracking-[0.2em] mb-6">The Brand</h5>
            <ul className="text-xs space-y-3">
              <li><Link to="/about" className="hover:text-cream transition-colors">Our Heritage</Link></li>
              <li><Link to="/about" className="hover:text-cream transition-colors">Manufacturing</Link></li>
              <li><Link to="/about" className="hover:text-cream transition-colors">Quality Policy</Link></li>
              <li><Link to="/contact" className="hover:text-cream transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-cream text-[10px] uppercase tracking-[0.2em] mb-6">Inquiries</h5>
            <p className="text-xs mb-4">devyugmasala@gmail.com</p>
            <p className="text-xs mb-6">+91 78743 74333</p>
            <div className="flex gap-3">
              {["IG", "FB", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center text-[9px] hover:border-cream/40 hover:text-cream transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em]">© 2026 Dehyug Masala. All Rights Reserved.</p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-display italic text-cream/60 normal-case">
            Purity in every grain
          </p>
        </div>
      </div>
    </footer>
  );
}
