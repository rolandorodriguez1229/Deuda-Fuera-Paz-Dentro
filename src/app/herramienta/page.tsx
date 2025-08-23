import FinancialTool from "./components/FinancialTool";

export default function FinancialToolPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Herramienta de Análisis Financiero</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Sube la plantilla de Excel que descargaste, completada con tus datos, y recibe un resumen personalizado y consejos para acelerar tu camino hacia la libertad financiera.
        </p>
      </header>
      
      <main>
        <FinancialTool />
      </main>
    </div>
  );
}
