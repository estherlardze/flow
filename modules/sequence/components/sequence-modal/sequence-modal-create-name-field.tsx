import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreateSequenceNameFieldProps } from "./sequence-modal.types";

export function CreateSequenceNameField({ control }: Readonly<CreateSequenceNameFieldProps>) {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-700">
            Sequence Name <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <Input
              placeholder="Enter sequence name..."
              className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
