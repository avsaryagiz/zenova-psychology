import { SearchIcon } from "@/components/icons";
import { Input } from "@/components/ui";

export default function HeaderSearch() {
  return (
    <section className="relative w-full max-w-xs max-xl:max-w-[300px]">
      <SearchIcon className="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
      <Input type="text" placeholder="Ara..." className="pl-10" />
    </section>
  );
}
