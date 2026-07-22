import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  );
}

export function IconCalendarCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </IconBase>
  );
}

export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </IconBase>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </IconBase>
  );
}

export function IconPhoneIncoming(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M16 2v6h6" />
      <path d="m22 2-6 6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </IconBase>
  );
}

export function IconPhoneMissed(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m16 2 6 6" />
      <path d="m22 2-6 6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </IconBase>
  );
}

export function IconRoute(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </IconBase>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </IconBase>
  );
}

export function IconBanknote(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </IconBase>
  );
}

export function IconFileText(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </IconBase>
  );
}

export function IconFileCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m9 15 2 2 4-4" />
    </IconBase>
  );
}

export function IconHandCoins(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </IconBase>
  );
}

export function IconShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </IconBase>
  );
}

export function IconUserCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m16 11 2 2 4-4" />
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </IconBase>
  );
}

export function IconRefreshCw(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </IconBase>
  );
}

export function IconUser(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </IconBase>
  );
}

function IconFilledBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconCheckFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconSparkFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4864 4.11419C11.1608 2.95192 12.8392 2.95193 13.5136 4.11419L15.579 7.67355C15.7694 8.00164 16.0984 8.22553 16.4735 8.28218L19.9031 8.80018C21.3981 9.02598 21.9225 10.9136 20.7582 11.8781L18.2593 13.9485C17.9086 14.239 17.7437 14.6974 17.8289 15.1449L18.5289 18.8208C18.8031 20.2608 17.2914 21.3796 15.9944 20.6966L12.5824 18.9001C12.2178 18.7081 11.7822 18.7081 11.4176 18.9001L8.00559 20.6966C6.70858 21.3796 5.19695 20.2608 5.47115 18.8208L6.17113 15.1449C6.25633 14.6974 6.09141 14.239 5.74067 13.9485L3.24177 11.8781C2.07748 10.9136 2.60189 9.02598 4.09688 8.80018L7.52653 8.28218C7.90159 8.22553 8.23064 8.00164 8.42101 7.67355L10.4864 4.11419Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconPhoneCallFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        d="M4.4765 10.481C6.41854 14.7108 9.87391 18.0738 14.1699 19.8974L14.9277 20.235C16.5487 20.9572 18.4541 20.4443 19.4934 19.0058L20.7678 17.242C21.3127 16.4879 21.1722 15.4393 20.4481 14.8551L18.2234 13.0603C17.4492 12.4358 16.3108 12.5812 15.7186 13.3804L15.2224 14.0499C13.028 12.919 11.2357 11.1266 10.1047 8.93221L10.7742 8.43605C11.5734 7.84381 11.7189 6.70542 11.0943 5.93125L9.29927 3.7062C8.71528 2.98231 7.66705 2.8417 6.91293 3.38611L5.13964 4.66627C3.69165 5.71158 3.18173 7.63299 3.92083 9.25874L4.4765 10.481Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconCycleFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        d="M6.54544 8.16273C6.33022 8.10595 6.15134 7.95651 6.05718 7.75482C5.96302 7.55313 5.96331 7.32004 6.05797 7.11859L7.71872 3.5842C7.84248 3.32081 8.10743 3.15279 8.39845 3.15315C8.68946 3.15351 8.95399 3.32219 9.0771 3.58588L9.80973 5.15511C9.83592 5.14482 9.86297 5.13589 9.8908 5.12843C14.2381 3.96357 18.7067 6.54347 19.8715 10.8908C21.0364 15.2382 18.4565 19.7067 14.1092 20.8716C9.76181 22.0364 5.29328 19.4565 4.12841 15.1092C3.75798 13.7267 3.76632 12.3299 4.09075 11.0311C4.19114 10.6293 4.5983 10.3849 5.00016 10.4853C5.40203 10.5856 5.64642 10.9928 5.54603 11.3947C5.28174 12.4527 5.27445 13.5907 5.5773 14.721C6.52775 18.2681 10.1738 20.3731 13.7209 19.4227C17.2681 18.4722 19.3731 14.8262 18.4227 11.2791C17.4877 7.7899 13.9447 5.69609 10.4531 6.53314L11.1923 8.11644C11.3154 8.38013 11.2748 8.69124 11.0883 8.91457C10.9017 9.1379 10.6028 9.23314 10.3214 9.15891L6.54544 8.16273Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconClockFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V12C11.25 12.2586 11.3832 12.4989 11.6025 12.636L14.6025 14.511C14.9538 14.7305 15.4165 14.6238 15.636 14.2725C15.8555 13.9212 15.7488 13.4585 15.3975 13.239L12.75 11.5843V7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25ZM4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconShieldFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6448 5.26375C12.2481 5.02488 11.7519 5.02488 11.3552 5.26375L10.8389 5.57464C9.45765 6.40635 7.90703 6.91671 6.30183 7.06794L5.97655 7.09859C5.84813 7.11069 5.75 7.2185 5.75 7.34749V8.99137C5.75 11.4989 6.76803 13.899 8.57088 15.6419L11.8262 18.7889C11.9231 18.8825 12.0769 18.8825 12.1738 18.7889L15.4291 15.6419C17.232 13.899 18.25 11.4989 18.25 8.99137V7.34749C18.25 7.2185 18.1519 7.11069 18.0235 7.09859L17.6982 7.06794C16.093 6.91671 14.5423 6.40635 13.1611 5.57464L12.6448 5.26375Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconXFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4697 6.4697C6.7626 6.1768 7.2374 6.1768 7.5303 6.4697L12 10.9394L16.4697 6.4697C16.7626 6.1768 17.2374 6.1768 17.5303 6.4697C17.8232 6.7626 17.8232 7.2374 17.5303 7.5303L13.0607 12L17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7626 17.8232 16.4697 17.5303L12 13.0607L7.5303 17.5303C7.2374 17.8232 6.7626 17.8232 6.4697 17.5303C6.1768 17.2374 6.1768 16.7626 6.4697 16.4697L10.9394 12L6.4697 7.5303C6.1768 7.2374 6.1768 6.7626 6.4697 6.4697Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}

export function IconCalendarFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFilledBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3.25C7.41421 3.25 7.75 3.58579 7.75 4V5.66763C10.5777 5.4158 13.4223 5.4158 16.25 5.66763V4C16.25 3.58579 16.5858 3.25 17 3.25C17.4142 3.25 17.75 3.58579 17.75 4V5.81644C19.243 6.02754 20.4226 7.20847 20.6222 8.71484L20.7088 9.36779C21.0728 12.1141 21.0414 14.8984 20.6154 17.6359C20.4044 18.9919 19.3028 20.0335 17.937 20.1681L16.744 20.2858C13.589 20.5969 10.411 20.5969 7.25593 20.2858L6.06292 20.1681C4.69718 20.0335 3.59552 18.9919 3.38451 17.6359C2.95855 14.8984 2.92711 12.1141 3.29115 9.36779L3.3777 8.71484C3.57738 7.20845 4.75693 6.02751 6.25 5.81643V4C6.25 3.58579 6.58579 3.25 7 3.25ZM4.57683 11.75C4.47865 13.6381 4.57538 15.5332 4.86667 17.4052C4.97251 18.0854 5.52509 18.6078 6.21013 18.6754L7.40314 18.793C10.4603 19.0945 13.5397 19.0945 16.5968 18.793L17.7898 18.6754C18.4748 18.6078 19.0274 18.0854 19.1333 17.4052C19.4246 15.5332 19.5213 13.6381 19.4231 11.75H4.57683Z"
        fill="currentColor"
      />
    </IconFilledBase>
  );
}
