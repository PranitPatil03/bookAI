export function FeatureShowcase() {
  const features = [
    {
      title: "AI-Powered Writing",
      description: "Generate high-quality content with advanced AI technology.",
    },
    {
      title: "Custom Genres",
      description: "Create stories in any genre or blend multiple styles.",
    },
    {
      title: "Instant Download",
      description: "Get your completed book in various formats instantly.",
    },
    {
      title: "Multilingual",
      description: "Generate content in multiple languages effortlessly.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="bg-indigo-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
