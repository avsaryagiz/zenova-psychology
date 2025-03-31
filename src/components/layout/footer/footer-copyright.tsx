import SocialLinks from "../social-links";

export default function FooterCopyright() {
  return (
    <div className="mt-8 border-t pt-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Social Media Links */}
        <SocialLinks />
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} - Zenova Psikoloji. Tüm hakları
          saklıdır.
        </div>
      </div>
    </div>
  );
}
