import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const links = [
  { label: "За Нас", href: "#overview" },
  { label: "Награди", href: "#highlight" },
  { label: "Програма", href: "#timeline" },
  { label: "Участие", href: "#eligibility" },
  { label: "Критерии", href: "#criteria" },
  { label: "Организатори", href: "#organizers" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-foreground">
              Млад Инвеститор
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">Училищно Състезание</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/finance_club_smg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-border"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="mailto:mlad.investitor@outlook.com"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-border"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © 2026 Млад Инвеститор. Всички права запазени.
          </p>
        </div>

      </div>
    </footer>
  );
}
