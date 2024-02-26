import React from "react";

interface MailComponentProps {
  status: "In Review" | "Approved" | "Rejected";
  description: string;
  userName: string;
  notes?: string;
}

const MailComponent: React.FC<MailComponentProps> = ({
  status,
  description,
  userName,
  notes,
}) => {
  let statusColor: string;
  switch (status) {
    case "Approved":
      statusColor = "green";
      break;
    case "Rejected":
      statusColor = "red";
      break;
    default:
      statusColor = "orange";
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <p>Dear {userName},</p>
      <p>I hope this email finds you in good spirits.</p>
      <p>
        We're reaching out to provide an update on the status of your request
        for Interview Trails from "mentoor.io".
      </p>
      <p style={{ color: statusColor, fontWeight: "bold" }}>{description}</p>

      {notes ? (
        <p>
          <strong>Notes:</strong> {notes}
        </p>
      ) : null}

      <p>
        If you have any further questions or need assistance, feel free to
        contact us.
      </p>
      <p>Best regards,</p>
      <p>mentoor.io Team</p>
    </div>
  );
};

export default MailComponent;
