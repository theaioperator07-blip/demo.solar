export default function SocialProof() {
  const partners = [
    { name: 'SunPower', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&q=80&fit=crop' },
    { name: 'Tesla Powerwall', logo: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=200&h=100&q=80&fit=crop' },
    { name: 'Enphase', logo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=100&q=80&fit=crop' },
    { name: 'LG', logo: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=100&q=80&fit=crop' },
    { name: 'Canadian Solar', logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=100&q=80&fit=crop' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-slate-700 mb-12">
          Trusted Partners in Solar Excellence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-32 h-16 flex items-center justify-center">
                <span className="text-lg font-bold text-slate-400">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
