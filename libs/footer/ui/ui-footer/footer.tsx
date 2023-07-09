import facebook from "/public/images/facebook-square.svg";
import instagram from "/public/images/instagram.svg";
import styles from "@/libs/Footer/footer.module.scss";
import email from "@/public/images/envelop-square.svg";
import classnames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classnames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("wrapper")}>
        <p className={cx("copyright")}>©codeit - 2023</p>
        <div className={cx("links")}>
          <Link href="/" className={cx("link")}>
            <span>Privacy Policy</span>
          </Link>
          <Link href="/" className={cx("link")}>
            <span>FAQ</span>
          </Link>
        </div>
        <div className={cx("socials")}>
          <div className={cx("socialWrapper")}>
            <Image src={email} alt="email" width={21.88} height={21.88} />
          </div>
          <div className={cx("socialWrapper")}>
            <Image src={facebook} alt="facebook" width={21.88} height={21.88} />
          </div>
          <div className={cx("socialWrapper")}>
            <Image src={instagram} alt="instagram" width={21.88} height={21.88} />
          </div>
        </div>
      </div>
    </footer>
  );
}
