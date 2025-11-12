// components/TelehealthServ.tsx

export default function TelehealthServ() {
  return (
    <section className="flex justify-center px-6 bg-white py-12 telehealth-sect">
      <div className="w-[90%] flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-xl">
        
        {/* Text Content */}
        <div className="p-20 telehealth-con">
          <h3 className="text-blue-theme font-bold text-[28px] font-[Lato]">
            Telehealth Services
          </h3>
          <h2 className="text-[42px] font-bold text-light-blue-theme mt-1 font-[Lato]">
            Speak to a Provider Anytime, Anywhere
          </h2>
          <p className="text-black mt-2 leading-relaxed text-2xl">
            The easiest way to access healthcare anytime, anywhere, is with the Unify Healthcare mobile app.
            Unify&apos;s technology enables secure communications for medical care by video and care assistance
            with our Care Navigation™ Team to help with questions.
          </p>
        </div>
      </div>
    </section>
  );
}
