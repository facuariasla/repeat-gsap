import React from "react";

const ScreenThree = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center gap-8 rounded-t-3xl border-t border-black p-8">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT */}
        <div className="flex flex-col justify-between w-full gap-10">
          <div>
            <p>A</p>
            <p>B</p>
            <p>C</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl">THE RIGHT PRODUCT AT THE RIGHT TIME</h3>
            <p className="w-80 text-sm">
              Do you know when your customer is ready for more? Let our insights
              power your flows and automations so that your reorder
              communication hits right when a customer is most likely to buy
              again.
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="bg-black h-96 w-full self-center md:self-end">
          
        </div>
      </div>
    </section>
  );
};

export default ScreenThree;
