import React from "react";
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface TextFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  multiline?: boolean;
  rows?: number;
}

export const TextField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  maxLength,
  multiline = false,
  rows = 2,
}: TextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-1.5 w-full">
          {label && <Label>{label}</Label>}

          {multiline ? (
            <Textarea
              {...field}
              rows={rows}
              maxLength={maxLength}
              placeholder={placeholder}
            />
          ) : (
            <Input
              {...field}
              type={type}
              maxLength={maxLength}
              placeholder={placeholder}
              onKeyDown={(e) => {
                if (
                  name === "phone" &&
                  !/\d/.test(e.key) &&
                  !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
                ) {
                  e.preventDefault();
                }
              }}
            />
          )}

          {error && (
            <p className="text-xs text-destructive font-medium">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default TextField;
