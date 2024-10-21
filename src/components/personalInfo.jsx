import React from "react";
import AboutCards from "./aboutCards";

function PersonalInfo({ aboutCardsData }) {
  return (
    <div className="h-auto">
      <div className="flex items-center justify-center max-sm:my-8 my-16">
        <h1 className="font-black text-5xl max-sm:text-3xl text-white">
          ABOUT <span className="text-[#1f4b91]">ME</span>
        </h1>
      </div>
      <div className="text-gray-400 flex w-[90%] max-sm:w-full max-sm:flex-col">
        <div className="px-16 flex flex-col w-[55%] max-sm:w-full max-sm:px-8">
          <h1 className="text-2xl font-bold mb-3 text-white">PERSONAL INFO</h1>
          <div className="flex items-start justify-between max-sm:flex-col">
            <div>
              <h4 className="text-sm my-3">
                Name:{" "}
                <span className="font-medium text-white">Sarim Bin Nesar</span>
              </h4>
              <h4 className="text-sm my-3">
                Experience:{" "}
                <span className="font-medium text-white">6+ Years</span>
              </h4>
              <h4 className="text-sm my-3">
                Open to Work:{" "}
                <span className="font-medium text-green-600">Yes</span>
              </h4>
              <h4 className="text-sm my-3">
                Portfolio:{" "}
                <a
                  className="font-medium text-purple-600"
                  href="https://drive.google.com/drive/folders/1CqjpcIWb1QI6q8oKzPrkV8TyVTT_3EiC"
                  target="_blank"
                >
                  Check it out!
                </a>
              </h4>
            </div>
            <div>
              <h4 className="text-sm my-3">
                Email:{" "}
                <span className="font-medium text-white">
                  muhammadsarimbinnesar@gmail.com
                </span>
              </h4>
              <h4 className="text-sm my-3">
                Languages:{" "}
                <span className="font-medium text-white">Urdu, English</span>
              </h4>
              <h4 className="text-sm my-3">
                Education:{" "}
                <span className="font-medium text-white">
                  Diploma in Computer Information Technology
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[45%] max-md:w-full flex flex-wrap justify-between items-center max-sm:px-2">
          {aboutCardsData.map((item, ind) => (
            <AboutCards key={ind} numbers={item.numbers} stat={item.stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
