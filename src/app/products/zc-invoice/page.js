"use client";
import ZcInvoice from "@/components/zc-invoice";

const ZcInvoicePage = () => {
  return (
    <div className="container mx-auto flex flex-col xl:flex-row">
      <div className="xl:w-2/5 p-5">opps</div>
      <div className="xl:w-3/5">
        <ZcInvoice />
      </div>
    </div>
  );
};
export default ZcInvoicePage;
