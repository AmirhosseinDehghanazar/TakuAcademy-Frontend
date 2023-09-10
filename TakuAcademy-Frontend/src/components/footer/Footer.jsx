import React from "react";
import logo from "../../assets/navbar/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      {/* header */}
      <div className="flex justify-center items-center gap-4">
        <img src={logo} />
        <div className="bg-line" />
        <div className="flex gap-2">
          <div className="bg-icon bg-youtube" />
          <div className="bg-icon bg-link" />
          <div className="bg-icon bg-telegram" />
          <div className="bg-icon bg-instagram" />
        </div>
      </div>

      {/* information */}
      <div>
        <div>درباره آکادمی تاکو</div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزار
        </p>
        <button className="arrow-btn flex items-center justify-center gap-2">
          <p>همین حالا شروع کنید </p>
          <div className="bg-arrow bg-arrow-w"></div>
        </button>
      </div>

      {/* dastresi */}
      <div>
        <p>دسترسی سریع</p>
        {/* need 3 more copy + responsive */}
        <div className="flex justify-center items-center">
          <div className="bg-misc" />
          <p>دوره ها</p>
        </div>
      </div>

      {/* contact */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <p>ارتباط با ما</p>
        <div className="flex justify-start items-center">
          <div className="bg-phone" />
          <p>شماره تماس: ۰۲۱۹۱۰۹۴۷۸۷</p>
        </div>

        <div className="flex justify-start items-center">
          <div className="bg-mail" />
          <p>ایمیل: info@takuacademy.com</p>
        </div>

        <div className="flex justify-start items-center">
          <div className="bg-location" />
          <p>
            آدرس: خیابان نوفل لوشاتو. جنب کوچه یاسمن. پلاک ۷۲. مرکز نوآوری نوفل
            لوشاتو
          </p>
        </div>
      </div>

      {/* ele */}
      <div className="flex justify-center items-center">
        <div className="bg-nashr" />
        <div className="bg-namad" />
        <div className="bg-samandehi" />
      </div>

      {/* copyRight */}
      <div className="flex flex-col justify-center items-center lg:flex-row gap-3">
        <p>
          کليه حقوق محصولات و محتوای اين سایت متعلق به آکادمی تاکو می باشد و هر
          گونه کپی برداری از محتوا و محصولات سایت غیر مجاز است و پیگرد قانونی
          دارد
        </p>
        <div className="bg-line" />
      </div>
    </div>
  );
};

export default Footer;
