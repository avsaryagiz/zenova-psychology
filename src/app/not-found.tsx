import { buttonVariants } from "@/components/ui";
import { ROUTES } from "@/config/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="px-4 text-center">
        <h1 className="text-primary mb-4 text-9xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Sayfa Bulunamadı
        </h2>
        <p className="mb-8 text-gray-600">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="space-x-4">
          <Link
            href={ROUTES.INTERNAL.HOME}
            className={buttonVariants({ size: "lg", variant: "default" })}
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href={ROUTES.INTERNAL.CONTACT}
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Bize Ulaş
          </Link>
        </div>
      </div>
    </div>
  );
}
