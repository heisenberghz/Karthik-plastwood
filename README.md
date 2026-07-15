# Karthik Fiber Works & Karthik Plast Wood

A premium, fully responsive business website for showcasing FRP fiber doors, frames, windows, WPC doors, frames, and PS wall panels manufactured in Katapadi, Udupi, Karnataka.

## Production Launch Checklist (Domain Updates)

When you purchase a custom domain (e.g., `https://karthikplastwood.com`), you need to update the placeholder URL (`https://karthikplastwood.vercel.app`) in the following **5 places** to ensure search engines index your site correctly:

### 1. index.html
Open [index.html](file:///d:/websites/karthik%20plastwood/index.html) and replace `https://karthikplastwood.vercel.app/` with your custom domain at:
* **Line 24:** Canonical Tag
  ```html
  <link rel="canonical" href="https://yourcustomdomain.com/" />
  ```
* **Line 32:** Open Graph URL Tag
  ```html
  <meta property="og:url" content="https://yourcustomdomain.com/" />
  ```
* **Line 49:** JSON-LD Local Business Schema URL
  ```json
  "url": "https://yourcustomdomain.com/",
  ```

### 2. robots.txt
Open [public/robots.txt](file:///d:/websites/karthik%20plastwood/public/robots.txt) and replace the domain at:
* **Line 4:** Sitemap Reference
  ```text
  Sitemap: https://yourcustomdomain.com/sitemap.xml
  ```

### 3. sitemap.xml
Open [public/sitemap.xml](file:///d:/websites/karthik%20plastwood/public/sitemap.xml) and replace the domain at:
* **Line 4:** Page Location
  ```xml
  <loc>https://yourcustomdomain.com/</loc>
  ```

---

## SEO Validation & Testing

Once your website is deployed, verify your local business search schema setup:

1. **Google Schema Markup Validator:**
   Go to [Google Rich Results Test](https://search.google.com/test/rich-results) or the [Schema Markup Validator](https://validator.schema.org/). Paste your live homepage URL to check if the `LocalBusiness` data parses without warnings.
2. **Google Search Console:**
   Add your domain, verify ownership, and submit your `https://yourcustomdomain.com/sitemap.xml` URL to request prompt indexing.

---

## Development Commands

Run the following commands in the project folder:

* **Start Dev Server:** `npm run dev`
* **Compile Build:** `npm run build`
* **Lint Check:** `npm run lint`
