"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BLOG_POST_DETAILS,
  POST_COMMENTS,
} from "@/config/constants/blog-dummy-data";
import {
  CalendarIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  UserIcon,
  XIcon,
} from "@/components/icons";
import CTASection from "@/components/shared/cta-section";
import PostsRelatedSection from "./sections/posts-related-section";
import { Post } from "@/types/shared-types";

export default function BlogDetailContainer() {
  const params = useParams();
  const { slug } = params;

  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<
    {
      id: number;
      name: string;
      date: string;
      content: string;
      replies: {
        id: number;
        name: string;
        date: string;
        content: string;
      }[];
    }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commentStatus, setCommentStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    // Find the current post
    const currentPost =
      BLOG_POST_DETAILS.find((post) => post.slug === slug) || null;
    setPost(currentPost);

    if (currentPost) {
      // Find related posts (same category, excluding current post)
      const related = BLOG_POST_DETAILS.filter(
        (p) => p.category === currentPost.category && p.id !== currentPost.id,
      ).slice(0, 3);
      setRelatedPosts(related);

      // Set comments for this post
      setComments(POST_COMMENTS);
    }
  }, [slug]);

  interface CommentReply {
    id: number;
    name: string;
    date: string;
    content: string;
  }

  interface Comment {
    id: number;
    name: string;
    date: string;
    content: string;
    replies: CommentReply[];
  }

  interface CommentStatus {
    type: string;
    message: string;
  }

  interface CommentFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    comment: HTMLTextAreaElement;
  }

  interface CommentForm extends HTMLFormElement {
    elements: CommentFormElements;
  }

  const handleCommentSubmit = (e: React.FormEvent<CommentForm>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate comment submission
    setTimeout(() => {
      setCommentStatus({
        type: "success",
        message:
          "Yorumunuz başarıyla gönderildi. İncelendikten sonra yayınlanacaktır.",
      });
      setIsSubmitting(false);
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Yazı Bulunamadı</h1>
        <p className="text-muted-foreground mb-8">
          Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.
        </p>
        <Button asChild>
          <Link href="/blog">Blog Sayfasına Dön</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container text-white">
          <div className="mx-auto max-w-3xl text-center">
            <span className="bg-primary text-primary-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
              {post.categoryName}
            </span>
            <h1 className="mb-6 text-3xl leading-tight font-bold md:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>{post.readTime} okuma süresi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Author Info */}
            <div className="mb-8 flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-muted-foreground text-sm">
                  {post.authorTitle}
                </p>
              </div>
            </div>

            {/* Blog Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={
                post.content ? { __html: post.content } : undefined
              }
            />

            {/* Social Share */}
            <div className="mt-12 border-t pt-8">
              <h3 className="mb-4 text-lg font-semibold">Bu Yazıyı Paylaş</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Facebook'ta Paylaş"
                >
                  <FacebookIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Twitter'da Paylaş"
                >
                  <XIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="LinkedIn'de Paylaş"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Instagram'da Paylaş"
                >
                  <InstagramIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="border-t shadow-inner py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">
              Yorumlar ({comments.length})
            </h2>

            {/* Comments List */}
            {comments.length > 0 ? (
              <div className="space-y-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {comment.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{comment.name}</h4>
                            <p className="text-muted-foreground text-xs">
                              {comment.date}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{comment.content}</p>
                    </div>

                    {/* Comment Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-8 space-y-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="rounded-lg border p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>
                                    {reply.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-semibold">
                                    {reply.name}
                                  </h4>
                                  <p className="text-muted-foreground text-xs">
                                    {reply.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground">
                              {reply.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border p-8 text-center">
                <MailIcon className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-semibold">Henüz Yorum Yok</h3>
                <p className="text-muted-foreground mb-4">
                  Bu yazı hakkında ilk yorumu siz yapın!
                </p>
              </div>
            )}

            {/* Comment Form */}
            <div className="mt-12">
              <h3 className="mb-4 text-xl font-semibold">Yorum Yap</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Ad Soyad
                    </label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      E-posta
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="mb-2 block text-sm font-medium"
                  >
                    Yorumunuz
                  </label>
                  <Textarea id="comment" name="comment" rows={5} required />
                </div>

                {commentStatus.message && (
                  <div
                    className={`rounded-md p-4 ${
                      commentStatus.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    <p>{commentStatus.message}</p>
                  </div>
                )}

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Gönderiliyor..." : "Yorum Gönder"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <PostsRelatedSection relatedPosts={relatedPosts} />
      )}

      {/* CTA Section */}
      <CTASection
        title="Profesyonel Destek İçin Yanınızdayız"
        description="Bu yazıda ele aldığımız konular hakkında profesyonel destek almak isterseniz, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
