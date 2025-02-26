import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Law Office of Izabella Stepanyan
            </h1>
            <p className="text-xl mb-8">
              Dedicated legal representation with a personal touch. Your success is our priority.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/practice-areas">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to Our Practice</h2>
            <p className="text-gray-600 mb-8">
              At the Law Office of Izabella Stepanyan, we combine professional excellence with 
              personal attention. Our boutique practice ensures that every client receives 
              the dedicated legal representation they deserve.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Practice Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Family Law", description: "Compassionate guidance through family matters" },
              { title: "Estate Planning", description: "Secure your family's future" },
              { title: "Business Law", description: "Supporting your business success" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/practice-areas">
                  <Button variant="link" className="p-0">Learn More →</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with us today. We're here to help you navigate your legal challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-gray-900">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
