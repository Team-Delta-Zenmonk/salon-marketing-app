"use client";

import React from "react";
import { useAppDispatch } from "@/store/hooks";
import { openDemoModal } from "@/features/leads/leads.slice";
import { Button, type ButtonProps } from "@/components/ui/button";

export interface OpenDemoButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const OpenDemoButton: React.FC<OpenDemoButtonProps> = ({ children, ...props }) => {
  const dispatch = useAppDispatch();
  return (
    <Button {...props} onClick={() => dispatch(openDemoModal())}>
      {children}
    </Button>
  );
};

export default OpenDemoButton;
