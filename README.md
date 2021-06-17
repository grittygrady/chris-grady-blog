# ComiCombat

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

A Content Management System! I've never worked with one before, it was never touched upon in my curriculum at Thinkful, so this was an excellent opportunity to give it a whirl. I've decided to try [Sanity.io](https://www.sanity.io/), as I plan on deploying to Netlify, and using their CMS may be **too** easy, and not refelective of future on the job challenges. I considered Wordpress for the sake of its prevalence as legacy software, but the scope of learning that topic seems a bit large at the moment, and I'd like to get this off the ground quicly.

## 🧠 Lessons Learned

- CMS Systems

  > As ridiculous as this sounds, I genuinely did not know how a client would go about updating their website - particularly a blog or e-commerce / service site. I knew there _had_ to be a way that didn't involve digging in the code, I just waasn't exposed to them anymore.

- Frameworks / Libraries and Mobile Design

  > When using a styling library (for this I used TailwindCSS), mobile first view becomes particularly important, because these tools allow one to put together an impressive page quickly, with animations / pre-built components, etc; however, it's quite easy to paint yourself into a corner when you first put your beautiful desktop site into mobile view and nearly have an aneurysm.

- Tree Shaking

  > Yeah write about that bundle size optimization

- GROQ

  > Blah blah so many different knex, PostgreSQL, blah blah

## 💾 Tech Used

- React / React Router
- Sanity.io for a CMS
- GROQ Query Language
- TailwindCSS
- Deployed via Netlify

## 🔮 Next Steps

- Ditch the `new Date()` manner of formatting the date. Grab Moment.js or something.

- Learn more about Sanity.io in general. The way schemas are defined is quite different from the relational databases I've interacted with before. Things like "tags" and "categories" appear to be either objects or arrays (or arrays of objects 🤷🏻‍♀️ ?). I'd like those to display, as well as offer a method to filter to a specific category of posts. My rabid audience _demands_ this convenience.

- Integrate a system that allows for content to be shared across multiple platforms simultaneously, perhaps ITTT (If That Then This, an automation platform) will work, although I've never tried it with LinkedIn.

- The Sanity.io platform currently generates a slug based upon the title of the blog post. This should really be a UUID, as I don't knw how Sanity will handle multiple identical slugs - Note to self - _Try duplicate titles._
