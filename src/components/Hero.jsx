import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import vr from "../assets/vr.jpg";
import vr1 from "../assets/vr1.jpg";
import vr2 from "../assets/vr2.jpg";
import vr3 from "../assets/vr3.jpg";
import vr4 from "../assets/vr4.jpg";
import vr5 from "../assets/vr5.jpg";
import vr6 from "../assets/vr6.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Virtual <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Reality</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Business Solutions
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative rounded-lg overflow-hidden shadow-lg`}
      >
        <img
          src={vr4}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] border-none mr-[180px] rounded-lg"
          style={{ objectFit: "cover" }}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
