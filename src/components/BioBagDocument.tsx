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
            value="WH-91866"
          />

          <DocumentRow 
            label="Category of Plastic Packaging" 
            value="IV"
          />

          <DocumentRow 
            label="Thickness of plastic packaging" 
            sublabel="in case of Cat-II"
            value="NA"
          />

          <DocumentRow 
            label="Registration No. of Compostable/Biodegradable Plastic" 
            sublabel="as per Rule 4h of PWM Rules, in case of Cat-IV/V"
            value="AVIOS GREEN IND. 1 GUJARAT / 517"
          />

          <DocumentRow 
            label="Option (1-4) chosen for Labelling" 
            sublabel="Details given at Note II – A (1-4) below"
            value="A1"
          />
        </div>

      </div>
    </div>
  );
};

export default BioBagDocument;
