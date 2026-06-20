import { createFileRoute } from "@tanstack/react-router";
import { BananaHorrorGame } from "@/components/BananaHorrorGame";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "黄鬼" },
      {
        name: "description",
        content:
          "ポップで不気味な2Dホラー。りんごを集めて、鬼たちから逃げ延びろ。",
      },
      { property: "og:title", content: "黄鬼" },
      {
        property: "og:description",
        content: "りんごを集めて脱出するホラーゲーム",
      },
    ],
  }),
});

function Index() {
  return <BananaHorrorGame />;
}
