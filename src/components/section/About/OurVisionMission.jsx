// components/sections/about/OurVisionMission.jsx

import visionImage from "../../../assets/images/about/vision-image.png";
import missionImage from "../../../assets/images/about/mission-image.png";

const OurVisionMission = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white dark:bg-[#071421]">

            {/* MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto px-[20px] sm:px-[32px] lg:px-[45px] pt-[60px] sm:pt-[80px] lg:pt-[120px] pb-[60px] sm:pb-[100px] lg:pb-[140px]">

                {/* ── TOP ROW: VISION ── */}

                {/* MOBILE & TABLET */}
                <div className="flex flex-col lg:hidden gap-[28px] sm:gap-[36px]">

                    <h2 className="text-[#42FFB3] text-[36px] sm:text-[44px] leading-[46px] sm:leading-[54px] font-semibold tracking-[-1px]">
                        Our Vision
                    </h2>

                    {/* FIXED: was text-white */}
                    <h3 className="text-[#171B2D] dark:text-white text-[16px] sm:text-[20px] leading-[26px] sm:leading-[32px] font-semibold">
                        "Innovative Solutions for your Unique
                        Business Problems"
                    </h3>

                    <div className="flex flex-col gap-[18px] sm:gap-[22px]">
                        {/* FIXED: was text-white/75 */}
                        <p className="text-black/75 dark:text-white/75 text-[13px] sm:text-[14px] leading-[26px] sm:leading-[30px] font-medium">
                            We are a passionate company that believes in people,
                            that people have different needs, budgets. Our vision
                            is everyone is included, though the non profit engagement
                            is based on templates its a great start for everyone that
                            needs a website.
                        </p>
                        <p className="text-black/75 dark:text-white/75 text-[13px] sm:text-[14px] leading-[26px] sm:leading-[30px] font-medium">
                            We also believe in teaching others. We have programs
                            that teach in business strategy and development!
                        </p>
                    </div>

                    <img
                        src={visionImage}
                        alt="our vision"
                        className="w-full h-[260px] sm:h-[360px] object-cover"
                    />

                </div>

                {/* DESKTOP */}
                <div className="hidden lg:grid grid-cols-[520px_520px] justify-between items-start">

                    <div className="pt-[35px]">

                        <h2 className="text-[#42FFB3] text-[54px] leading-[62px] font-semibold tracking-[-1.2px] mb-[42px]">
                            Our Vision
                        </h2>

                        {/* FIXED: was text-white */}
                        <h3 className="max-w-[430px] text-[#171B2D] dark:text-white text-[28px] leading-[44px] font-semibold mb-[36px]">
                            "Innovative Solutions for your Unique
                            Business Problems"
                        </h3>

                        <div className="max-w-[430px] flex flex-col gap-[26px]">
                            {/* FIXED: was text-white/75 */}
                            <p className="text-black/75 dark:text-white/75 text-[15px] leading-[32px] font-medium">
                                We are a passionate company that believes in people,
                                that people have different needs, budgets. Our vision
                                is everyone is included, though the non profit engagement
                                is based on templates its a great start for everyone that
                                needs a website.
                            </p>
                            <p className="text-black/75 dark:text-white/75 text-[15px] leading-[32px] font-medium">
                                We also believe in teaching others. We have programs
                                that teach in business strategy and development!
                            </p>
                        </div>

                    </div>

                    <div className="flex justify-end">
                        <img
                            src={visionImage}
                            alt="our vision"
                            className="w-[520px] h-[520px] object-cover"
                        />
                    </div>

                </div>

                {/* ── BOTTOM ROW: MISSION ── */}

                {/* MOBILE & TABLET */}
                <div className="flex flex-col lg:hidden gap-[28px] sm:gap-[36px] mt-[56px] sm:mt-[80px]">

                    <h2 className="text-[#42FFB3] text-[36px] sm:text-[44px] leading-[46px] sm:leading-[54px] font-semibold tracking-[-1px]">
                        Our Mission
                    </h2>

                    {/* FIXED: was text-white */}
                    <p className="text-[#171B2D] dark:text-white text-[13px] sm:text-[15px] leading-[26px] sm:leading-[30px] font-medium">
                        Our mission is to be the best and honest
                        web company in the World!
                    </p>

                    {/* FIXED: was text-white */}
                    <h3 className="text-[#171B2D] dark:text-white text-[18px] sm:text-[22px] leading-[30px] sm:leading-[36px] font-semibold tracking-[-0.3px]">
                        Ideate • Analyze • Create • Iterate
                    </h3>

                    {/* FIXED: was text-white/75 */}
                    <p className="text-black/75 dark:text-white/75 text-[13px] sm:text-[14px] leading-[26px] sm:leading-[30px] font-medium">
                        Development has been an expensive endeavour,
                        and we want to be able to show ground based
                        development doesn't have to cost an arm and a leg.
                    </p>

                    <img
                        src={missionImage}
                        alt="our mission"
                        className="w-full h-[260px] sm:h-[360px] object-cover"
                    />

                </div>

                {/* DESKTOP */}
                <div className="hidden lg:grid grid-cols-[520px_520px] justify-between items-center mt-[140px]">

                    <div>
                        <img
                            src={missionImage}
                            alt="our mission"
                            className="w-[520px] h-[520px] object-cover"
                        />
                    </div>

                    <div className="pl-[25px]">

                        <h2 className="text-[#42FFB3] text-[54px] leading-[62px] font-semibold tracking-[-1.2px] mb-[42px]">
                            Our Mission
                        </h2>

                        {/* FIXED: was text-white */}
                        <p className="max-w-[430px] text-[#171B2D] dark:text-white text-[16px] leading-[34px] font-medium mb-[32px]">
                            Our mission is to be the best and honest
                            web company in the World!
                        </p>

                        {/* FIXED: was text-white */}
                        <h3 className="text-[#171B2D] dark:text-white text-[30px] leading-[42px] font-semibold tracking-[-0.5px] mb-[34px]">
                            Ideate • Analyze • Create • Iterate
                        </h3>

                        {/* FIXED: was text-white/75 */}
                        <p className="max-w-[430px] text-black/75 dark:text-white/75 text-[15px] leading-[32px] font-medium">
                            Development has been an expensive endeavour,
                            and we want to be able to show ground based
                            development doesn't have to cost an arm and a leg.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OurVisionMission;