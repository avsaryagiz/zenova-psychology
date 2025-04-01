import React from "react";
import { ClockIcon, LocationIcon, MailIcon, PhoneIcon } from "../icons";

export default function OfficeInfo() {
  return (
    <section className="space-y-6">
      <div className="flex items-start gap-4">
        <LocationIcon className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
        <div>
          <h3 className="mb-2 text-lg font-semibold">Adres</h3>
          <p className="text-muted-foreground">
            Caferağa Mahallesi, Moda Caddesi No: 123, Kat: 4
            <br />
            Kadıköy / İstanbul
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <PhoneIcon className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
        <div>
          <h3 className="mb-2 text-lg font-semibold">Telefon</h3>
          <p className="text-muted-foreground">+90 212 123 4567</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MailIcon className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
        <div>
          <h3 className="mb-2 text-lg font-semibold">E-posta</h3>
          <p className="text-muted-foreground">info@zenovapsikoloji.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <ClockIcon className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
        <div>
          <h3 className="mb-2 text-lg font-semibold">Çalışma Saatleri</h3>
          <p className="text-muted-foreground">
            Pazartesi - Cuma: 09:00 - 20:00
            <br />
            Cumartesi: 10:00 - 17:00
            <br />
            Pazar: Kapalı
          </p>
        </div>
      </div>
    </section>
  );
}
