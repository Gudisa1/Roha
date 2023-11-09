import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[120px] w-[80px] object-contain" // Adjust the width as needed
            style={{ filter: "brightness(0) saturate(100%) invert(100%)" }} // Make images white
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
