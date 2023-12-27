import { Download } from "lucide-react";
import { Button } from "./Button";

export function ExportButton() {
  return (
    <Button>
      <Download />
      Export PNG
    </Button>
  );
}
