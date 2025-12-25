import bioBagLogo from "@/assets/bio-bag-india-logo.png";

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
      <div className="document-container mt-4 p-4 text-center">
        <p className="font-bold">Email :- biobagindia48@gmail.com</p>
        <p className="font-bold">Phone :- +91 99748 30507</p>
        <p className="font-bold">
          Factory Address:- Silver Complex, Lothada G.I.D.C.,<br />
          Umiya Industrial Area, B/h<br />
          Rajkot - 360024, Gujarat, India
        </p>
      </div>
    </div>
  );
};

export default BioBagDocument;
