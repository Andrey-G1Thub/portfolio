import Card from '@/components/ui/Card'
import type { Translations } from '@/i18n/types'
import { ArrowUpRight, CodeXml, Copy, Mail } from 'lucide-react'

type EmailCopyStatus = 'idle' | 'success' | 'error'

type ContactSectionProps = {
  contact: Translations['home']['contact']
  emailCopyStatus: EmailCopyStatus
  onCopyEmail: () => void
}

function ContactSection({
  emailCopyStatus,
  onCopyEmail,
  contact,
}: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-8 py-16 sm:py-20">
      <Card className="border-accent/30 bg-surface p-6 sm:p-10">
        <div className="mt-8">
          <p className="mb-4 break-all text-sm text-text-secondary">
            andreyrukshenas@gmail.com
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:andreyrukshenas@gmail.com"
              className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-3 text-sm font-medium text-black transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>

            <button
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 rounded-button border border-border bg-surface px-5 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Copy size={18} aria-hidden="true" />
              {contact.copyEmail}
            </button>

            <a
              href="https://github.com/Andrey-G1Thub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-button border border-border bg-surface px-5 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <CodeXml size={18} aria-hidden="true" />
              {contact.github}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <p className="mt-3 min-h-5 text-sm" aria-live="polite" role="status">
            {emailCopyStatus === 'success' && (
              <span className="text-accent">{contact.emailCopied}</span>
            )}

            {emailCopyStatus === 'error' && (
              <span className="text-red-400">{contact.emailCopyError}</span>
            )}
          </p>
        </div>
      </Card>
    </section>
  )
}
export default ContactSection
