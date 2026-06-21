import bioBagLogo from "@/assets/bio-bag-india-logo.png";
import isoCert1 from "@/assets/iso-cert-1.jpeg.asset.json";
import isoCert2 from "@/assets/iso-cert-2.jpeg.asset.json";
import isoCert3 from "@/assets/iso-cert-3.jpeg.asset.json";
import cert2_1 from "@/assets/cert2-1.jpeg.asset.json";
import cert2_2 from "@/assets/cert2-2.jpeg.asset.json";
import cert2_3 from "@/assets/cert2-3.jpeg.asset.json";
import cert2_4 from "@/assets/cert2-4.jpeg.asset.json";
import { Mail } from "lucide-react";

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
            value="AVIOS GREEN IND./GUJARAT/517"
          />

          <DocumentRow 
            label="Option (1-4) chosen for Labelling" 
            value="A1"
          />

          <DocumentRow 
            label="GPCB CCA No." 
            value="GPCB/CCA/RJT-8185/ID-119975/2026/12480"
          />

          <DocumentRow 
            label="ISO 9001:2015 Cert No." 
            value="Q2A-2026-0211T111621"
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
        </div>

        {/* ISO Certificate Section */}
        <div className="mt-6">
          <h2 className="document-header mb-4">ISO Certificate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={isoCert1.url} alt="ISO Certificate 1" className="w-full h-auto border border-border rounded" />
            <img src={isoCert2.url} alt="ISO Certificate 2" className="w-full h-auto border border-border rounded" />
            <img src={isoCert3.url} alt="ISO Certificate 3" className="w-full h-auto border border-border rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioBagDocument;
