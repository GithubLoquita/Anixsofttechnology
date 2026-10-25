import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl bg-[#0D1326] border border-slate-700 p-6 sm:p-8 shadow-2xl z-10 text-slate-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Privacy Policy</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">Last updated: October 2026</p>

            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                At <strong>ANIX Software Technology</strong>, we believe in privacy by design. This website is
                crafted to provide information about our software company, celebrate Diwali, and introduce our
                flagship digital product, <strong>QR Studio</strong>.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">1. Information Collection & Client-Side Processing</h4>
              <p>
                Our marketing website and our featured tool QR Studio are engineered to execute processing
                client-side directly within your web browser. We do not store, harvest, or sell personal
                documents, images, or QR code payloads.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">2. Direct Contact Communications</h4>
              <p>
                When you initiate contact using our official email address (
                <span className="text-amber-400">hembramgroupofficials@gmail.com</span>), the details you provide
                are transmitted directly via your standard email service for the sole purpose of responding to your
                project inquiry.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">3. Third-Party Links</h4>
              <p>
                Our website links to our verified web application hosted on Vercel at{' '}
                <a
                  href="https://qrenerator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  qrenerator.vercel.app
                </a>
                . We encourage you to review standard browser security settings.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">4. Contact Inquiries</h4>
              <p>
                For questions concerning this Privacy Policy, please email{' '}
                <span className="text-amber-400">hembramgroupofficials@gmail.com</span>.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">Terms & Conditions</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">Last updated: October 2026</p>

            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Welcome to the official website of <strong>ANIX Software Technology</strong>. By accessing our
                website and using our digital utilities, including <strong>QR Studio</strong>, you agree to these
                terms.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">1. Use of Digital Utilities</h4>
              <p>
                QR Studio is provided as a free web utility for creating barcodes, QR codes, and converting/merging
                PDF documents. The service is provided on an "as is" and "as available" basis without warranties of
                any kind.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">2. Acceptable Use</h4>
              <p>
                You agree not to use our generators to produce deceptive, malicious, or abusive QR codes or links.
                Users are solely responsible for ensuring the accuracy and legitimacy of their generated barcodes
                and QR destinations.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">3. Intellectual Property</h4>
              <p>
                All brand identity assets, original CSS cartoon animations, visual styles, and logos associated with
                ANIX Software Technology and QR Studio remain the intellectual property of ANIX Software Technology.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">4. Inquiries & Feedback</h4>
              <p>
                For feedback or questions, please reach out via{' '}
                <span className="text-amber-400">hembramgroupofficials@gmail.com</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
