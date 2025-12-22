interface DocumentRowProps {
  label: string;
  value?: string;
  sublabel?: string;
}

const DocumentRow = ({ label, value = "", sublabel }: DocumentRowProps) => (
  <div className="document-row p-4">
    <span className="document-label">{label}:</span>
    {sublabel && (
      <span className="text-sm text-muted-foreground ml-1">({sublabel})</span>
    )}
    {value && <span className="document-value"> {value}</span>}
  </div>
);

const BioBagDocument = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="document-container">
        {/* Title */}
        <h1 className="document-title">Leaflet</h1>

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
          />

          <DocumentRow 
            label="Category of Plastic Packaging" 
          />

          <DocumentRow 
            label="Thickness of plastic packaging" 
            sublabel="in case of Cat-II"
          />

          <DocumentRow 
            label="Registration No. of Compostable/Biodegradable Plastic" 
            sublabel="as per Rule 4h of PWM Rules, in case of Cat-IV/V"
          />

          <DocumentRow 
            label="Option (1-4) chosen for Labelling" 
            sublabel="Details given at Note II – A (1-4) below"
          />
        </div>

        {/* Notes Section */}
        <div className="border-t border-border p-6 mt-4">
          <h3 className="font-semibold text-foreground mb-4">Note II:</h3>
          <p className="text-muted-foreground mb-4">
            One of the following labelling options for Plastic Packaging:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Option 1:</span> Bar Code as per Rule 11 (1a) (Provide soft copy of packaging label with barcode)
            </li>
            <li>
              <span className="font-medium text-foreground">Option 2:</span> QR Code as per Rule 11 (1a) (Provide soft copy of packaging label with QR code)
            </li>
            <li>
              <span className="font-medium text-foreground">Option 3:</span> Information provided in Product Information Brochure as per Rule 11 (1b) (Provide soft copy of Product Information Brochure)
            </li>
            <li>
              <span className="font-medium text-foreground">Option 4:</span> Printing unique no. issued under any law in force for the time being (Provide soft copy of packaging label with the Unique No. and details of law under which this Number has been issued to the industry)
            </li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4 border-l-4 border-primary pl-4 py-2 bg-accent/30">
            <strong>B.</strong> At least one Option from those listed at A (1-4) has to be selected in Column (vi) of the above Format. More than one options can also be selected in this Section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioBagDocument;
