import { CodeList } from "@/components/code-list";

export default function CodesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Redeem Codes</h1>
        <p className="text-sm text-muted-foreground">Tap a code to copy it.</p>
      </div>
      <CodeList show="all" />
    </div>
  );
}
