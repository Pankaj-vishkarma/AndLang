// components/sections/about/OurVisionMission.jsx

import visionImage from "../../../assets/images/about/vision-image.png";
import missionImage from "../../../assets/images/about/mission-image.png";

const OurVisionMission = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#071421]">

            {/* 🔹 MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto px-[45px] pt-[120px] pb-[140px]">

                {/* 🔹 TOP ROW */}
                <div className="grid grid-cols-[520px_520px] justify-between items-start">

                    {/* LEFT CONTENT */}
                    <div className="pt-[35px]">

                        {/* TITLE */}
                        <h2 className="text-[#42FFB3] text-[54px] leading-[62px] font-semibold tracking-[-1.2px] mb-[42px]">

                            Our Vision

                        </h2>

                        {/* SUBTITLE */}
                        <h3 className="max-w-[430px] text-white text-[28px] leading-[44px] font-semibold mb-[36px]">

                            “Innovative Solutions for your Unique
                            Business Problems”

                        </h3>

                        {/* PARAGRAPH */}
                        <div className="max-w-[430px] flex flex-col gap-[26px]">

                            <p className="text-white/75 text-[15px] leading-[32px] font-medium">

                                We are a passionate company that believes in people,
                                that people have different needs, budgets. Our vision
                                is everyone is included, though the non profit engagement
                                is based on templates its a great start for everyone that
                                needs a website.

                            </p>

                            <p className="text-white/75 text-[15px] leading-[32px] font-medium">

                                We also believe in teaching others. We have programs
                                that teach in business strategy and development!

                            </p>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-end">

                        <img
                            src={visionImage}
                            alt="our vision"
                            className="w-[520px] h-[520px] object-cover"
                        />

                    </div>

                </div>

                {/* 🔹 BOTTOM ROW */}
                <div className="grid grid-cols-[520px_520px] justify-between items-center mt-[140px]">

                    {/* LEFT IMAGE */}
                    <div>

                        <img
                            src={missionImage}
                            alt="our mission"
                            className="w-[520px] h-[520px] object-cover"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="pl-[25px]">

                        {/* TITLE */}
                        <h2 className="text-[#42FFB3] text-[54px] leading-[62px] font-semibold tracking-[-1.2px] mb-[42px]">

                            Our Mission

                        </h2>

                        {/* DESCRIPTION */}
                        <p className="max-w-[430px] text-white text-[16px] leading-[34px] font-medium mb-[32px]">

                            Our mission is to be the best and honest
                            web company in the World!

                        </p>

                        {/* HIGHLIGHT TEXT */}
                        <h3 className="text-white text-[30px] leading-[42px] font-semibold tracking-[-0.5px] mb-[34px]">

                            Ideate • Analyze • Create • Iterate

                        </h3>

                        {/* PARAGRAPH */}
                        <p className="max-w-[430px] text-white/75 text-[15px] leading-[32px] font-medium">

                            Development has been an expensive endeavour,
                            and we want to be able to show ground based
                            development doesn’t have to cost an arm and a leg.

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OurVisionMission;