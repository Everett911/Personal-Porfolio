import type { Social } from "@/content/site";

export function SocialLinks({ socials }: { socials: Social[] }) {
  return (
    <ul className="flex items-center gap-4">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <social.icon className="w-5 h-5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
