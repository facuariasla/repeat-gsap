import React from "react";

const ScreenFive = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center gap-8 rounded-t-3xl border-t border-black p-8">
      <div className="flex flex-col md:flex-row gap-12 w-full">
        {/* LEFT */}
        <div className="flex flex-col gap-4 self-end w-full">
          <h3 className="text-6xl">THE FASTEST WAY TO REORDER</h3>
          <p className="w-80 text-sm">
            Reordering on the DTC site requires multiple steps and navigating to
            a bunch of PDPs. With Repeat what your customer is looking for is
            right at their fingertips. With just a few clicks they are buying
            again.
          </p>
        </div>
        {/* RIGHT */}
        <div className="bg-black h-96 w-full self-center md:self-end">
          
        </div>
      </div>
    </section>
  );
};

export default ScreenFive;
