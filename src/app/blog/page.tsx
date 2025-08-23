import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Blog de Finanzas Personales</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Consejos prácticos, estrategias probadas e inspiración para tu viaje hacia la libertad financiera.
        </p>
      </header>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        <Button variant="secondary">Todos</Button>
        {categories.map(category => (
            <Button key={category} variant="ghost">{category}</Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden transition-transform hover:scale-105 duration-300">
            <Link href={`/blog/${post.slug}`} className="block">
              <Image
                src={post.image}
                alt={post.title}
                data-ai-hint={post.imageHint}
                width={400}
                height={250}
                className="w-full object-cover"
              />
            </Link>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
              <CardTitle className="font-headline text-xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="link" className="p-0 h-auto text-accent">
                <Link href={`/blog/${post.slug}`}>Leer más <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
