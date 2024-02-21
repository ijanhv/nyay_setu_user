import { QR } from "@/components/QR";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <QR url="http://192.168.24.0:3000/court/cases/0-16efe393-5e4b-4260-b406-d33efd68378c" />
    </div>
  );
}
