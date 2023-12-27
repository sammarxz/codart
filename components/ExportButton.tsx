import { Download } from "lucide-react";

import { Button } from ".";

export function ExportButton() {
  return (
    <Button>
      <Download />
      Export PNG
    </Button>
  );
}
