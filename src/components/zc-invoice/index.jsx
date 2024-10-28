import { useState } from "react";
import { usePDF } from "react-to-pdf";
import InvoiceSlider from "./invoice-slider";
import InvoiceTemplate from "./invoice-template";

export default function ZcInvoice() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "001",
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    companyName: "Your Company Name",
    clientName: "",
    items: [{ description: "", quantity: 1, price: 0 }],
  });

  const { toPDF, targetRef } = usePDF();

  return (
    <div className="hidden lg:block">
      <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4"></div>
        <div className="flex flex-row items-center justify-between mr-4">
          <InvoiceSlider
            invoiceData={invoiceData}
            setInvoiceData={setInvoiceData}
            toPDF={toPDF}
          />
        </div>
      </header>
      <div>
        <div>
          <div className="overflow-y-auto pl-4 pr-4">
            <InvoiceTemplate targetRef={targetRef} invoiceData={invoiceData} />
          </div>
        </div>
      </div>
    </div>
  );
}
