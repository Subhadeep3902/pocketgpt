import React from "react";

const testimonialsData = [
  {
    profilePic: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Using Pocket GPT has significantly boosted my productivity. The chatbots are incredibly intuitive and helpful!",
    name: "Emily Davis",
    position: "Marketing Manager",
    company: "ABC Company",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "The AI chatbots provided by Pocket GPT are top-notch. They understand my needs perfectly.",
    name: "Michael Johnson",
    position: "CEO",
    company: "XYZ Corporation",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I love how easy it is to interact with the Gemini Vision bot. It generates amazing images!",
    name: "Sarah Brown",
    position: "CTO",
    company: "XYZ Corporation",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/78.jpg",
    text: "Groq has been a game-changer for my daily tasks. Highly recommend!",
    name: "James White",
    position: "COO",
    company: "XYZ Corporation",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-950">
      <section className="max-w-5xl mx-auto w-full px-10 py-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
            Here's what our <br /> <span className="text-blue-500">users</span>{" "}
            have to say
          </h2>
          <p className="text-lg font-medium text-gray-400/70">
            Discover how our chat apps within Pocket GPT can benefit you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`border p-7 rounded-xl bg-gray-900 shadow-md border-gray-800/50 ${
                ((index % 2 === 0) ? "md:col-span-2" : "md:col-span-1")
              }`}
            >
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-white">
                  {testimonial.company}
                </p>
                <p className="font-medium text-white">{testimonial.text}</p>
              </div>
              <div className="flex flex-col items-center mt-4">
                <img
                  src={testimonial.profilePic}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <p className="pt-2 text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm font-medium text-gray-100/70">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
