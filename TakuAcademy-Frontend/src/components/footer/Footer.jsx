import React from "react";
import logo from "../../assets/navbar/logo-nav.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mar-x ">
      {/* header */}
      <div className="flex justify-center items-center gap-1 md:gap-4 mb-10">
        <img width={88} className="lg:w-32" src={logo} />
        <div className="bg-all-footer bg-line-mobile" />
        <div className="flex gap-1 md:gap-3 ">
          <div className="bg-icon p-6 rounded-full thin-border bg-youtube" />
          <div className="bg-icon p-6 rounded-full thin-border bg-link" />
          <div className="bg-icon p-6 rounded-full thin-border bg-telegram" />
          <div className="bg-icon p-6 rounded-full thin-border bg-instagram" />
        </div>
      </div>

      {/* information */}
      <div className="flex  flex-col lg:flex-row justify-between lg:gap-10 2xl:gap-0">
        <div className="mb-10 max-w-sm">
          <div className="text-xl font-semibold mb-5 inline-block">
            درباره آکادمی تاکو
          </div>
          <p className="mb-4 light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزار
          </p>
          <button className="arrow-btn flex items-center justify-center gap-2">
            <p>همین حالا شروع کنید </p>
            <div className="bg-arrow bg-arrow-w"></div>
          </button>
        </div>

        {/* dastresi */}
        <div>
          <p className="text-xl font-semibold mb-5 inline-block whitespace-nowrap">
            دسترسی سریع
          </p>
          {/* first one include two of them */}
          <div className="flex flex-col light justify-start items-start gap-5 lg:gap-4 mb-10">
            <div className="flex lg:flex-col justify-start gap-10 lg:gap-4 items-center">
              <div className="flex justify-center gap-2 items-center">
                <div className="bg-all-footer bg-misc" />
                <p> مدرسین</p>
              </div>
              <div className="flex justify-center  gap-2 items-center">
                <div className="bg-all-footer bg-misc" />
                <p>دوره ها</p>
              </div>
            </div>

            {/* second one which has last two */}
            <div className="flex lg:flex-col justify-start gap-10 lg:gap-4 items-center">
              <div className="flex justify-center  gap-2 items-center">
                <div className="bg-all-footer bg-misc" />
                <p> پشتیبانی</p>
              </div>
              <div className="flex justify-center  gap-2 items-center">
                <div className="bg-all-footer bg-misc" />
                <p> درباره ما</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="mb-10">
          <p className="text-xl font-semibold  mb-5 inline-block">
            ارتباط با ما
          </p>
          <div className="flex light flex-col justify-center gap-4">
            <div className="flex justify-start items-center  gap-1">
              <div className="bg-phone bg-all-footer " />
              <p>شماره تماس: ۰۲۱۹۱۰۹۴۷۸۷</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="bg-mail bg-all-footer" />
              <p>ایمیل: info@takuacademy.com</p>
            </div>
            <div className="flex justify-start items-center  gap-2 ">
              <div className="bg-location bg-all-footer" />
              <p className="w-52">
                آدرس: خیابان نوفل لوشاتو. جنب کوچه یاسمن. پلاک ۷۲. مرکز نوآوری
                نوفل لوشاتو
              </p>
            </div>
          </div>
        </div>

        {/* ele */}
        <div className="flex lg:flex-col mb-6 gap-2 justify-center items-center lg:items-end">
          <div className="flex gap-2">
            <div className="bg-nashr px-10 h-20 md:h-24 md:px-12 bg-ele" />
            <div className="bg-namad px-10 h-20 md:h-24 md:px-12 bg-ele" />
          </div>

          <div className="bg-samandehi h-20 px-10 md:h-24 md:px-12 bg-ele" />
        </div>
      </div>
      {/* copyRight */}
      <div className="flex flex-col justify-center items-center lg:flex-row gap-3 mb-3">
        <p className="text-xs text-center light copyRight-text">
          کليه حقوق محصولات و محتوای اين سایت متعلق به آکادمی تاکو می باشد و هر
          گونه کپی برداری از محتوا و محصولات سایت غیر مجاز است و پیگرد قانونی
          دارد
        </p>
        <div className="bg-line-end" />
      </div>
    </div>
  );
};

export default Footer;
