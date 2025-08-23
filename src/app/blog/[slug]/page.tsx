import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Lightbulb } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Blog
          </Link>

          <article>
            <header className="mb-8">
              <Badge variant="secondary" className="mb-2">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{post.title}</h1>
            </header>
            
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.imageHint}
              width={800}
              height={450}
              className="rounded-lg shadow-lg mb-8 w-full"
            />
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
          
          <Card className="my-12 bg-background">
            <CardContent className="p-6 text-center">
                <Lightbulb className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-headline font-bold text-primary mb-2">Da el Siguiente Paso</h3>
                <p className="mb-4 text-muted-foreground">¿Listo para aplicar estos conceptos? Descarga nuestra herramienta gratuita para organizar tus finanzas y empezar a construir tu futuro.</p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/descarga-gratis">Obtener Herramienta Gratuita</Link>
                </Button>
            </CardContent>
          </Card>
          
          <div className="flex items-center gap-4 border-t pt-8">
            <Image 
                src="https://placehold.co/100x100.png"
                alt="Rolando"
                data-ai-hint="author portrait"
                width={100}
                height={100}
                className="rounded-full"
            />
            <div>
                <h4 className="font-headline font-bold">Escrito por Rolando</h4>
                <p className="text-sm text-muted-foreground">Fundador de "Deuda Fuera, Paz Dentro", dedicado a ayudar a personas como tú a alcanzar la libertad financiera a través de sistemas prácticos y realistas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
