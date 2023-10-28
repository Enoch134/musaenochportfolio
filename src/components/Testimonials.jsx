import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Skills Rating
        </h1>
        <div class="w-full">
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-teal-200 text-teal-800">
                  JavaScript
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-teal-600">
                  65% Complete
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: "65%" }}
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-teal-200 text-teal-800">
                  React
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-teal-600">
                  60% Complete
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: "60%" }}
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-teal-200 text-teal-800">
                  Java
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-teal-600">
                  45% Complete
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: "45%" }}
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-teal-200 text-teal-800">
                  Python
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-teal-600">
                  40% Complete
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: "40%" }}
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-teal-200 text-teal-800">
                  SQL
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-teal-600">
                  50% Complete
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: "50%" }}
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
