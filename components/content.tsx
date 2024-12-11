import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

type ContentVariantsProps = VariantProps<typeof contentVariants>;
const contentVariants = cva("", {
  variants: {
    type: {
      "news-text": "p-24",
      "news-image": "p-30",
    },
  },
  defaultVariants: {},
});

type Props = ContentVariantsProps & { children: React.ReactNode };

const Content = ({ type, children }: Props): React.ReactElement => {
  return (
    <article className={cn(contentVariants({ type }))}>{children}</article>
  );
};

export default Content;
