import bioBagLogo from "@/assets/bio-bag-india-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

interface DocumentRowProps {
  label: string;
  value?: string;
}

const DocumentRow = ({ label, value = "" }: DocumentRowProps) => (
  <div className="document-row p-4">
    <span className="document-label">{label}:</span>
    {value && <span className="document-value font-bold"> {value}</span>}
  </div>
);

const BioBagDocument = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="document-container">
        {/* Title with Logo */}
        <div className="flex items-center justify-center gap-4 py-4">
          <img 
            src={bioBagLogo} 
            alt="Bio Bag India Logo" 
            className="h-16 w-auto"
          />
          <h1 className="document-title m-0">Leaflet</h1>
        </div>

        {/* Document Body */}
        <div className="border-t border-border">
          {/* Header Row */}
          <div className="document-header">
            Read Leaflet Before Use
          </div>

          {/* Data Rows */}
          <DocumentRow 
            label="Company Name" 
            value="Bio Bag India"
          />

          <DocumentRow 
            label="EPR Registration No." 
            value="WH-91866"
          />

          <DocumentRow 
            label="Category of Plastic Packaging" 
            value="(IV)"
          />

          <DocumentRow 
            label="Thickness of plastic packaging" 
            value="(NA)"
          />

          <DocumentRow 
            label="Registration No. of Compostable/Biodegradable Plastic" 
            value="AVIOS GREEN IND. 1 GUJARAT / 517"
          />

          <DocumentRow 
            label="Option (1-4) chosen for Labelling" 
            value="A1"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="document-container mt-4 p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="font-bold">biobagindia48@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="font-bold">+91 99748 30507</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="font-bold">
              Silver Complex, Lothada G.I.D.C., Umiya Industrial Area, B/h Rajkot - 360024, Gujarat, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioBagDocument;
