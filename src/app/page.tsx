"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Hot & Spicy Puff"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Hot & Spicy Puff & More"
      description="Authentic flavors and crispy delights crafted with love. Discover our signature menu of hand-baked puffs, sandwiches, and combo deals."
      tag="Since 2015"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg"
      imageAlt="Signature puff pastry assortment"
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Classic Veg Puff",
          price: "₹30",
          variant: "Signature",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg",
        },
        {
          id: "2",
          name: "Paneer Makhni Puff",
          price: "₹100",
          variant: "Premium",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg",
        },
        {
          id: "3",
          name: "Cheese Burst Puff",
          price: "₹100",
          variant: "Popular",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg",
        },
        {
          id: "4",
          name: "Paneer Kadhai Sandwich",
          price: "₹150",
          variant: "Hot & Spicy",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg",
        },
        {
          id: "5",
          name: "Express Combo",
          price: "₹99",
          variant: "Steal Deal",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg",
        },
        {
          id: "6",
          name: "Family Combo",
          price: "₹399",
          variant: "Steal Deal",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C0qGlTRSeqyPd4LClB7rJ7iZS9/uploaded-1775532822101-b8au01q5.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Hand-picked favorites to satisfy your cravings."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The best puff pastries I have ever tried! The cheese burst puff is absolutely divine."
      rating={5}
      author="Anjali Sharma"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-man-restaurant_23-2148899031.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-slice-watermelon_329181-20379.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/african-american-female-with-curly-bushy-hairstyle-shares-media-social-networks-uses-free-internet-connection-chating-with-friends-listening-favourite-music-headphones-leisure-concept_273609-2467.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5512.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-enjoying-food-restaurant_23-2149269179.jpg",
          alt: "Customer 5",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Culinary Journey"
      description="Read more about our passion for street food and the history behind our most loved puff recipes."
      blogs={[
        {
          id: "b1",
          category: "Behind the Scenes",
          title: "The Art of the Perfect Puff",
          excerpt: "What makes our pastry so flaky and crispy? Learn about our hand-folding technique.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cinnamon-rolls-table_23-2148604544.jpg",
          authorName: "Chef Rahul",
          authorAvatar: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-man-restaurant_23-2148899031.jpg",
          date: "Oct 12, 2024",
        },
        {
          id: "b2",
          category: "Menu Highlights",
          title: "Why Cheese Burst is a Hit",
          excerpt: "Explore the secret ingredients behind our best-selling menu item.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cinnamon-rolls-table_23-2148604544.jpg",
          authorName: "Marketing Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/woman-with-slice-watermelon_329181-20379.jpg",
          date: "Sep 30, 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-animated",
      }}
      text="Visit us at Asopalav Crossroads, Ground Floor, Nana Mava Main Road, Rajkot. Fresh snacks served daily!"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Hot & Spicy Puff"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Regular Puffs",
              href: "#menu",
            },
            {
              label: "Signature Puffs",
              href: "#menu",
            },
            {
              label: "Combos",
              href: "#menu",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Location",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
