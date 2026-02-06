import styles from './mdx-components.module.css';

type CalloutType = 'info' | 'warning' | 'success' | 'error';

export const Callout = ({
  type = 'info',
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) => (
  <div className={`${styles.callout} ${styles[`callout-${type}`]}`}>
    <div className={styles.calloutIcon}>
      {type === 'info' && '💡'}
      {type === 'warning' && '⚠️'}
      {type === 'success' && '✅'}
      {type === 'error' && '❌'}
    </div>
    <div className={styles.calloutContent}>{children}</div>
  </div>
);

export const Img = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <figure className={styles.imageFigure}>
    <img src={src} alt={alt} className={styles.image} />
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
);

export const CodeBlock = ({
  children,
  title,
  language,
  code,
}: {
  children?: React.ReactNode;
  title?: string;
  language?: string;
  code?: string;
}) => {
  const codeContent = code || children;
  return (
    <div className={styles.codeBlockWrapper}>
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <pre className={`${styles.codeBlock} language-${language || 'text'}`}>
        <code>{codeContent}</code>
      </pre>
    </div>
  );
};

export const Prose = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.prose}>{children}</div>
);
