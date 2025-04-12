import { GOOGLE_MAPS_IFRAME_URL } from "@/config";

export default function LocationSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="h-[400px] overflow-hidden rounded-lg border">
          <iframe
            src={GOOGLE_MAPS_IFRAME_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zenova Psikoloji Konum"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
