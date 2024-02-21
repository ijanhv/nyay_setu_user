import { QR } from "@/components/QR";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <QR url="http://localhost:3000/case/0-16efe393-5e4b-4260-b406-d33efd68378c" />
    </div>
  );
}
