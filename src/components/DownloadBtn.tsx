'use client';

import Link from 'next/link';

export default function DownloadBtn() {
  return (
    <button>
      <Link
        href="/paeez1403.pdf"
        className="underline"
        download={true}
      >
        {' '}
        دانلود رزومه
      </Link>
    </button>
  );
}
