import Label from "@/components/ui/text/Label";
import UIStateLayer from "@/components/ui/UIStateLayer";
import { cn } from "@/utils/classNames";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { forwardRef, ReactNode } from "react";

const SegmentedRoot = forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>
>(({ className, type, value, onValueChange, ...props }, ref) => (
  <ToggleGroup.Root
    type="single"
    value={value}
    onValueChange={onValueChange}
    className={cn(
      "flex border border-light-outline dark:border-dark-outline rounded-full divide-x divide-light-outline dark:divide-dark-outline",
      className
    )}
    {...props}
    ref={ref}
  />
));
SegmentedRoot.displayName = ToggleGroup.Root.displayName;

const SegmentedButton = forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>
>(({ className, type, value, children, ...props }, ref) => (
  <ToggleGroup.Item
    value={value}
    className={cn(
      "group",
      className
    )}
    {...props}
    ref={ref}
    asChild
  >
    <button
      className="flex-1 text-light-onSurface dark:text-dark-onSurface data-[state=on]:text-light-onSecondaryContainer dark:data-[state=on]:text-dark-onSecondaryContainer data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer first:rounded-l-full last:rounded-r-full"
      type="button"
    >
      <UIStateLayer className="py-2 text-center bg-light-onSurface dark:bg-dark-onSurface group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer group-first:rounded-l-full group-last:rounded-r-full group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-active:bg-opacity-[0.12]">
        <Label size={"large"}>{children}</Label>
      </UIStateLayer>
    </button>
  </ToggleGroup.Item>
));
SegmentedButton.displayName = ToggleGroup.Item.displayName;

// const SegmentedButton = ({
//   id,
//   name,
//   value,
//   onChange,
//   checked,
//   children,
// }: {
//   id: string;
//   name: string;
//   value: string;
//   onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
//   checked?: boolean;
//   children: ReactNode;
// }) => {
//   return (
//     <div className="group">
//       <input
//         className="appearance-none peer"
//         type="radio"
//         id={id}
//         name={name}
//         value={value}
//         onChange={onChange}
//         checked={checked}
//       />
//       <label
//         htmlFor={id}
//         className=" transition-all border-light-outline dark:border-dark-outline border-r group-last:border-r-0 group-first:rounded-l-full group-last:rounded-r-full"
//       >
//         <UIStateLayer className="py-2 text-center bg-light-onSurface dark:bg-dark-onSurface group-last:border-r-0 group-first:rounded-l-full group-last:rounded-r-full">
//           <Label size={"large"}>{children}</Label>
//         </UIStateLayer>
//       </label>
//     </div>
//   );
// };

export { SegmentedButton, SegmentedRoot };
