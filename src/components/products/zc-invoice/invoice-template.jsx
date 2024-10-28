import { RedoIcon, ZoomIn, ZoomOut } from "lucide-react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="flex z-20 sticky top-0 w-full bg-gray-100">
      <button
        onClick={() => zoomIn(0.1, 200, "easeInQuad")}
        className="text-white px-4 py-2 rounded cursor-pointer"
      >
        <ZoomIn className="text-gray-400" />
      </button>
      <button
        onClick={() => zoomOut(0.1, 200, "easeInQuad")}
        className="text-white px-4 py-2 rounded cursor-pointer"
      >
        <ZoomOut className="text-gray-400" />
      </button>
      <button
        onClick={() => resetTransform(200, "easeInQuad")}
        className="  text-white px-4 py-2 rounded cursor-pointer"
      >
        <RedoIcon className="text-gray-400" />
      </button>
    </div>
  );
};

export default function InvoiceTemplate({ targetRef, invoiceData }) {
  const calculateTotal = () => {
    return invoiceData.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  };

  return (
    <div className="container mx-auto h-[82vh] overflow-scroll bg-gray-50 rounded-sm">
      <TransformWrapper
        initialScale={1}
        minScale={1} // Prevents zooming out too much
        maxScale={1.2}
        wheel={{
          step: 0.2, // Smaller step size to control zoom precision
          smoothStep: 0.02, // Smooth scroll for finer zoom control
          activationKeys: ["Shift"], // Optional: Enable zoom with Shift key + scroll
        }}
        doubleClick={{ disabled: true }}
        panning={{ velocityDisabled: true }}
      >
        <div className="flex items-center flex-col">
          <Controls />
          <div className="py-3">
            <TransformComponent>
              <div ref={targetRef} className="flex items-center  ">
                <div
                  className="bg-white p-8 rounded-lg shadow-lg "
                  style={{
                    width: "209mm", // A4 width in pixels '210mm'
                    height: "259mm", // A4 height in pixels '297mm'
                  }}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">
                        {invoiceData.companyName}
                      </h1>
                      <p className="text-gray-600">
                        Invoice #{invoiceData.invoiceNumber}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Date: {invoiceData.date}</p>
                      <p className="font-semibold">
                        Due Date: {invoiceData.dueDate}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Bill To:</h2>
                    <p>{invoiceData.clientName}</p>
                  </div>

                  <table className="w-full mb-8 border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Description</th>
                        <th className="text-right py-2">Quantity</th>
                        <th className="text-right py-2">Price</th>
                        <th className="text-right py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData.items.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{item.description}</td>
                          <td className="text-right py-2">{item.quantity}</td>
                          <td className="text-right py-2">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="text-right py-2">
                            ${(item.quantity * item.price).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-end">
                    <div className="text-right">
                      <p className="text-xl font-semibold">
                        Total: ${calculateTotal().toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TransformComponent>
          </div>
        </div>
      </TransformWrapper>
    </div>
  );
}
