import ZcInvoice from "@/components/products/zc-invoice";

const ZcInvoicePage = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="xl:w-2/5 p-5">opps</div>
      <div className="xl:w-3/5">
        <ZcInvoice />
      </div>
    </div>
  );
};

export default ZcInvoicePage;
