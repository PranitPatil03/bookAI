export function HowItWorks() {
  const steps = [
    {
      title: "Choose Your Genre",
      description:
        "Select from a wide range of genres or create a custom blend.",
    },
    {
      title: "Provide Key Details",
      description:
        "Input main characters, plot points, or themes to guide the AI.",
    },
    {
      title: "AI Generation",
      description: "Our advanced AI creates your book based on your inputs.",
    },
    {
      title: "Review and Download",
      description:
        "Review your generated book and download in your preferred format.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-indigo-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
