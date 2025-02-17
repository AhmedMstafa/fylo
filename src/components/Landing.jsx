export default function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container ">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src="/src/assets/images/illustration-intro.png"
              alt="landing-img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location <br />
              accessible anywhere
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px]  max-w-full mx-auto mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              facilis laudantium. Delectus neque velit facere porro saepe
              accusamus suscipit qui quasi adipisci veniam culpa ipsum molestias
              illo, unde consectetur quod.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium "
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
