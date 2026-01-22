
'use client';

import { useEffect } from "react";
import { Blog } from "../../lib/blogs";
import { ScrollProgress } from "../ui/scroll-progress";
import Image from "next/image";

interface Props {
  blog: Blog;
}

export default function BlogPost({ blog }: Props) {
  useEffect(() => {
    const pres = document.querySelectorAll("pre");

    pres.forEach((pre) => {
      if (pre.dataset.copyButtonAdded) return;

      const codeEl = pre.querySelector("code");
      if (!codeEl) return;

      const button = document.createElement("button");
      button.textContent = "  ⧉ Copy";
      button.className = "copy-btn";

      Object.assign(button.style, {
        position: "absolute",
        top: "10px",
        right: "10px",
        padding: "4px 10px",
        fontSize: "12px",
        fontWeight: "600",
        borderRadius: "6px",
        background: "var(--p)",
        color: "var(--b1)",
        cursor: "pointer",
        opacity: "1",            // always visible
        transition: "none",      // no hover effect
      });

      pre.style.position = "relative";

      // Remove hover behavior
      // pre.addEventListener("mouseenter", () => (button.style.opacity = "1"));
      // pre.addEventListener("mouseleave", () => (button.style.opacity = "0"));

      button.onclick = async () => {
        await navigator.clipboard.writeText(codeEl.innerText);
        button.textContent = "✓ Copied";

        setTimeout(() => (button.textContent = "  ⧉ Copy"), 2000);
      };

      pre.appendChild(button);
      pre.dataset.copyButtonAdded = "true";
    });
  }, [blog.fullContent]);

  return (
    <article className="pt-20 max-w-3xl mx-auto font-geist">
      <ScrollProgress />

      <div className="relative overflow-hidden rounded-lg p-4 backdrop-blur-sm transition-shadow duration-300">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl leading-snug">
            {blog.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-base-content/60">
            {blog.date} • {blog.readTime} • {blog.category}
          </p>
        </header>

        {/* Image */}
        {blog.image && (
          <div className="mb-10 overflow-hidden rounded-xl border border-primary/20 shadow-sm relative aspect-[16/9]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="
            prose prose-sm sm:prose-base lg:prose-lg
            max-w-none text-base-content

            [&_p]:my-6
            [&_p]:leading-relaxed lg:[&_p]:leading-loose

            [&_h1]:mt-16 [&_h1]:mb-6
            [&_h2]:mt-14 [&_h2]:mb-5
            [&_h3]:mt-12 [&_h3]:mb-4
            [&_h4]:mt-10 [&_h4]:mb-3

            [&_a]:font-medium
            [&_a]:underline
            [&_a]:underline-offset-6
            [&_a]:decoration-dashed
            [&_a]:transition-colors
            [&_a:hover]:text-primary

            [&_ul]:ml-8 [&_ul]:my-6 [&_ul]:space-y-3
            [&_ol]:ml-8 [&_ol]:my-6 [&_ol]:space-y-3

            [&_blockquote]:border-l-4
            [&_blockquote]:border-primary/40
            [&_blockquote]:pl-6
            [&_blockquote]:italic
            [&_blockquote]:text-base-content/80

            [&_pre]:border              
            [&_pre]:border-primary/20
            [&_pre]:bg-base-200
            [&_pre]:rounded-lg
            [&_pre]:p-6
            [&_pre]:overflow-x-auto
            [&_pre]:shadow-sm

            [&_code]:font-geist
            [&_code]:text-sm
            [&_code]:leading-relaxed
          "
          dangerouslySetInnerHTML={{ __html: blog.fullContent }}
        />
      </div>
    </article>
  );
}
