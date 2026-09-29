"use client";

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
  pattern?: RegExp;
  identifier?: string;
}

const matchesPattern = (pattern: RegExp, value: string) => {
  pattern.lastIndex = 0;
  return pattern.test(value);
};

export const TextField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  maxLength,
  multiline = false,
  rows = 2,
  pattern,
  identifier,
}: TextFieldProps<T>) => {
  const isEmail = String(name).toLowerCase().includes("email") || type === "email";
  const isPhone = String(name).toLowerCase().includes("phone") || type === "tel";

  const sanitize = (val: string) => {
    if (isEmail) return val.replace(/\s+/g, "");
    if (isPhone) return val.replace(/\D/g, "");
    return val.replace(/^\s+/, "").replace(/\s+/g, " ");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const Component = multiline ? Textarea : Input;

        const handleBeforeInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const inserted = (e as any).data ?? (e.nativeEvent as InputEvent)?.data;
          if (!inserted) return;

          const input = e.target as HTMLInputElement | HTMLTextAreaElement;
          const start = input.selectionStart ?? 0;
          const end = input.selectionEnd ?? 0;
          const cur = input.value ?? "";
          const next = sanitize(cur.slice(0, start) + inserted + cur.slice(end));

          if (pattern && next !== "" && !matchesPattern(pattern, next)) {
            e.preventDefault();
          }
        };

        return (
          <div className="space-y-1.5 w-full">
            {label && <Label htmlFor={identifier}>{label}</Label>}
            <Component
              {...field}
              id={identifier}
              data-testid={identifier}
              type={multiline ? undefined : type}
              rows={multiline ? rows : undefined}
              maxLength={maxLength}
              placeholder={placeholder}
              onBeforeInput={handleBeforeInput}
              onChange={(e) => {
                const next = sanitize(e.target.value);

                if (pattern && next !== "" && !matchesPattern(pattern, next)) {
                  e.target.value = field.value ?? "";
                  return;
                }

                field.onChange(next);
              }}
              onKeyDown={(e) => {
                if (isEmail && (e.key === " " || e.code === "Space")) {
                  e.preventDefault();
                } else if (
                  isPhone &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !/\d/.test(e.key) &&
                  !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
                ) {
                  e.preventDefault();
                }
              }}
              onBlur={() => {
                if (typeof field.value === "string") field.onChange(field.value.trim());
                field.onBlur();
              }}
            />
            {error && <p className="text-xs text-destructive font-medium">{error.message}</p>}
          </div>
        );
      }}
    />
  );
};

export default TextField;
