import React from "react";

const ScreenFour = () => {
  return (
    <section className="min-h-screen bg-cyellow flex flex-col items-center justify-center gap-8 rounded-t-3xl border-t border-black p-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT */}
        <div className="flex flex-col gap-4 self-end w-full">
          <h3 className="font-semibold text-4xl sm:text-5xl lg:text-6xl">A PERSONALIZED SELECTION OF PRODUCTS</h3>
          <p className="w-80 text-sm">
            Personalized experiences usually require over-segmentation and
            spider webs of branching logic. Not with Repeat. We know your
            customer’s purchase history so they can reorder their favorites,
            find something similar, or even construct or deconstruct a bundle.
          </p>
        </div>
        {/* RIGHT */}
        <div className="bg-black h-96 w-full self-center md:self-end"></div>
      </div>
    </section>
  );
};

export default ScreenFour;
