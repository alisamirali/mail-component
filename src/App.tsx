import MailComponent from "./components/MailComponent";
import "./App.css";

const status = [
  {
    status: "In Review",
    description: "Your interview request is currently under review.",
    userName: "John",
  },
  {
    status: "Approved",
    description: "Congratulations! Your interview request has been approved.",
    userName: "Jane",
  },
  {
    status: "Rejected",
    description:
      "We regret to inform you that your interview request has been rejected.",
    userName: "Bob",
  },
];

function App() {
  return (
    <>
      {status.map((statusItem) => (
        <>
          <MailComponent
            key={statusItem.userName}
            status={statusItem.status as "In Review" | "Approved" | "Rejected"}
            description={statusItem.description}
            userName={statusItem.userName}
            notes="This is a note."
          />
          <hr />
        </>
      ))}
    </>
  );
}

export default App;
