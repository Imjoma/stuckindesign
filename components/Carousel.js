import { register } from "swiper/element/bundle";
register();

const Carousel = ({ designs }) => {
  return (
    <section className="-mx-8">
      <swiper-container
        slides-per-view="1.38"
        space-between="10"
        centered-slides="true"
        initial-slide={6}
        navigation="true"
      >
        {designs.map((item) => (
          <swiper-slide key={item.id}>
            <div className="flex justify-center ">
              <div
                className="w-[250px] rounded h-[480px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.imageSrc})`,
                }}
              ></div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default Carousel;
