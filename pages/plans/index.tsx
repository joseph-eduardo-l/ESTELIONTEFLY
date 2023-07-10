import { Layout } from "@/components/layout";
import Plans from "@/components/plans/Plans";
import { en, es } from "@/locale";
import { useRouter } from "next/router";

export default function PlansPage() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const { global: { head: {titles: { plans } } } } = t;
  return (
    <Layout title={plans} >
      <Plans />
    </Layout>
  );
}
