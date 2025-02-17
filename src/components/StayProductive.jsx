export default function StayProductive() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay productive img"
          />
        </div>
        <div className="text-white ">
          <h3 className="font-medium text-[35px] leading-[50px] ">
            Stay productive <br /> wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              sint. Ipsam veritatis eum deleniti culpa dolore possimus
              reiciendis ab nesciunt. Commodi reprehenderit ipsa quasi
              accusamus, ea sunt reiciendis id velit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              sint. Ipsam veritatis eum deleniti culpa dolore possimus
              reiciendis ab nesciunt. Commodi reprehenderit ipsa quasi
              accusamus, ea sunt reiciendis id velit.
            </p>
          </div>
          <a
            href="/"
            className=" flex items-center gap-[15px] w-fit text-primary hover:text-[#42b0d1] border-b-2 border-primary border-solid pb-[5px] transition-colors duration-200"
          >
            See how Fylo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-move-right"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
