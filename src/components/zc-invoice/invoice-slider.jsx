import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Download, Edit, Plus, Trash } from "lucide-react";

export default function InvoiceSlider({ invoiceData, setInvoiceData, toPDF }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, price: 0 }],
    }));
  };

  const removeItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  return (
    <div className="flex space-x-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Invoice
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Edit Invoice</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={invoiceData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input
                  id="invoiceNumber"
                  name="invoiceNumber"
                  value={invoiceData.invoiceNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={invoiceData.date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                name="dueDate"
                type="date"
                value={invoiceData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                name="clientName"
                value={invoiceData.clientName}
                onChange={handleInputChange}
              />
            </div>
            <Separator />
            <div className="space-y-4">
              {invoiceData.items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-2 items-center"
                >
                  <div className="col-span-5">
                    <Input
                      placeholder="Item description"
                      value={item.description}
                      onChange={(e) =>
                        handleItemChange(index, "description", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="number"
                      placeholder="Quantity"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "quantity",
                          parseInt(e.target.value),
                        )
                      }
                    />
                  </div>
                  <div className="col-span-3">
                    <Input
                      type="number"
                      placeholder="Price"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "price",
                          parseFloat(e.target.value),
                        )
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(index)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={addItem}>
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Button onClick={() => toPDF()} size="sm">
        <Download className="mr-2 h-4 w-4" />
        Download PDF
      </Button>
    </div>
  );
}
