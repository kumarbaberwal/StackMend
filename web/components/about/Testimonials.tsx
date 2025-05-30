// components/about/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      quote: "StackMend saved me 5 hours of debugging with one AI suggestion!",
      author: "Sarah K., Frontend Developer",
      company: "TechCorp",
    },
    {
      quote: "The community voting system ensures I always get the best solution.",
      author: "David L., Fullstack Engineer",
      company: "StartupXYZ",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Developers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <blockquote className="text-lg italic text-gray-600 dark:text-gray-300 mb-6">
                "&nbsp;{testimonial.quote}&nbsp;"
              </blockquote>
              <div className="text-gray-900 dark:text-white font-medium">
                — {testimonial.author}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

