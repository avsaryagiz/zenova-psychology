import { SocialLinkContent } from "./layout-constants";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {Object.entries(SocialLinkContent).map(
        ([key, { href, icon: Icon, label, title }]) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={title}
            className="bg-accent text-accent-foreground hover:bg-accent-description hover:text-accent h rounded-full p-2 transition-colors"
          >
            <Icon className="size-4" />
          </a>
        ),
      )}
    </div>
  );
}
