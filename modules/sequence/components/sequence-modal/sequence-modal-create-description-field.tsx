import { Textarea } from "@/components/ui/textarea";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreateSequenceDescriptionFieldProps } from "./sequence-modal.types";

export function CreateSequenceDescriptionField({ control }: Readonly<CreateSequenceDescriptionFieldProps>) {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-700">
            Description <span className="text-gray-500">(optional)</span>
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Describe your sequence..."
              className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[80px] resize-none"
              rows={3}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
