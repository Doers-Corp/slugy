"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { acceptInvitation, getInvitationDetails } from "@/server/actions/organization";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LoaderCircle } from "@/utils/icons/loader-circle";
import AppLogo from "@/components/web/app-logo";

interface InvitationPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface InvitationData {
  organizationName: string;
  inviterName: string;
  inviterEmail: string;
  role: string;
  expiresAt: Date;
}

export default function AcceptInvitationPage({ params }: InvitationPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAccepting, setIsAccepting] = useState(false);
  const [invitationData, setInvitationData] = useState<InvitationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Unwrap the params Promise
  const { id } = use(params);

  useEffect(() => {
    loadInvitationDetails();
  }, [id]);

  const loadInvitationDetails = async () => {
    try {
      const result = await getInvitationDetails(id);
      if (result.success && result.invitation && result.invitation.organization && result.invitation.inviter) {
        setInvitationData({
          organizationName: result.invitation.organization.name,
          inviterName: result.invitation.inviter.name,
          inviterEmail: result.invitation.inviter.email,
          role: result.invitation.role,
          expiresAt: result.invitation.expiresAt,
        });
      } else {
        setError(result.error || "Failed to load invitation details");
      }
    } catch (error) {
      console.error("Error loading invitation details:", error);
      setError("Failed to load invitation details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptInvitation = async () => {
    setIsAccepting(true);
    try {
      const result = await acceptInvitation(id);

      if (result.success) {
        toast.success("Invitation accepted successfully!");
        // Redirect to the organization workspace
        if (result.workspace) {
          router.push(`/${result.workspace.slug}`);
        } else {
          router.push("/dashboard");
        }
      } else {
        setError(result.error || "Failed to accept invitation");
        toast.error(result.error || "Failed to accept invitation");
      }
    } catch (error) {
      console.error("Error accepting invitation:", error);
      setError("An unexpected error occurred");
      toast.error("Failed to accept invitation");
    } finally {
      setIsAccepting(false);
    }
  };

  const handleDeclineInvitation = async () => {
    try {
      // For now, we'll just redirect to home
      // In the future, we could add a declineInvitation function
      toast.success("Invitation declined");
      router.push("/");
    } catch (error) {
      console.error("Error declining invitation:", error);
      toast.error("Failed to decline invitation");
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <LoaderCircle className="h-8 w-8 animate-spin" />
          <p className="text-zinc-600 dark:text-zinc-300">Loading invitation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-md p-8">
        <div className="mb-8 flex flex-col items-center space-y-6">
          <AppLogo />
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-xl font-medium text-zinc-800 dark:text-white">
              Organization Invitation
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-300">
              You&apos;ve been invited to join an organization
            </p>
          </div>
        </div>

        {error ? (
          <div className="space-y-4">
            <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
            <Button
              onClick={() => router.push("/")}
              className="w-full"
              variant="outline"
            >
              Go Home
            </Button>
          </div>
        ) : invitationData ? (
          <div className="space-y-6">
            <div className="rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="space-y-2">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>{invitationData.inviterName}</strong> has invited you to join{" "}
                  <strong>{invitationData.organizationName}</strong> as a{" "}
                  <strong>{invitationData.role}</strong>.
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Invitation expires: {invitationData.expiresAt.toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleAcceptInvitation}
                className="w-full"
                disabled={isAccepting}
              >
                {isAccepting && (
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                )}
                Accept Invitation
              </Button>

              <Button
                onClick={handleDeclineInvitation}
                className="w-full"
                variant="outline"
                disabled={isAccepting}
              >
                Decline Invitation
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-md bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Loading invitation details...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 