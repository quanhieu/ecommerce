import { getI18n, getCurrentLocale, getScopedI18n } from "@/locales/server";
import { Button } from "@/components/ui/button"

export default async function Home() {
  const locale = getCurrentLocale();
  const t = await getI18n();
  const scopedT = await getScopedI18n("hello");
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <Button size={'default'} variant={'default'}>Click me</Button>
    //   <div className="z-10 w-full flex flex-col items-center justify-between font-mono text-sm gap-4">
    //     <p>Locale: {locale}</p>
    //     <p>{t("hello")}</p>

    //     {/* Both are equivalent: */}
    //     <p>{t("hello.world")}</p>
    //     <p>{scopedT("world")}</p>
    //     <p>{t("welcome", { name: "John" })}</p>
    //     <p>{t("welcome", { name: <strong>John</strong> })}</p>
    //   </div>
    // </main>
    <Button variant={'default'}>Click me</Button>
  );
}
