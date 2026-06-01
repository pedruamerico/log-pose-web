/* Shared inline SVGs for the Log Pose landing. */

export const APP_VERSION = "1.1.0";
const DOWNLOAD_FILE = `https://github.com/pedruamerico/log-pose/releases/download/${APP_VERSION}/Log.Pose_${APP_VERSION}_x64-setup.exe`;

export function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function BrandMark() {
  return (
    <span className="mark" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle className="ring" cx="12" cy="12" r="9.5" />
        <polygon className="needle" points="12,3.5 14.4,12 12,12" />
        <polygon className="needle-b" points="12,20.5 9.6,12 12,12" />
      </svg>
    </span>
  );
}

export function DownloadButton({
  className = "btn btn-primary",
  label = "Baixar para Windows",
}: {
  readonly className?: string;
  readonly label?: string;
}) {
  return (
    <a className={className} href={DOWNLOAD_FILE}>
      <DownloadIcon />
      {label}
    </a>
  );
}
