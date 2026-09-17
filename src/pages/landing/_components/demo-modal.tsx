import React, { useState } from "react";
import { Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createLeadAction, resetLeadState } from "@/features/leads";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { isSubmitting, isSuccess, successMessage, error } = useAppSelector(
    (state) => state.leads
  );

  const [formData, setFormData] = useState({
    name: "",
    salon_name: "",
    email: "",
    phone: "",
    team_size: "3-5",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.salon_name) return;
    await dispatch(createLeadAction(formData));
  };

  const handleClose = () => {
    dispatch(resetLeadState());
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
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 text-xs text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Your Full Name *
              </label>
              <Input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Elena Alvarez"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Salon / Spa Name *
              </label>
              <Input
                name="salon_name"
                required
                value={formData.salon_name}
                onChange={handleChange}
                placeholder="e.g. Atelier Luxe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Work Email *
              </label>
              <Input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="elena@atelierluxe.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">
              Team Size / Chairs
            </label>
            <select
              name="team_size"
              value={formData.team_size}
              onChange={handleChange}
              className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
            >
              <option value="1-2">1–2 Stylists (Solo / Duo)</option>
              <option value="3-5">3–5 Stylists (Growing Studio)</option>
              <option value="6-10">6–10 Stylists (Established Salon)</option>
              <option value="10+">10+ Stylists (Multi-Branch / Flagship)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">
              What is your biggest operational challenge right now?
            </label>
            <textarea
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. Too many no-shows, messy commission math, want instant client online booking..."
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-all resize-none"
            />
          </div>

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
