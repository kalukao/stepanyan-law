import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Scale,
  Briefcase,
  Home,
  Users,
  Gavel,
  FileText,
  Building,
  Car,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Civil Litigation",
    icon: Scale,
    description: `Our civil litigation practice covers a wide range of disputes, including 
      contract disputes, property disputes, and personal injury cases. We provide aggressive 
      representation while seeking the most favorable outcomes for our clients.`,
  },
  {
    title: "Business Law",
    icon: Briefcase,
    description: `We assist businesses of all sizes with formation, contracts, compliance, 
      mergers and acquisitions, and dispute resolution. Our team provides comprehensive 
      legal guidance to help your business thrive.`,
  },
  {
    title: "Real Estate",
    icon: Home,
    description: `From residential and commercial property transactions to landlord-tenant 
      disputes and property development matters, we provide expert legal counsel in all 
      aspects of real estate law.`,
  },
  {
    title: "Family Law",
    icon: Users,
    description: `Our family law practice handles divorces, child custody, support matters, 
      and adoptions with sensitivity and expertise. We work to protect your interests while 
      minimizing conflict.`,
  },
  {
    title: "Criminal Defense",
    icon: Gavel,
    description: `We provide robust criminal defense representation, handling everything from 
      misdemeanors to serious felony charges. Our team works tirelessly to protect your 
      rights and freedom.`,
  },
  {
    title: "Estate Planning",
    icon: FileText,
    description: `Our estate planning services help you protect your assets and provide for 
      your loved ones. We assist with wills, trusts, power of attorney, and probate matters.`,
  },
  {
    title: "Corporate Law",
    icon: Building,
    description: `We provide comprehensive corporate legal services, including business 
      formation, corporate governance, regulatory compliance, and shareholder agreements.`,
  },
  {
    title: "Personal Injury",
    icon: Car,
    description: `Our personal injury practice helps victims of accidents receive fair 
      compensation for their injuries. We handle car accidents, slip and falls, and other 
      injury cases.`,
  },
];

export default function PracticeAreas() {
  return (
    <div>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Practice Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our firm offers comprehensive legal services across multiple practice areas. 
            We bring expertise and dedication to every case we handle.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Card key={area.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <area.icon className="h-6 w-6 text-primary" />
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <Link href="/contact">
                    <Button variant="outline">Discuss Your Case</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to help you navigate your legal challenges. 
            Contact us today to schedule a consultation.
          </p>
          <Link href="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

