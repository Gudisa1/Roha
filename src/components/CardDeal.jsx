import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover top VR card <br className="sm:block hidden" /> deals
        effortlessly.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Immerse in a world of VR innovation, exploring new dimensions and
        limitless experiences within the metaverse.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
