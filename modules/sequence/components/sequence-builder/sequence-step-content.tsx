import { Trash2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SequenceStepContentProps } from "./sequence-builder.types";
import {
  getContentLabel,
  getContentPlaceholder,
} from "./sequence-builder.utils";

export function SequenceStepContent({
  step,
  onUpdate,
  onRemove,
}: Readonly<SequenceStepContentProps>) {
  return (
    <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(step.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label
            htmlFor={`action-type-${step.id}`}
            className="text-sm font-medium text-gray-700"
          >
            Action Type
          </label>
          <Select
            value={step.actionType}
            onValueChange={(value) =>
              onUpdate(step.id, {
                actionType: value as "email" | "call" | "sms",
              })
            }
          >
            <SelectTrigger
              id={`action-type-${step.id}`}
              className="w-full h-10 bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&>span]:text-gray-900"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="call">Call</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`delay-value-${step.id}`}
            className="text-sm font-medium text-gray-700 flex items-center gap-2"
          >
            <Clock className="h-4 w-4" />
            Delay Before This Step
          </label>
          <div className="flex gap-2">
            <Input
              id={`delay-value-${step.id}`}
              type="number"
              min="0"
              value={step.delay.value}
              onChange={(e) =>
                onUpdate(step.id, {
                  delay: {
                    ...step.delay,
                    value: parseInt(e.target.value) || 0,
                  },
                })
              }
              className="w-20 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <Select
              value={step.delay.unit}
              onValueChange={(value) =>
                onUpdate(step.id, {
                  delay: {
                    ...step.delay,
                    unit: value as "hours" | "days" | "weeks",
                  },
                })
              }
            >
              <SelectTrigger className="w-24 h-10 bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&>span]:text-gray-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="hours">Hours</SelectItem>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor={`content-${step.id}`}
          className="text-sm font-medium text-gray-700"
        >
          {getContentLabel(step.actionType)}
        </label>
        <Textarea
          id={`content-${step.id}`}
          placeholder={getContentPlaceholder(step.actionType)}
          value={step.content}
          onChange={(e) => onUpdate(step.id, { content: e.target.value })}
          className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px] resize-none"
          rows={4}
        />
      </div>
    </div>
  );
}
