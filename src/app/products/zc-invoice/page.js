"use client";
import ZcInvoice from "@/components/zc-invoice";

const ZcInvoicePage = () => {
  return (
    <div className="container mx-auto p-5 ">
      <div className="text-justify">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Problem:</h1>
        <p className="text-gray-700 mb-6">
          Running a small e-commerce business is no easy task. Between managing
          inventory, handling orders, and keeping customers happy, one of the
          biggest challenges many business owners face is managing invoices and
          keeping financial records organized. Traditional invoicing solutions
          can be costly, requiring businesses to rent servers, maintain backups,
          and often pay for storage—all of which add to the operational budget.
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Why We Built ZcInvoice:
        </h2>
        <p className="text-gray-700 mb-4">
          We created ZcInvoice after seeing a gap in the market for small
          business invoicing tools that don’t require renting and maintaining a
          server. The aim was simple: help small business owners manage their
          invoicing with minimal investment. Many entrepreneurs simply don’t
          need or want to invest in a costly, server-dependent system.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-2/5">
          <div className="text-justify">
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>A simple way to generate and track invoices</li>
              <li>Secure cloud storage with Google Drive integration</li>
              <li>Organized data management with Google Sheets</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              How ZcInvoice Works:
            </h2>
            <p className="text-gray-700 mb-4">
              ZcInvoice seamlessly connects with Google Drive and Google Sheets
              to make the process of invoicing easy and efficient.
            </p>
            <ol className="list-decimal pl-5 mb-6 text-gray-700 space-y-3">
              <li>
                <strong>Creating Invoices</strong>: Effortlessly customize
                invoices to align with your business's branding, providing a
                professional and personalized touch.
              </li>
              <li>
                <strong>Automatic Google Drive Storage</strong>: Securely back
                up all invoices by automatically saving them to a designated
                Google Drive folder, ensuring easy access and safe storage.
              </li>
              <li>
                <strong>Google Sheets Record Keeping</strong>: Maintain
                real-time logs of transactions and invoices in Google Sheets for
                streamlined record-keeping and instant updates.
              </li>
              <li>
                <strong>One-Click Sharing</strong>: Share invoices instantly
                with clients directly from Google Drive, making collaboration
                fast and convenient.
              </li>
            </ol>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              Key Features of ZcInvoice:
            </h2>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-3">
              <li>
                <strong>No Server Needed</strong>: Leveraging Google’s reliable
                cloud infrastructure eliminates the need for dedicated servers,
                reducing server costs and simplifying maintenance while ensuring
                high availability and reliability.
              </li>
              <li>
                <strong>Automated Backup & Accessibility</strong>: Invoices are
                automatically backed up to Google Drive, ensuring they are
                securely stored and accessible anytime, anywhere, from any
                device, providing convenience and peace of mind.
              </li>
              <li>
                <strong>Cost-Effective</strong>: Built on Google’s free suite of
                tools, ZcInvoice offers a budget-friendly solution for small
                businesses, eliminating expensive software costs and delivering
                essential features without additional expenses.
              </li>
              <li>
                <strong>Time-Saving</strong>: The streamlined invoicing process
                minimizes manual tasks, allowing business owners to create,
                send, and manage invoices quickly and efficiently, saving
                valuable time that can be invested back into the business.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              How ZcInvoice Helps Small Business Owners
            </h2>
            <p className="text-gray-700 mb-6">
              By automating the invoicing and record-keeping process,
              EasyInvoice allows business owners to focus on growth rather than
              administration. It provides a centralized Google Sheet for
              real-time invoicing data, keeping finances organized and making it
              easier to manage budgets.
            </p>
          </div>
        </div>
        <div className="flex xl:w-3/5">
          <div className="sticky top-20 w-full h-screen">
            <ZcInvoice />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ZcInvoicePage;
