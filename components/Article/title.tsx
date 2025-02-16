import Link from "next/link";

function Title() {
  return (
    <div className="w-full h-full bg-white">
      <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-28 md:pt-32 lg:pt-52">
        <div
          className="grid justify-items-center xl:container xl:mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2
            className="font-eudoxusBold text-4xl sm:text-5xl md:text-[64px] md:leading-[83px] text-[#151411] text-center pb-5"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
          >
            Article
          </h2>
          <div
            className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center pb-20"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
          >
            <p>
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
          <img
            src="/images/Article/Rectangle 39.svg"
            className="w-full pointer-events-none"
            alt="Living room"
          />
          <Link href="#!">
            <div className="grid justify-items-center z-20 cursor-pointer duration-200 hover:-translate-y-6 -mt-20 md:-mt-24 lg:-mt-36 drop-shadow-lg">
              <div
                className="rounded bg-whitebasic p-7 lg:p-10 2xl:p-14 space-y-4 lg:space-y-7 max-w-lg lg:max-w-5xl"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="font-eudoxusMedium text-grey text-xs md:text-sm lg:text-lg">
                  Tips and Trick
                </p>
                <h3 className="font-eudoxusBold text-black text-xs sm:text-sm md:text-lg lg:text-3xl">
                  This 400-Square-Foot New York Apartment Is Maximized With
                  Custom Millwork
                </h3>
                <div className="flex items-center space-x-5">
                  <img
                    src="/images/Article/Ellipse 25 (8).svg"
                    className="w-[20px] sm:w-[20px] md:w-[28px] lg:w-[35px] pointer-events-none"
                    alt="Person's photo"
                  />
                  <p className="font-eudoxusBold text-black text-xs lg:text-[14px]">
                    By Morgan Goldberg
                  </p>
                  <p className="font-eudoxusMedium text-grey text-xs lg:text-[14px] md:pl-10">
                    Tuesday, 17 May 2022
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Title };
