import React from "react";

interface MailComponentProps {
  status: "In Review" | "Approved" | "Rejected";
  description: string;
  userName: string;
}

const MailComponent: React.FC<MailComponentProps> = ({
  status,
  description,
  userName,
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
      statusColor = "blue";
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <p>Dear {userName},</p>
      <p>{description}</p>
      <table style={{ marginBottom: "20px" }}>
        <tr>
          <td>
            <strong>Status:</strong>
          </td>
          <td>
            <span style={{ color: statusColor }}>{status}</span>
          </td>
        </tr>
      </table>
      <p>
        If you have any further questions or need assistance, feel free to
        contact us.
      </p>
      <p>Best regards,</p>
      <p>Your Interview Team</p>
    </div>
  );
};

export default MailComponent;
