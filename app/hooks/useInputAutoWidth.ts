import { ElementRef, MutableRefObject, useEffect, useState } from "react";

interface useInputAutoWidthProps {
  contentRef: MutableRefObject<HTMLDivElement | null>;
  content: string;
}

export function useInputAutoWidth({
  contentRef,
  content,
}: useInputAutoWidthProps) {
  const [inputWidth, setInputWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setInputWidth(Math.min(Math.max(10, contentRef.current?.offsetWidth), 100) );
    }
  }, [content, contentRef]);

  return { inputWidth };
}
