import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import GoBackButton from "../components/GoBackButton";

const ViewInvoice: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { appData, darkMode } = useContext(AppContext);
  const invoice = appData.find((inv) => inv.id === id);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  if (!invoice) {
    return <p>Invoice not found</p>;
  }
  return (
    <>
      <div className="w-screen pt-[33px] px-6 flex flex-col items-start">
        <GoBackButton />
        <div
          className="w-full px-6 pt-6 pb-[27px] rounded-lg mt-9 flex items-center justify-between"
          style={
            darkMode
              ? { backgroundColor: "#1e2139" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <p
            className="text-[13px]"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#858bb2" }}
          >
            Status
          </p>
          <div
            className="flex items-center gap-2 px-[19px] py-[9px] rounded-lg"
            style={{
              backgroundColor:
                invoice.status === "pending"
                  ? "#fff1df"
                  : invoice.status === "paid"
                  ? "#c0f6e4"
                  : invoice.status === "draft"
                  ? "#eeebeb"
                  : "transparent",
            }}
          >
            <div
              className="h-[8px] w-[8px] rounded-full"
              style={{
                backgroundColor:
                  invoice.status === "pending"
                    ? "#ff8f00"
                    : invoice.status === "paid"
                    ? "#22c991"
                    : invoice.status === "draft"
                    ? "#979797"
                    : "transparent",
              }}
            ></div>
            <p
              className="font-bold text-[13px]"
              style={{
                color:
                  invoice.status === "pending"
                    ? "#ff8f00"
                    : invoice.status === "paid"
                    ? "#22c991"
                    : invoice.status === "draft"
                    ? "#979797"
                    : "transparent",
              }}
            >
              {invoice.status}
            </p>
          </div>
        </div>
        <div
          className="w-full px-6 py-6 rounded-lg mt-9 flex flex-col items-start"
          style={
            darkMode
              ? { backgroundColor: "#1e2139" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <p
            className="text-[14px] font-bold"
            style={darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }}
          >
            <span
              className="font-bold"
              style={darkMode ? { color: "#626291" } : { color: "#7e88c3" }}
            >
              #
            </span>
            {invoice.id}
          </p>
          <p
            className="text-[13px] font-semibold"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
          >
            {invoice.description}
          </p>
          <p
            className="text-[13px] font-semibold mt-[30px]"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
          >
            {invoice.senderAddress.street}
          </p>
          <p
            className="text-[13px] font-semibold"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
          >
            {invoice.senderAddress.city}
          </p>
          <p
            className="text-[13px] font-semibold"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
          >
            {invoice.senderAddress.postCode}
          </p>
          <p
            className="text-[13px] font-semibold"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
          >
            {invoice.senderAddress.country}
          </p>
          <div className="flex items-baseline gap-[62px] mt-[31px]">
            <div className="flex flex-col items-start">
              <p
                className="text-[13px] font-semibold mb-[13px]"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                Invoice Date
              </p>
              <p
                className="text-[15px] font-bold"
                style={darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }}
              >
                {formatDate(invoice.createdAt)}
              </p>
              <p
                className="text-[13px] font-semibold mb-[13px] mt-[31px]"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                Payment Due
              </p>
              <p
                className="text-[15px] font-bold"
                style={darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }}
              >
                {formatDate(invoice.paymentDue)}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p
                className="text-[13px] font-semibold mb-[10px]"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                Bill To
              </p>
              <p
                className="text-[15px] font-bold mb-2"
                style={darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }}
              >
                {invoice.clientName}
              </p>
              <p
                className="text-[13px] font-semibold"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                {invoice.clientAddress.street}
              </p>
              <p
                className="text-[13px] font-semibold"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                {invoice.clientAddress.city}
              </p>
              <p
                className="text-[13px] font-semibold"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                {invoice.clientAddress.postCode}
              </p>
              <p
                className="text-[13px] font-semibold"
                style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
              >
                {invoice.clientAddress.country}
              </p>
            </div>
          </div>
          <p
            className="text-[13px] font-semibold mb-[13px] mt-[35px]"
            style={darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }}
          >
            Sent To
          </p>
          <p
            className="text-[15px] font-bold"
            style={darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }}
          >
            {invoice.clientEmail}
          </p>
          <div
            className="w-full mt-[38px] rounded-lg"
            style={
              darkMode
                ? { backgroundColor: "#252945" }
                : { backgroundColor: "#f9fafe" }
            }
          >
            <div className="px-6 pt-6 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <p
                    className="text-[14px] font-bold"
                    style={
                      darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                    }
                  >
                    {invoice.items[0]?.name}
                  </p>
                  <p
                    className="text-[15px] font-bold mt-2"
                    style={
                      darkMode ? { color: "#888eb0" } : { color: "#7e88c3" }
                    }
                  >
                    {invoice.items[0]?.quantity} x £{" "}
                    {invoice.items[0]?.price.toFixed(2)}
                  </p>
                </div>
                <p
                  className="text-[15px] font-bold mt-2"
                  style={darkMode ? { color: "#888eb0" } : { color: "#7e88c3" }}
                >
                  £ {invoice.items[0]?.total.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-col items-start">
                  <p
                    className="text-[14px] font-bold"
                    style={
                      darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                    }
                  >
                    {invoice.items[1]?.name}
                  </p>
                  <p
                    className="text-[15px] font-bold mt-2"
                    style={
                      darkMode ? { color: "#888eb0" } : { color: "#7e88c3" }
                    }
                  >
                    {invoice.items[1]
                      ? `${invoice.items[1]?.quantity} x £
                    ${invoice.items[1]?.price.toFixed(2)} `
                      : null}
                  </p>
                </div>
                <p
                  className="text-[15px] font-bold mt-2"
                  style={darkMode ? { color: "#888eb0" } : { color: "#7e88c3" }}
                >
                  {invoice.items[1]
                    ? `£ ${invoice.items[1]?.quantity} x £
                    ${invoice.items[1]?.total.toFixed(2)} `
                    : null}
                </p>
              </div>
            </div>
            <div
              className="rounded-b-lg px-6 py-6 flex items-center justify-between mt-6"
              style={
                darkMode
                  ? { backgroundColor: "#0c0e16" }
                  : { backgroundColor: "#373b53" }
              }
            >
              <p className="text-[#ffffff] text-[14px]">Grand Total</p>
              <p className="text-[20px] text-[#ffffff] font-bold">
                £ {invoice.total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen mt-[56px] py-5 px-6 flex items-center justify-between"
        style={
          darkMode
            ? { backgroundColor: "#1e2139" }
            : { backgroundColor: "#ffffff" }
        }
      >
        <button
          className="pt-[18px] pb-[15px] px-6 rounded-[24px]"
          style={
            darkMode
              ? { backgroundColor: "#252945", color: "#dfe3fa" }
              : { backgroundColor: "#f9fafe", color: "#7e88c3" }
          }
        >
          Edit
        </button>
        <button className="pt-[18px] pb-[15px] px-6 rounded-[24px] text-[#ffffff] bg-[#ec5757]">
          Delete
        </button>
        <button className="pt-[18px] pb-[15px] px-6 rounded-[24px] text-[#ffffff] bg-[#7c5dfa]">
          Mark as Paid
        </button>
      </div>
    </>
  );
};

export default ViewInvoice;
