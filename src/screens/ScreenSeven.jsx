import React from "react";

const ScreenSeven = () => {
  return (
    <section className="bg-cyellow text-black w-full h-full p-8 rounded-3xl">
      <div className="flex flex-col justify-between gap-20">
        {/* TOP */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* left */}
          <div className="flex flex-col gap-2">
            <h4>SUBSCRIBE FOR FRESH CONTENT & PRODUCT UPDATES.</h4>
            <div className="flex flex-col gap-2">
              <input className="py-3 px-2"/>
              <button className="bg-black text-white py-3">SUSCRIBE</button>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-row flex-wrap text-sm gap-6 w-full justify-center">
            <div>
              <p>PRODUCT</p>
              <p>FROM EMAIL</p>
              <p>FROM SMS</p>
              <p>FROM QR CODES</p>
              <p>SUBS PAGES</p>
              <p>SUPPORT</p>
            </div>
            <div>
              <p>PRODUCT</p>
              <p>FROM EMAIL</p>
              <p>FROM SMS</p>
              <p>FROM QR CODES</p>
              <p>SUBS PAGES</p>
              <p>SUPPORT</p>
            </div>
            <div>
              <p>PRODUCT</p>
              <p>FROM EMAIL</p>
              <p>FROM SMS</p>
              <p>FROM QR CODES</p>
              <p>SUBS PAGES</p>
              <p>SUPPORT</p>
            </div>
            <div>
              <p>PRODUCT</p>
              <p>FROM EMAIL</p>
              <p>FROM SMS</p>
              <p>FROM QR CODES</p>
              <p>SUBS PAGES</p>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>
        {/* MOVEMENT IMAGES */}
        <div className="h-28 w-full border border-black">
          
        </div>
      </div>
    </section>
  );
};

export default ScreenSeven;
