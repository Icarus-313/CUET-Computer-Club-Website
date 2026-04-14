import Link from "next/link"
import { Terminal, Github, Facebook, Linkedin, Twitter } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://github.com/cuetcc", icon: Github, label: "GitHub" },
  { href: "https://facebook.com/cuetcc", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com/company/cuetcc", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/cuetcc", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">
                CUET <span className="text-primary">Computer Club</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering students through technology, innovation, and collaborative learning since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} CUET Computer Club. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with passion by club members
          </p>
        </div>
      </div>
    </footer>
  )
}
