import UIStateLayer from "@/components/ui/UIStateLayer";
import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "group h-10 w-10 rounded-full disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed  disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38]",
  {
    variants: {
      appearance: {
        filled:
          "",
        tonal:
          "",
        outlined:
          "",
        standart: "",
      },
    },
    defaultVariants: {},
  }
);

const uiStateLayerVariants = cva("", {
  variants: {
    appearance: {
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      standart: "bg-light-primary dark:bg-dark-primary px-3",
    },
  },
  defaultVariants: {},
});

type IconButtonVariantProps = VariantProps<typeof buttonVariants>;
type LabelBaseProps = LabelHTMLAttributes<HTMLLabelElement>

interface Props
  extends Omit<LabelBaseProps, "onChange">,
    Required<Pick<LabelBaseProps, "onChange">>,
    Required<Pick<IconButtonVariantProps, "appearance">> {
  icon: ReactNode;
  selected: boolean;
  disabled: boolean
}

const ToggledIconButton: FC<Props> = ({
  icon,
  onChange,
  className,
  appearance,
  disabled,
  selected,
  ...props
}) => {
  return (
    <label
      className={cn(className, buttonVariants({ appearance }))}
      {...props}
    >
      <UIStateLayer
        className={cn(
          "rounded-full flex items-center justify-center",
          uiStateLayerVariants({ appearance })
        )}
      >
        <input
        className="appearance-none"
        type={"checkbox"}
        checked={selected}
        onChange={onChange}
      />
        <span>{icon}</span>
      </UIStateLayer>
    </label>
  );
};

export default ToggledIconButton;
