import { useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";
import GoBackButton from "../components/GoBackButton";
import ViewInvoiceButtons from "../components/ViewInvoiceButtons";
import { InvoiceData } from "../types";
import DeleteConfirmation from "../components/modalComponents/DeleteConfirmation";

const ViewInvoice: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { appData, darkMode, isDeleteModalVisible } = useContext(AppContext);
  const invoice = appData.find((inv: InvoiceData) => inv.id === id);

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
      <div className="w-screen pt-[33px] px-6 flex flex-col items-start md:pb-[135px] md:px-[40px] md:pt-[50px] lg:px-[350px]">
        {isDeleteModalVisible && <DeleteConfirmation />}
        <Link to={"/invoices"}>
          <GoBackButton />
        </Link>
        <div
          className="w-full px-6 pt-6 pb-[27px] rounded-lg mt-9 flex items-center justify-between md:justify-normal"
          style={
            darkMode
              ? { backgroundColor: "#1e2139" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <div className="w-full flex items-center justify-between md:justify-normal md:gap-5">
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
                  invoice.status.name === "Pending"
                    ? "#fff1df"
                    : invoice.status.name === "Paid"
                    ? "#c0f6e4"
                    : invoice.status.name === "Draft"
                    ? "#eeebeb"
                    : "transparent",
              }}
            >
              <div
                className="h-[8px] w-[8px] rounded-full"
                style={{
                  backgroundColor:
                    invoice.status.name === "Pending"
                      ? "#ff8f00"
                      : invoice.status.name === "Paid"
                      ? "#22c991"
                      : invoice.status.name === "Draft"
                      ? "#979797"
                      : "transparent",
                }}
              ></div>
              <p
                className="font-bold text-[13px]"
                style={{
                  color:
                    invoice.status.name === "Pending"
                      ? "#ff8f00"
                      : invoice.status.name === "Paid"
                      ? "#22c991"
                      : invoice.status.name === "Draft"
                      ? "#979797"
                      : "transparent",
                }}
              >
                {invoice.status.name}
              </p>
            </div>
          </div>
          <div className="hidden md:w-full md:flex justify-end gap-2">
            <ViewInvoiceButtons />
          </div>
        </div>
        <div
          className="w-full px-6 py-6 rounded-lg mt-9 flex flex-col items-start md:pt-0"
          style={
            darkMode
              ? { backgroundColor: "#1e2139" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <div className="w-full flex flex-col items-start md:items-baseline md:flex-row md:justify-between">
            <div>
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
            </div>
            <div className="md:flex md:flex-col md:items-end">
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
            </div>
          </div>
          <div className="flex items-baseline gap-[62px] mt-[31px] md:mt-0">
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
            <div className="hidden md:block">
              <p
                className="text-[13px] font-semibold mb-[13px] mt-[35px] md:mb-2"
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
            </div>
          </div>
          <div className="md:hidden">
            <p
              className="text-[13px] font-semibold mb-[13px] mt-[35px] md:mb-2"
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
          </div>
          <div
            className="w-full mt-[38px] rounded-lg"
            style={
              darkMode
                ? { backgroundColor: "#252945" }
                : { backgroundColor: "#f9fafe" }
            }
          >
            <div className="px-6 pt-6 pb-0 md:px-8 md:pt-8">
              <div className="flex items-center justify-between md:hidden">
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
              <div className="flex items-center justify-between mt-6 md:hidden">
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
              <div className="hidden w-full md:flex justify-between items-baseline">
                <div className="flex flex-col items-start gap-y-8">
                  <p
                    className="text-[13px] font-semibold"
                    style={
                      darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }
                    }
                  >
                    Item Name
                  </p>
                  <p
                    className="text-[14px] font-bold"
                    style={
                      darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                    }
                  >
                    {invoice.items[0]?.name}
                  </p>
                  <p
                    className="text-[14px] font-bold"
                    style={
                      darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                    }
                  >
                    {invoice.items[1]?.name}
                  </p>
                </div>
                <div className="flex items-center gap-[65px]">
                  <div className="flex flex-col items-center gap-y-8">
                    <p
                      className="text-[13px] font-semibold"
                      style={
                        darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }
                      }
                    >
                      QTY.
                    </p>
                    <p
                      className="text-[14px] font-bold"
                      style={
                        darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                      }
                    >
                      {invoice.items[0]?.quantity}
                    </p>
                    <p
                      className="text-[14px] font-bold"
                      style={
                        darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                      }
                    >
                      {invoice.items[1]?.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-y-8">
                    <p
                      className="text-[13px] font-semibold"
                      style={
                        darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }
                      }
                    >
                      Price
                    </p>
                    <p
                      className="text-[14px] font-bold"
                      style={
                        darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }
                      }
                    >
                      £ {invoice.items[0]?.price.toFixed(2)}
                    </p>
                    <p
                      className="text-[14px] font-bold"
                      style={
                        darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }
                      }
                    >
                      {invoice.items[1]
                        ? `£ ${invoice.items[1].price.toFixed(2)}`
                        : null}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-y-8">
                    <p
                      className="text-[13px] font-semibold"
                      style={
                        darkMode ? { color: "#dfe3fa" } : { color: "#7e88c3" }
                      }
                    >
                      Price
                    </p>
                    <p
                      className="text-[14px] font-bold"
                      style={
                        darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                      }
                    >
                      {invoice.items[0]
                        ? `£ ${invoice.items[0].total.toFixed(2)}`
                        : null}
                    </p>
                    <p
                      className="text-[14px] font-bold"
                      style={
                        darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }
                      }
                    >
                      {invoice.items[1]
                        ? `£ ${invoice.items[1].total.toFixed(2)}`
                        : null}
                    </p>
                  </div>
                </div>
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
                £ {invoice.items[0].total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen mt-[56px] py-5 px-6 flex items-center justify-between md:hidden"
        style={
          darkMode
            ? { backgroundColor: "#1e2139" }
            : { backgroundColor: "#ffffff" }
        }
      >
        <ViewInvoiceButtons />
      </div>
    </>
  );
};

export default ViewInvoice;
