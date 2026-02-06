import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { Callout, Img, CodeBlock } from '@/app/blog/components/mdx-components';
import styles from './post.module.css';

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(dateString));

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.meta.slug }));

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.meta.title} | Blog`,
    description: post.meta.excerpt,
  };
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: {
      Callout,
      Img,
      CodeBlock,
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <main className={styles.postPage}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.date}>{formatDate(post.meta.date)}</p>
          <h1 className={styles.title}>{post.meta.title}</h1>
          <p className={styles.excerpt}>{post.meta.excerpt}</p>
          {post.meta.tags?.length ? (
            <div className={styles.tags}>
              {post.meta.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className={`section-padding ${styles.contentSection}`}>
        <article className={`container ${styles.prose}`}>{content}</article>
      </section>
    </main>
  );
}
