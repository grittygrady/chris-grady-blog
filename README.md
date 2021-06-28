# Oh My Blog!

<!-- <img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/ComicombatBanner.png?raw=true"> -->

## 🚀 [Live Site](LINK HERE)

A blog for personal and professional-ish purposes.

<!-- <img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/comcombat-chars.png?raw=true"> -->

## 💡 Motivation

Establishing an online presence, as well as the fact that I've never actually had a personal blog! I wanted a place to showcase my projects and thoughts, both coding related and otherwise. Something less "businesslike" than my portfolio site, but still showing my love of coding.

<!-- <img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/comicombat.png?raw=true"> -->

## 🤔 The Problem

Establishing an online presence across multiple platforms is tedious and time consuming - I absolutely understand its value, but the D.R.Y. principle kicks in and I'd love a centralized place for all of my content, which can then be used on my LinkedIn and other professional / social networking sites.

I don't want to have to edit the code for my portfolio multiple times a week for things as simple as a post about the GreenSock animation library. A full-stack app is overkill for this purpose, so as the infomercials say, "There **_has_** to be a better way!"

<!-- <img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/ComiCombatWin.png?raw=true"> -->

## 🧐 The Solution

A Content Management System! I've never worked with one before, it was never touched upon in my curriculum at Thinkful, so this was an excellent opportunity to give it a whirl. I've decided to try [Sanity.io](https://www.sanity.io/), as I plan on deploying to Netlify, and using their CMS may be **too** easy, and not refelective of future on the job challenges. I considered Wordpress for the sake of its prevalence as legacy software, but the scope of learning that topic seems a bit large at the moment, and I'd like to get this off the ground quickly.

## 🧠 Lessons Learned

- CMS Systems

  > As ridiculous as this sounds, I genuinely did not know how a client would go about updating their website - particularly a blog or e-commerce / service site. I knew there _had_ to be a way that didn't involve digging in the code, I just waasn't exposed to them _yet_.

- Frameworks / Libraries and Mobile Design

  > When using a styling library (for this I used TailwindCSS), mobile first view becomes particularly important, because these tools allow one to put together an impressive page quickly, with animations / pre-built components, etc; however, it's quite easy to paint yourself into a corner when you first put your beautiful desktop site into mobile view and nearly have an aneurysm.

  > Also of note, when using a package such as `React-Social-Icons`, make sure it will fit all use cases BEFORE using. In this case React-Social-Icons` has no way to scale size based on media queries. Dug thrpugh dpcumentation to no avail. Very disappointing, but a good lesson. Decided to go with good ol' Font Awesome. Lightweight CDN.

- Tree Shaking

  > TailwindCSS has an excellent system of "tree shaking"; minifying bundle size by removing unused class names and properties. Absolutely outstanding.

- GROQ

  > A new-to-me, very interesting query syntax. Certainly want to dig into this further.

  > One element of GROQ is the "Category" reference. It assigns what appears to be a 16 digit value, possibly a hash of the string for the category title, it is consistent across posts. I think in order to display the names of categories, I'll have to add conditional checks for `post.categories[0]._ref` or the like

- LinkedIn is Awful

  > Alright maybe not awful. But I certainly dislike it. It looks like someone vomited spaghetti code all over the screen. But my real problem is when I attempted to customize my LinkedIn profile, something as simple as uploading a link to my site with a title, description and image, and to "feature" it is not possible without altering your site's metadata. This is _INSANE_ We're talking MySpace level of functionality. If I ever work on a site that atttempts to dethrone this bloated monarch of a professional social network, I'll die on that hill. Anyway, here's the code needed to link photos, etc. Replace `content` with needed details. Image must be hosted on Flickr/ Imgur, etc.

  `<meta name="description" content="_" />
  <meta name="title" property="og:title" content="_" />
  <meta property="og:type" content="_" />
  <meta name="image" property="og:image" content="_" />
  <meta name="description" property="og:description" content="_" /><meta name="author" content="_" />`

## 💾 Tech Used

- React / React Router
- Sanity.io for a CMS
- GROQ Query Language
- TailwindCSS
- Deployed via Netlify
- React-Social-Icons (for v1)

## 🔮 Next Steps

- Ditch the `new Date()` manner of formatting the date. Grab Moment.js or something.

- Learn more about Sanity.io in general. The way schemas are defined is quite different from the relational databases I've interacted with before. Things like "tags" and "categories" appear to be either objects or arrays (or arrays of objects 🤷🏻‍♀️ ?). I'd like those to display, as well as offer a method to filter to a specific category of posts. My rabid audience _demands_ this convenience.

- Integrate a system that allows for content to be shared across multiple platforms simultaneously, perhaps ITTT (If That Then This, an automation platform) will work, although I've never tried it with LinkedIn.

- The Sanity.io platform currently generates a slug based upon the title of the blog post. This should really be a UUID, as I don't know how Sanity will handle multiple identical slugs - Note to self - _Try duplicate titles._

- Decide how to order the projects page - check Posts.js for how to assemble the query. Will want to alter the order as I add more projects.
