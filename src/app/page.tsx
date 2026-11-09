import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { characters } from "@/data/characters";
import { weapons } from "@/data/weapons";
import { traits } from "@/data/traits";
import { stigmaSets } from "@/data/stigmas";
import { BannerCarousel, type Banner } from "@/components/banner-carousel";
import { CodeList } from "@/components/code-list";

// Every .webp file in public/banners, in name order
function getBanners(): Banner[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "public", "banners"))
      .filter((f) => f.toLowerCase().endsWith(".webp"))
      .sort()
      .map((f) => ({
        src: `/banners/${f}`,
        alt: f.replace(/\.webp$/i, "").replace(/[-_]+/g, " "),
      }));
  } catch {
    return []; // no banners folder yet
  }
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-center">HWki</h1>
        <p className="mt-2 text-muted-foreground text-center">
          Horizon Walker Wiki: Characters DB, Weapons DB, Guide, Gifts, Stigma,
          and more.
        </p>
      </div>
      <BannerCarousel banners={getBanners()} />
      <CodeList show="active" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            href: "/characters",
            title: "Vanguards",
            desc: `${characters.length} units`,
          },
          {
            href: "/weapons",
            title: "Weapons",
            desc: `${weapons.length} weapons`,
          },
          { href: "/traits", title: "Traits", desc: `${traits.length} traits` },
          {
            href: "/stigma",
            title: "Stigma",
            desc: `${stigmaSets.length} sets`,
          },
          { href: "/gifts", title: "Gifts", desc: "Gift guide & values" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="group border-border/60 bg-card/50 transition-all hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
