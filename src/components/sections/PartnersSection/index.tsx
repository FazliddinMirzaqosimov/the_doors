import Partners from "@/components/Partners";
import Title from "@/components/Title";
import styles from "./styles.module.scss";
import logo1 from "../../../../public/media/msi 7.png";
import logo2 from "../../../../public/media/msi 8.png";

export type PartnerType = {
  link: string;
  image: string;
};

const partners: PartnerType[] = [
  { link: "/", image: logo1.src },
  { link: "/", image: logo2.src },
];

function PartnersSection() {
  return (
    <div className={styles.partners}>
      <Title style={{ padding: "0 7% 20px" }}>Our Partners</Title>
      <Partners partners={partners} />
    </div>
  );
}

export default PartnersSection;
