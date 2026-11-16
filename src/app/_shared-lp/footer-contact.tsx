/* Footer contact lines for the landing pages. Deliberately plain text
   (no mailto:/tel: links), but selectable so visitors can copy them.
   Pages using this also set format-detection metadata so iOS Safari
   does not auto-link them. */
export function FooterContact() {
  return (
    <ul className="fcontact">
      <li>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
        </svg>
        <span>info@remohires.com</span>
      </li>
      <li>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 4h3.5l1.5 4.5-2.25 1.5a11 11 0 0 0 6.25 6.25l1.5-2.25L20 15.5V19a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4Z" />
        </svg>
        <span>+1 (504) 208-2993</span>
      </li>
    </ul>
  );
}
