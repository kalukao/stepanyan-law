import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">About Our Firm</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            At the Law Office of Izabella Stepanyan, we combine professional excellence 
            with personalized attention to deliver exceptional legal services.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Izabella Stepanyan</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of legal experience, Izabella Stepanyan has established 
                herself as a trusted advocate for clients across various practice areas. Her 
                commitment to excellence and deep understanding of the law has helped countless 
                clients achieve favorable outcomes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                After graduating from UCLA School of Law, Izabella gained valuable experience 
                working with prestigious law firms before establishing her own practice. Her 
                vision was to create a law firm that combines big-firm expertise with 
                personalized attention to client needs.
              </p>
              <Link href="/contact">
                <Button size="lg">Schedule a Consultation</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Attorney Portrait"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Our commitment to excellence has earned us recognition and trust 
                  from clients and peers alike.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  Years of experience handling complex legal matters across various 
                  practice areas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
                <p className="text-muted-foreground">
                  We provide individualized attention to every client and case, ensuring 
                  the best possible outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced legal team to discuss your situation 
            and explore your options.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
