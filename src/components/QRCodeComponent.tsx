"use client";

import QRCode from "react-qr-code";

export default function QRCodeComponent({
  value,
}: {
  value: string;
}) {
  return <QRCode value={value} size={180} />;
}
