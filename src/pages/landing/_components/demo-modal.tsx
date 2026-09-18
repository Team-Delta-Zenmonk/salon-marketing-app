import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import TextField from "@/components/ui/text-field";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createLeadAction,
  resetLeadState,
  createLeadSchema,
  type CreateLeadFormValues,
} from "@/features/leads";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { isSubmitting, isSuccess, successMessage, error } = useAppSelector(
    (state) => state.leads
  );

  const { control, handleSubmit, reset } = useForm<CreateLeadFormValues>({
    resolver: zodResolver(createLeadSchema),
    defaultValues: {
      name: "",
      salon_name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data: CreateLeadFormValues) => {
    await dispatch(createLeadAction(data));
  };

  const handleClose = () => {
    dispatch(resetLeadState());
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isSuccess ? undefined : "Schedule a VIP Product Tour"}
      description={
        isSuccess
          ? undefined
          : "Discover how ZenMonk can tailor automated scheduling, custom client booking storefronts, and invoicing specifically to your salon."
      }
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            We've Received Your Request!
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            {successMessage ||
              "One of our dedicated salon advisors will reach out within 2 business hours to coordinate your live walkthrough."}
          </p>
          <div className="pt-4">
            <Button onClick={handleClose} className="w-full justify-center">
              Close & Continue Exploring
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 text-xs text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TextField
              name="name"
              control={control}
              label="Your Full Name *"
              placeholder="e.g. Elena Alvarez"
              maxLength={250}
            />

            <TextField
              name="salon_name"
              control={control}
              label="Salon / Spa Name *"
              placeholder="e.g. Atelier Luxe"
              maxLength={250}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TextField
              name="email"
              control={control}
              type="email"
              label="Work Email *"
              placeholder="elena@atelierluxe.com"
              maxLength={250}
            />

            <TextField
              name="phone"
              control={control}
              type="text"
              label="Phone Number"
              placeholder="9876543210"
              maxLength={15}
            />
          </div>

          <TextField
            name="notes"
            control={control}
            label="What is your biggest operational challenge right now?"
            placeholder="e.g. Too many no-shows, messy commission math, want instant client online booking..."
            multiline
            rows={2}
            maxLength={500}
          />

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full justify-center font-bold gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Scheduling Your VIP Tour...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Request VIP Product Demo</span>
                </>
              )}
            </Button>
            <p className="text-center text-[11px] text-muted-foreground mt-2">
              🔒 Confidential • No spam • Direct response within 2 hours
            </p>
          </div>
        </form>
      )}
    </Modal>
  );
};
