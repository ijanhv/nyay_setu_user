import { QR } from "@/components/QR";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { token } = router.query;

  return (
    <div className="flex items-center justify-center h-screen">
      <QR
        url={`https://nyay-setu-user.vercel.app/case/${token}-16efe393-5e4b-4260-b406-d33efd68378c`}
      />
    </div>
  );
}
