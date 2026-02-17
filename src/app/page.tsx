import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavBar />

      <main>
        <HeroSection />

        <Section
          id="about"
          eyebrow="About Me"
          title="Profile & Legal Interests"
        >
          <p>
            I am a detail-oriented and highly motivated law graduate with a
            strong foundation in corporate law, banking litigation, legal
            research, and regulatory compliance.
          </p>
          <p>
            My practice experience spans civil litigation, commercial disputes,
            debt recovery proceedings, insurance claim disputes, and criminal
            complaints. I have developed strong analytical, drafting, and
            research skills through hands-on experience before the Punjab &amp;
            Haryana High Court and District Courts.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Key Professional Interests
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>Corporate Governance</li>
                <li>Contract Law</li>
                <li>Banking &amp; Financial Regulations</li>
                <li>Regulatory Compliance</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Core Strengths
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>Legal research and opinion drafting</li>
                <li>Structured legal documentation and case management</li>
                <li>Drafting pleadings, replies, and notices</li>
                <li>Client-focused approach to dispute resolution</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="practice-areas"
          eyebrow="Practice Areas"
          title="Areas of Legal Focus"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Corporate &amp; Contract Law
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>Drafting and reviewing commercial contracts</li>
                <li>Advisory on breach of contract matters</li>
                <li>
                  Application of Sections 10, 73 &amp; 74 of the Indian
                  Contract Act, 1872
                </li>
                <li>Commercial dispute documentation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Banking &amp; Debt Recovery
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>
                  SARFAESI Act proceedings (Sections 13(2), 13(4), 17) and
                  enforcement
                </li>
                <li>Recovery of Debts and Bankruptcy Act, 1993</li>
                <li>Drafting replies before Debt Recovery Tribunal (DRT)</li>
                <li>NPA-related legal documentation and security enforcement</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Insurance Law
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>Handling insurance claim disputes and repudiation issues</li>
                <li>
                  Interpretation of policies under the Insurance Act, 1938
                </li>
                <li>Matters under the Consumer Protection Act, 2019</li>
                <li>Documentation for insurance and consumer disputes</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Criminal &amp; Cheque Bounce Matters
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>Section 138 NI Act proceedings</li>
                <li>Criminal complaints under CrPC (Sections 200 &amp; 202)</li>
                <li>Breach of trust related matters</li>
                <li>Drafting complaints and supporting affidavits</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Professional Experience"
          title="Litigation &amp; Internship Experience"
        >
          <div className="space-y-5">
            <ExperienceItem
              role="Legal Associate"
              organization="Chambers of Adv. Kuldeep Kaushik"
              courtOrInstitution="Punjab & Haryana High Court"
              period="August 2025 – December 2025"
              bullets={[
                "Drafted replies, applications, and supporting documents in civil and commercial disputes.",
                "Assisted in cheque bounce and breach of trust cases.",
                "Conducted research under the Indian Contract Act and Code of Criminal Procedure.",
                "Maintained structured legal documentation systems for active matters.",
              ]}
            />

            <ExperienceItem
              role="Legal Intern"
              organization="Chambers of Adv. Arvind Kumar"
              courtOrInstitution="Punjab & Haryana High Court"
              period="January 2025 – August 2025"
              bullets={[
                "Conducted research on SARFAESI Act enforcement proceedings.",
                "Assisted in DRT matters and debt recovery litigation.",
                "Drafted replies and applications in banking disputes.",
                "Supported litigation and documentation in insurance matters.",
              ]}
            />

            <ExperienceItem
              role="Legal Intern"
              organization="Chambers of Adv. Dinesh Kumar"
              courtOrInstitution="District Court, Rewari"
              period="August 2024 – December 2024"
              bullets={[
                "Assisted in banking recovery matters under the SARFAESI Act.",
                "Prepared and reviewed demand notices post-NPA classification.",
                "Drafted pleadings and recovery-related documentation.",
                "Supported insurance and consumer dispute litigation.",
              ]}
            />
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Academic Background"
        >
          <div className="rounded-2xl border border-border-subtle bg-card-background/90 p-5">
            <h3 className="text-sm font-semibold text-foreground sm:text-base">
              BA.LL.B (5-Year Integrated Course)
            </h3>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              Maharishi Dayanand University, Rohtak
            </p>
            <p className="mt-1 text-xs font-medium text-muted sm:text-sm">
              2020 – 2025
            </p>
          </div>
        </Section>

        <Section id="resume" eyebrow="Resume" title="Resume">
          <p>
            For a detailed overview of my work experience, academic record, and
            representative matters, you can download my resume in PDF format.
          </p>
          <p className="text-xs text-muted">
            Note: The file path is currently a placeholder. Replace{" "}
            <code className="rounded bg-background px-1 py-0.5">
              /Keshav_Sharma_Resume.pdf
            </code>{" "}
            with your actual file in the <code className="rounded bg-background px-1 py-0.5">public</code>{" "}
            folder.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
            <a
              href="/Keshav_Sharma_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-soft"
            >
              Download Resume (PDF)
            </a>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Get in Touch"
        >
          <p>
            If you are seeking legal assistance in corporate, banking, or
            litigation matters, feel free to connect.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1.2fr,1fr]">
            <div className="space-y-2 text-sm text-muted">
              <p>
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                <a href="tel:+919417088100" className="hover:text-foreground">
                  +91 94170 88100
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a
                  href="mailto:keshavsharmayahooo68@gmail.com"
                  className="hover:text-foreground"
                >
                  keshavsharmayahooo68@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Location:</span>{" "}
                Panchkula, Haryana
              </p>
            </div>

            <div className="space-y-2 text-center text-sm text-muted">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Quick Actions
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:keshavsharmayahooo68@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-primary-soft"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 text-white"
                  >
                    <path
                      d="M4.75 5.75h14.5c.69 0 1.25.56 1.25 1.25v10c0 .69-.56 1.25-1.25 1.25H4.75A1.25 1.25 0 0 1 3.5 17V7c0-.69.56-1.25 1.25-1.25Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="m4.5 7.5 7.5 4.75L19.5 7.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/keshav-sharma"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-primary-soft"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 text-white"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      d="M5 4.75h14.5c.41 0 .75.34.75.75v13c0 .41-.34.75-.75.75H5a.75.75 0 0 1-.75-.75V5.5c0-.41.34-.75.75-.75Z"
                    />
                    <path
                      fill="currentColor"
                      d="M7.25 9.25h1.8v7.2h-1.8zM8.2 7.7a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Zm3.05 1.55h1.8v1.12h.02c.25-.48.94-1.24 2.18-1.24 2.33 0 2.76 1.52 2.76 3.49v3.88h-1.8v-3.44c0-.82-.02-1.88-1.15-1.88-1.15 0-1.33.9-1.33 1.82v3.5h-1.8Z"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border-subtle bg-background/80 py-6">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-muted sm:px-6 lg:px-8">
          © {currentYear} Keshav Sharma. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

