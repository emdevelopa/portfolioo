import ContactSection from "../components/contacts";

export default function Contacts() {
  return (
    <section className="px-6 py-2 md:px-8 lg:px-14 xl:px-[10em] mb-8">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold">
          <span className="text-[#C778DD]">/</span>Conatacts
        </h1>
        <p className="text-sm md:text-base font-bold mt-2">Who am I?</p>
          </div>
          <div>
              <ContactSection/>
          </div>
    </section>
  );
}
