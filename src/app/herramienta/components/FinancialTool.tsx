"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertCircle, BarChart2, FileUp, Lightbulb, PiggyBank, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Separator } from '@/components/ui/separator';

type View = 'upload' | 'loading' | 'dashboard';

export default function FinancialTool() {
  const [view, setView] = useState<View>('upload');
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleAnalyze = () => {
    if (!fileName) return;
    
    setView('loading');
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setView('dashboard');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleReset = () => {
      setFileName('');
      setProgress(0);
      setView('upload');
  }

  const budgetData = [
    { name: "Vivienda", value: 1200 },
    { name: "Deudas", value: 800 },
    { name: "Comida", value: 600 },
    { name: "Transporte", value: 300 },
    { name: "Ocio", value: 250 },
    { name: "Ahorro", value: 350 },
  ]


  if (view === 'loading') {
    return (
      <Card className="max-w-2xl mx-auto text-center p-8">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Analizando tus Finanzas...</CardTitle>
          <CardDescription>Estamos procesando tu información para darte una visión clara de tu situación financiera.</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
          <p className="mt-4 text-sm text-muted-foreground">{progress}% completado</p>
        </CardContent>
      </Card>
    );
  }

  if (view === 'dashboard') {
    return (
      <div className="space-y-8">
         <div className="text-center">
            <h2 className="text-3xl font-headline font-bold">Tu Resumen Financiero Personalizado</h2>
            <p className="text-muted-foreground mt-2">Basado en el archivo: <span className="font-semibold">{fileName}</span></p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><Target /> Deuda Total</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold">$25,480.00</p>
                    <p className="text-sm text-muted-foreground">en 4 cuentas</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><PiggyBank /> Ingreso Neto Mensual</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold">$3,500.00</p>
                    <p className="text-sm text-muted-foreground">después de impuestos</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><BarChart2 /> Ratio Deuda/Ingreso</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold text-destructive">23%</p>
                    <p className="text-sm text-muted-foreground">Tu pago de deudas es un 23% de tu ingreso.</p>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Distribución de Gastos Mensuales</CardTitle>
                <CardDescription>Así es como se distribuye tu dinero cada mes.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={budgetData}>
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`}/>
                            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
        
        <Card className="bg-primary text-primary-foreground">
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Lightbulb /> Consejos Personalizados de IA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 bg-primary/80 rounded-lg">
                    <h4 className="font-bold flex items-center gap-2"><AlertCircle className="text-accent" /> Oportunidad Principal</h4>
                    <p>Tu gasto en "Ocio" es de $250. Reducirlo temporalmente en un 50% ($125) y aplicarlo a tu tarjeta de crédito con mayor interés podría ahorrarte $300 en intereses y liquidarla 4 meses antes.</p>
                </div>
                 <div className="p-4 bg-primary/80 rounded-lg">
                    <h4 className="font-bold">Sugerencia de Estrategia</h4>
                    <p>Dado que tienes una deuda pequeña de $500, el <span className="font-semibold text-accent">Método Bola de Nieve</span> podría darte una victoria rápida y motivación. Considera enfocar tus pagos extra en esa deuda primero.</p>
                </div>
            </CardContent>
             <CardFooter>
                <Button variant="secondary" onClick={handleReset}>Analizar otro archivo</Button>
            </CardFooter>
        </Card>

      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-2 border-dashed">
      <CardContent className="p-8 text-center flex flex-col items-center">
        <FileUp className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">Sube tu archivo de Excel</h3>
        <p className="text-muted-foreground mb-6">Arrastra y suelta tu archivo aquí o haz clic para seleccionarlo.</p>
        <div className="relative w-full max-w-sm">
             <Input id="file-upload" type="file" className="opacity-0 absolute inset-0 z-10 cursor-pointer" onChange={handleFileChange} accept=".xlsx, .xls"/>
             <Button asChild variant="secondary" className="w-full cursor-pointer">
                <label htmlFor="file-upload">Seleccionar Archivo</label>
             </Button>
        </div>
       
        {fileName && <p className="mt-4 text-sm font-medium">Archivo seleccionado: {fileName}</p>}
      </CardContent>
      <CardFooter>
        <Button onClick={handleAnalyze} disabled={!fileName} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Analizar Mis Finanzas
        </Button>
      </CardFooter>
    </Card>
  );
}
