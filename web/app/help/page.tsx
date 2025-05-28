import { AiHelpSearch } from "@/components/help/AiHelpSearch";
import { TroubleshootingWizard } from "@/components/help/TroublingshootingWizard";
import { SupportAvailability } from "@/components/help/SupportAvailability";
import { FaqItem } from "@/components/help/FaqItem";
import { ContactForm } from "@/components/help/ContactForm";
import Link from "next/link";

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button in the top right corner and follow the registration process. You'll need to provide a valid email address and create a password."
    },
    {
      question: "I forgot my password. What should I do?",
      answer: "Click on 'Forgot Password' on the login page. We'll send you an email with instructions to reset your password."
    },
    {
      question: "How can I update my payment information?",
      answer: "Navigate to 'Account Settings' > 'Billing' where you can update or change your payment methods."
    },
    {
      question: "Where can I find my order history?",
      answer: "Your order history is available in the 'My Account' section under 'Orders'."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all purchases. Contact our support team to initiate a refund."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can use the contact form on this page, email us at support@yourwebsite.com, or call our helpline at +1 (555) 123-4567 during business hours (9AM-5PM EST)."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
        <p className="text-xl text-gray-600">Find answers to common questions or contact our support team</p>
      </header>

<AiHelpSearch/>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="lg:w-2/3 space-y-8">
                      <TroubleshootingWizard />

                        <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
                    </div>

           <div className="lg:w-1/3 space-y-6">
            {/* Add Support Availability */}
            <SupportAvailability />

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Support</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ContactForm />
            </div>
                  </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard 
            title="Knowledge Base" 
            description="Browse our comprehensive documentation and tutorials."
            icon="📚"
            link="/knowledge-base"
          />
          <ResourceCard 
            title="Video Tutorials" 
            description="Watch step-by-step video guides for all features."
            icon="🎥"
            link="/tutorials"
          />
          <ResourceCard 
            title="Community Forum" 
            description="Get help from other users and share your knowledge."
            icon="💬"
            link="/community"
          />
        </div>
      </section>
    </div>
  );
}

type ResourceCardProps = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

function ResourceCard({ title, description, icon, link }: ResourceCardProps) {
  return (
    <Link href={link} className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-medium mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}