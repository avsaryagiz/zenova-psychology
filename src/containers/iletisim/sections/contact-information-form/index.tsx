import { ContactForm, ContactInformation } from "./components";

export default function ContactInformationAndFormSection() {
  return (
    <section id="iletisim-ve-iletisim-formu" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
