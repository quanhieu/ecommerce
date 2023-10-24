// import { getI18n, getCurrentLocale, getScopedI18n } from "@/locales/server";
import { UserButton } from "@clerk/nextjs";

// export default async function Home() {
//   const locale = getCurrentLocale();
//   const t = await getI18n();
//   const scopedT = await getScopedI18n("hello");
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Button variant={"default"}>Click me</Button>
//       {/* <UserButton afterSignOutUrl="/" /> */}
//       <div className="z-10 w-full flex flex-col items-center justify-between font-mono text-sm gap-4">
//         {/* <p>Locale: {locale}</p>
//         <p>{t("hello")}</p>

//         <p>{t("hello.world")}</p>
//         <p>{scopedT("world")}</p>
//         <p>{t("welcome", { name: "John" })}</p>
//         <p>{t("welcome", { name: <strong>John</strong> })}</p> */}
//       </div>
//     </main>
//   );
// }

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
