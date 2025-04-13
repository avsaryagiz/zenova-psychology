import SocialLinks from "@/components/layout/social-links";
import OfficeInfo from "@/components/shared/office-info-section";
import TitleSection from "@/components/shared/title-section";
import React from "react";

export default function ContactInformation() {
  return (
    <div>
      <TitleSection
        title="İletişim Bilgileri"
        titleClassName="items-start mb-6"
      />
      <OfficeInfo />

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Sosyal Medya</h3>
        <SocialLinks />
      </div>
    </div>
  );
}
