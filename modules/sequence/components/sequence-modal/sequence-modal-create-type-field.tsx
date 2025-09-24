import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreateSequenceTypeFieldProps } from "./sequence-modal.types";

export function CreateSequenceTypeField({ control }: Readonly<CreateSequenceTypeFieldProps>) {
  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-700">
            Sequence Type <span className="text-red-500">*</span>
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select sequence type..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="email">Email Sequence</SelectItem>
              <SelectItem value="call">Call Sequence</SelectItem>
              <SelectItem value="sms">SMS Sequence</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
