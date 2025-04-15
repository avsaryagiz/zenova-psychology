import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { LoaderIcon } from "../icons";

const buttonVariants = cva(
  "inline-flex items-center button active:scale-95 justify-center gap-2 tranisiton-colors whitespace-nowrap rounded-md text-xs font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        muted:
          "bg-muted text-muted-foreground shadow-xs hover:bg-primary dark:bg-muted/60",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-accent text-accent-foreground shadow-xs hover:bg-accent/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        indicator: "h-2 w-10 rounded-full",
        custom:
          "lg:h-16 rounded-md lg:px-14 has-[>svg]:px-4 sm:uppercase h-9 px-4 lg:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  afterIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isLoading?: boolean;
}

function Button({
  className,
  variant,
  size,
  icon: Icon,
  afterIcon: AfterIcon,
  isLoading = false,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      <span className="flex items-center gap-2">
        {isLoading ? (
          <LoaderIcon className="size-3 animate-spin" />
        ) : (
          Icon && <Icon className="size-3" />
        )}
        {/* Render the button text */}
        {props.children}

        {/* Render the afterIcon if provided */}
        {AfterIcon && <AfterIcon className="size-3" />}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
